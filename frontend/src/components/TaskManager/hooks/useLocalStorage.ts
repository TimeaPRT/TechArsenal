import { useState, useEffect } from 'react';

/**
 * useLocalStorage hook for persisting state in localStorage.
 * @param key The localStorage key.
 * @param initialValue The initial value to use if nothing is stored.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore write errors
    }
  }, [key, value]);

  return [value, setValue] as const;
}