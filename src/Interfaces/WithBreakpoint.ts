import useEnhancedBreakPoint from '~/Hooks/useEnhancedBreakPoint';

export type WithBreakPoint<P> =
  | P
  | ((breakpoints: ReturnType<typeof useEnhancedBreakPoint>) => P);
