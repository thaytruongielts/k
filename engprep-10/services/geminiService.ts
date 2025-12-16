import { GoogleGenAI, Type } from "@google/genai";
import { Question } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function checkAnswersBatch(
  questions: Question[],
  userAnswers: { [key: number]: string }
): Promise<{ questionId: number; isCorrect: boolean }[]> {
  
  // Filter only answered questions
  const answeredQuestions = questions.filter(q => userAnswers[q.id] && userAnswers[q.id].trim() !== "");

  if (answeredQuestions.length === 0) {
    return [];
  }

  // Prepare prompt payload
  const inputs = answeredQuestions.map(q => ({
    id: q.id,
    question_text: q.text,
    user_answer: userAnswers[q.id]
  }));

  const model = "gemini-2.5-flash";
  const systemInstruction = `
    You are an expert English teacher grading 10th-grade entrance exam exercises in Vietnam. 
    You will receive a list of questions and the student's answers.
    
    Rules:
    1. STRICTLY check grammar, tense, spelling, and punctuation appropriate for the context.
    2. For "Rewrite sentence" questions, ensure the meaning is preserved and the grammatical structure is correct.
    3. For "Fill in the blank", ensure the verb conjugation or word choice fits perfectly.
    4. Return a JSON array where each object has 'questionId' and 'isCorrect' (boolean).
    5. Be lenient with minor capitalization errors at the start of fill-in-the-blank unless it's a proper noun, but strict for full sentences.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: `Grade these answers: ${JSON.stringify(inputs)}`,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              questionId: { type: Type.INTEGER },
              isCorrect: { type: Type.BOOLEAN },
            },
            required: ["questionId", "isCorrect"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    
    return JSON.parse(text) as { questionId: number; isCorrect: boolean }[];

  } catch (error) {
    console.error("Gemini Grading Error:", error);
    // Fallback or error handling could go here. 
    // Currently retuning empty array to signify no grade updates.
    return [];
  }
}