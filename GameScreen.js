import React, { createContext, useContext, useMemo, useState } from 'react';

export const GameContext = createContext(null);
const AppStateContext = GameContext;

export function AppStateProvider({ children }) {
  const [sessionVersion, setSessionVersion] = useState(0);
  const value = useMemo(() => ({
    sessionVersion,
    restartSession: () => setSessionVersion((v) => v + 1),
  }), [sessionVersion]);

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) {
    throw new Error('useAppState must be used within AppStateProvider');
  }
  return ctx;
}
