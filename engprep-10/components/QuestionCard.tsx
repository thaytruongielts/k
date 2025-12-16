import React from 'react';
import { Question } from '../types';
import { Check, X, HelpCircle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  userAnswer: string;
  onChange: (value: string) => void;
  gradingStatus: boolean | null; // true, false, or null (pending/unchecked)
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  userAnswer, 
  onChange, 
  gradingStatus 
}) => {
  
  // Determine border color based on status
  let statusColor = "border-slate-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500";
  let statusIcon = null;
  let bgColor = "bg-white";

  if (gradingStatus === true) {
    statusColor = "border-green-500 bg-green-50";
    bgColor = "bg-green-50/30";
    statusIcon = <Check className="w-5 h-5 text-green-600" />;
  } else if (gradingStatus === false) {
    statusColor = "border-red-500 bg-red-50";
    bgColor = "bg-red-50/30";
    statusIcon = <X className="w-5 h-5 text-red-600" />;
  }

  // Helper to split question text if it has placeholder lines like ______ or ............
  // Simple heuristic: if it contains ______, we might want to highlight it, but purely textual display is safer for flexibility.
  
  return (
    <div className={`p-4 rounded-xl border ${gradingStatus === false ? 'border-red-200' : 'border-slate-200'} ${bgColor} transition-all shadow-sm`}>
      <div className="flex items-start gap-3 mb-3">
        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-slate-100 text-slate-500 text-xs font-bold rounded-full mt-0.5">
          {question.id}
        </span>
        <p className="text-slate-800 font-medium leading-relaxed">
          {question.text}
        </p>
      </div>

      <div className="relative">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your answer here..."
          disabled={gradingStatus === true} // Disable if correct
          className={`w-full p-3 pr-10 rounded-lg border outline-none font-medium text-slate-700 transition-all ${statusColor}`}
          autoComplete="off"
          autoCorrect="off"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {statusIcon}
        </div>
      </div>
      
      {gradingStatus === false && (
        <p className="mt-2 text-xs text-red-600 font-medium flex items-center gap-1">
          <HelpCircle className="w-3 h-3" />
          Incorrect. Try again.
        </p>
      )}
    </div>
  );
};

export default QuestionCard;