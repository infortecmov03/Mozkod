'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { curriculumData } from '@/lib/curriculum-data';

type ProgressContextType = {
  progress: string[];
  markAsCompleted: (lessonId: string) => void;
  isCompleted: (lessonId: string) => boolean;
  totalLessons: number;
  completedLessons: number;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

// Calculate total lessons once, including theory and practice
const totalLessons = curriculumData
  .flatMap(level => level.knowledgeAreas)
  .reduce((acc, area) => {
    const theoryCount = area.theory.length;
    const practiceCount = Object.values(area.practice).reduce((pAcc, langExercises) => pAcc + langExercises.length, 0);
    return acc + theoryCount + practiceCount;
  }, 0);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<string[]>([]);
  const { user } = useAuth();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && user) {
      try {
        const storedProgress = localStorage.getItem(`mozcod-progress-${user.email}`);
        if (storedProgress) {
          setProgress(JSON.parse(storedProgress));
        } else {
          setProgress([]);
        }
      } catch (error) {
        console.error("Failed to parse progress from localStorage", error);
        setProgress([]);
      }
    } else if (isMounted && !user) {
        setProgress([]);
    }
  }, [isMounted, user]);

  const markAsCompleted = useCallback((lessonId: string) => {
    if (user && !progress.includes(lessonId)) {
      const newProgress = [...progress, lessonId];
      setProgress(newProgress);
      try {
        localStorage.setItem(`mozcod-progress-${user.email}`, JSON.stringify(newProgress));
      } catch (error) {
        console.error("Failed to save progress to localStorage", error);
      }
    }
  }, [progress, user]);

  const isCompleted = useCallback((lessonId: string) => {
    return progress.includes(lessonId);
  }, [progress]);

  const value = {
    progress,
    markAsCompleted,
    isCompleted,
    totalLessons,
    completedLessons: progress.length,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
