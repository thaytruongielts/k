import React from 'react';

interface ScoreBoardProps {
  totalQuestions: number;
  correctCount: number;
  answeredCount: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ totalQuestions, correctCount, answeredCount }) => {
  const score = totalQuestions > 0 ? (correctCount / totalQuestions) * 10 : 0;

  return (
    <div className="bg-white border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-20 shadow-sm md:static md:shadow-none md:border-b-0 md:bg-transparent">
      <div className="flex flex-col">
        <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Current Score</span>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-slate-900">{score.toFixed(1)}</span>
          <span className="text-sm text-slate-400">/ 10</span>
        </div>
      </div>
      
      <div className="flex gap-4 text-right">
        <div>
           <span className="block text-xs text-slate-500">Correct</span>
           <span className="font-bold text-green-600">{correctCount}</span>
        </div>
        <div>
           <span className="block text-xs text-slate-500">Progress</span>
           <span className="font-bold text-blue-600">{Math.round((answeredCount / totalQuestions) * 100)}%</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;