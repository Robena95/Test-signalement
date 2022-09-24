import { CSSProperties, ReactNode } from 'react';
import FlexBox from '~/Components/General/FlexBox/FlexBox';
import CustomTypography from '~/Components/DataDisplay/CustomTypography/CustomTypography';
import useEnhancedBreakPoint from '~/Hooks/useEnhancedBreakPoint';
import { EFontFamily } from '~/Interfaces/Font';

interface IBasicCardProps {
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  style?: CSSProperties;
  styleChildren?: CSSProperties;
}

const BasicCard = (props: IBasicCardProps) => {
  const { children, title, description, style, styleChildren } = props;
  const { isMobile } = useEnhancedBreakPoint();

  return (
    <FlexBox direction="column" style={style}>
      <FlexBox
        direction="column"
        style={{
          padding: isMobile ? '0 20px 20px 21px' : undefined,
          marginBottom: 39,
        }}>
        <CustomTypography
          size={isMobile ? 32 : 38}
          lineHeight={isMobile ? 36 : 49}
          letterSpacing="-0.76px"
          weight={900}
          color={(theme) => theme.textColor.secondary}>
          {title}
        </CustomTypography>
        <CustomTypography
          size={18}
          lineHeight={28}
          letterSpacing="-0.36px"
          fontFamily={EFontFamily.DM_SANS}>
          {description}
        </CustomTypography>
      </FlexBox>
      <div style={styleChildren}>{children}</div>
    </FlexBox>
  );
};

export default BasicCard;
