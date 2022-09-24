import { ReactNode, CSSProperties } from 'react';
import { CustomTypographyRoot } from './CustomTypographyStyle';
import { DefaultTheme, useTheme } from 'styled-components';
import { EFontFamily } from '~/Interfaces/Font';

interface ICustomTypographyProps {
  children: ReactNode;
  color?: (theme: DefaultTheme) => string;
  size?: ((theme?: DefaultTheme | undefined) => number) | number;
  lineHeight?: ((theme?: DefaultTheme | undefined) => number) | number;
  weight?: CSSProperties['fontWeight'];
  letterSpacing?: CSSProperties['letterSpacing'];
  fontFamily?: CSSProperties['fontFamily'];
  style?: CSSProperties;
  align?: CSSProperties['textAlign'];
}

const CustomTypography = (props: ICustomTypographyProps) => {
  const {
    children,
    color,
    size,
    lineHeight,
    weight,
    letterSpacing,
    fontFamily = EFontFamily.DM_SANS,
    align,
    style,
  } = props;
  const theme = useTheme();

  return (
    <CustomTypographyRoot
      $color={color ? color(theme) : theme.textColor.main}
      $size={typeof size === 'function' ? size(theme) : size || 16}
      $lineHeight={
        typeof lineHeight === 'number'
          ? lineHeight
          : lineHeight && lineHeight(theme)
      }
      $weight={weight}
      $letterSpacing={letterSpacing}
      $fontFamily={fontFamily}
      $textAlign={align}
      style={style}>
      {children}
    </CustomTypographyRoot>
  );
};

export default CustomTypography;
