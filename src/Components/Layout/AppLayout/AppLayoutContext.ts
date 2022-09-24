import React, { createContext, useContext } from 'react';

interface IAppLayoutContextState {
  headerExtraContent: React.ReactNode;
  setHeaderExtraContent: (content: React.ReactNode) => void;
}

export const AppLayoutContext = createContext<IAppLayoutContextState>({
  headerExtraContent: null,
  setHeaderExtraContent: () => {
    //
  },
});

export const useAppLayoutContext = () => useContext(AppLayoutContext);
