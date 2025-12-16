export interface Question {
  id: number;
  topicId: string;
  text: string;
  hint?: string;
  context?: string; // For cases like "Rewrite sentence"
}

export interface Topic {
  id: string;
  title: string;
  sectionId: string;
  description: string;
}

export interface Section {
  id: string;
  title: string;
  topics: Topic[];
}

export interface GradingResult {
  questionId: number;
  isCorrect: boolean;
}

export interface UserAnswers {
  [key: number]: string;
}

export interface GradingStatus {
  [key: number]: boolean | null; // true = correct, false = incorrect, null = unchecked
}