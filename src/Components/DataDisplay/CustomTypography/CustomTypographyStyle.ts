import styled, { CSSProperties } from 'styled-components';

interface IProps {
  $color: string;
  $size: number;
  $lineHeight?: number | string;
  $weight?: CSSProperties['fontWeight'];
  $letterSpacing?: CSSProperties['letterSpacing'];
  $fontFamily?: CSSProperties['fontFamily'];
  $textAlign?: CSSProperties['textAlign'];
}

export const CustomTypographyRoot = styled.span<IProps>`
  color: ${({ $color, theme: { textColor } }) => $color || textColor.main};
  font-size: ${({ $size }) => $size}px;
  line-height: ${({ $lineHeight }) => {
    if ($lineHeight) {
      if (typeof $lineHeight === 'string') {
        return $lineHeight;
      }
      return $lineHeight + 'px';
    }
    return 'normal';
  }};
  letter-spacing: ${({ $letterSpacing }) => {
    if ($letterSpacing) {
      if (typeof $letterSpacing === 'string') {
        return $letterSpacing;
      }
      return $letterSpacing + 'px';
    }
    return 'normal';
  }};
  font-weight: ${({ $weight }) => $weight};
  font-family: ${({ $fontFamily }) => $fontFamily};
  text-align: ${({ $textAlign = 'start' }) => $textAlign};
`;
