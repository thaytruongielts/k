import React, { useState, useMemo, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import QuestionCard from './components/QuestionCard';
import ScoreBoard from './components/ScoreBoard';
import { SECTIONS, QUESTIONS } from './data';
import { UserAnswers, GradingStatus } from './types';
import { checkAnswersBatch } from './services/geminiService';
import { Menu, Loader2, Send } from 'lucide-react';

const App: React.FC = () => {
  const [activeTopicId, setActiveTopicId] = useState<string>(SECTIONS[0].topics[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // State for all answers and grading
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [gradingStatus, setGradingStatus] = useState<GradingStatus>({});
  const [isChecking, setIsChecking] = useState(false);

  // Derived state
  const activeSection = SECTIONS.find(s => s.topics.some(t => t.id === activeTopicId));
  const activeTopic = activeSection?.topics.find(t => t.id === activeTopicId);
  
  const currentQuestions = useMemo(() => 
    QUESTIONS.filter(q => q.topicId === activeTopicId), 
  [activeTopicId]);

  // Calculate global score
  const totalCorrect = Object.values(gradingStatus).filter(status => status === true).length;
  // Total questions is always 150 for the full denominator, or we can do progress based. 
  // Requirement: "10 * số câu đúng / tổng số câu". 
  // Assuming "tổng số câu" means the total questions available in the app (150).
  const TOTAL_QUESTIONS_COUNT = QUESTIONS.length; 
  const answeredCount = Object.keys(userAnswers).length;

  const handleAnswerChange = (questionId: number, value: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: value }));
    // Reset grading status when user types to allow retry
    if (gradingStatus[questionId] !== null) {
      setGradingStatus(prev => {
        const next = { ...prev };
        delete next[questionId];
        return next;
      });
    }
  };

  const handleCheckTopic = async () => {
    if (isChecking) return;
    setIsChecking(true);

    try {
      // Get only questions for current topic that have an answer and aren't already correct
      const questionsToCheck = currentQuestions.filter(q => {
        const ans = userAnswers[q.id];
        const isAlreadyCorrect = gradingStatus[q.id] === true;
        return ans && ans.trim().length > 0 && !isAlreadyCorrect;
      });

      if (questionsToCheck.length === 0) {
        setIsChecking(false);
        return;
      }

      const results = await checkAnswersBatch(questionsToCheck, userAnswers);

      setGradingStatus(prev => {
        const next = { ...prev };
        results.forEach(res => {
          next[res.questionId] = res.isCorrect;
        });
        return next;
      });

    } catch (error) {
      console.error("Check failed", error);
    } finally {
      setIsChecking(false);
    }
  };

  // Scroll to top when topic changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTopicId]);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar 
        sections={SECTIONS}
        activeTopicId={activeTopicId}
        onSelectTopic={setActiveTopicId}
        completedTopics={[]}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header Trigger */}
        <div className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <button onClick={() => setSidebarOpen(true)} className="text-slate-600">
                    <Menu />
                </button>
                <span className="font-bold text-slate-800">EngPrep 10</span>
            </div>
            <div className="text-sm font-bold text-blue-600">
                 Score: {((totalCorrect / TOTAL_QUESTIONS_COUNT) * 10).toFixed(1)}
            </div>
        </div>

        {/* Desktop Header / Toolbar */}
        <header className="hidden md:flex bg-white border-b border-slate-200 px-8 py-4 items-center justify-between">
           <div>
             <h2 className="text-lg font-bold text-slate-800">{activeTopic?.title}</h2>
             <p className="text-sm text-slate-500">{activeTopic?.description}</p>
           </div>
           
           <div className="flex items-center gap-6">
             <ScoreBoard 
                totalQuestions={TOTAL_QUESTIONS_COUNT} 
                correctCount={totalCorrect} 
                answeredCount={answeredCount}
             />
           </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 relative">
          <div className="max-w-3xl mx-auto space-y-6 pb-24">
            
            {/* Mobile Topic Header */}
            <div className="md:hidden mb-4">
                <h2 className="text-lg font-bold text-slate-800">{activeTopic?.title}</h2>
                <p className="text-sm text-slate-500">{activeTopic?.description}</p>
            </div>

            {currentQuestions.map(q => (
              <QuestionCard 
                key={q.id}
                question={q}
                userAnswer={userAnswers[q.id] || ''}
                onChange={(val) => handleAnswerChange(q.id, val)}
                gradingStatus={gradingStatus[q.id] ?? null}
              />
            ))}

            <div className="h-12"></div> {/* Spacer */}
          </div>
        </div>

        {/* Floating Action Bar */}
        <div className="absolute bottom-6 left-0 right-0 md:left-80 flex justify-center pointer-events-none">
            <div className="bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl rounded-full p-2 pointer-events-auto flex items-center gap-4 px-6">
                <div className="text-sm text-slate-500 hidden sm:block">
                    Finish the section then check
                </div>
                <button 
                    onClick={handleCheckTopic}
                    disabled={isChecking}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/25"
                >
                    {isChecking ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Checking...
                        </>
                    ) : (
                        <>
                            Check Answers
                            <Send className="w-4 h-4" />
                        </>
                    )}
                </button>
            </div>
        </div>

      </main>
    </div>
  );
};

export default App;