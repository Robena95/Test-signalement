import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

const useEnhancedBreakPoint = (): {
  isMobile: boolean;
  isTablette: boolean;
  isDesktop: boolean;
} => {
  const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
  const isMobile = !!((xs || sm || md) && !lg && !xl && !xxl);
  const isDesktop = !!((lg || xl || xxl) && !xs && !sm && !md);

  return {
    isMobile: isMobile,
    isTablette: !!(!isMobile && lg && !xl && !xxl),
    isDesktop: isDesktop,
  };
};

export default useEnhancedBreakPoint;
