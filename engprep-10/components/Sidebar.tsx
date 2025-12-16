import React from 'react';
import { Section, Topic } from '../types';
import { BookOpen, CheckCircle, ChevronRight, Menu, X } from 'lucide-react';

interface SidebarProps {
  sections: Section[];
  activeTopicId: string;
  onSelectTopic: (id: string) => void;
  completedTopics: string[]; // IDs of topics that are fully done/checked
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  sections, 
  activeTopicId, 
  onSelectTopic, 
  completedTopics,
  isOpen,
  setIsOpen
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside 
        className={`fixed top-0 left-0 h-full w-80 bg-white border-r border-slate-200 z-30 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:h-screen overflow-y-auto`}
      >
        <div className="p-4 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
          <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            EngPrep 10
          </h1>
          <button onClick={() => setIsOpen(false)} className="md:hidden text-slate-500">
            <X size={24} />
          </button>
        </div>

        <div className="p-4 space-y-6">
          {sections.map(section => (
            <div key={section.id}>
              <h2 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">
                {section.title}
              </h2>
              <div className="space-y-1">
                {section.topics.map(topic => {
                  const isActive = activeTopicId === topic.id;
                  // Simplified: Topic is considered "visited" or partially done if user selected it
                  return (
                    <button
                      key={topic.id}
                      onClick={() => {
                        onSelectTopic(topic.id);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group ${
                        isActive 
                          ? 'bg-blue-50 text-blue-700' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span className="truncate pr-2">{topic.title}</span>
                      {isActive && <ChevronRight className="w-4 h-4 text-blue-500" />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;