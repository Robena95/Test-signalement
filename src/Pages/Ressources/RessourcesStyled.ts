import styled, { css } from 'styled-components';

const ItemContainer = styled.div<{
  $isMobile?: boolean;
  $isColor?: string;
}>`
  background: #ffffff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.16);
  flex: 1;
  height: 148px;
  width: 295px;
  cursor: pointer;
  ${({ $isMobile }) =>
    $isMobile
      ? css`
          padding: 20px 13px 25px;
        `
      : css`
          padding: 20px 33px 25px;
        `};
  ${({ $isColor }) =>
    css`
      border-left: solid 5px ${$isColor};
    `};
`;
const ItemContainerDetails = styled.div<{
  $isMobile?: boolean;
  $isColor?: string;
}>`
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.16);
  flex: 1;
  height: 78px;
  width: 295px;
  cursor: pointer;
  ${({ $isMobile }) =>
    $isMobile
      ? css`
          padding: 20px 13px 25px;
        `
      : css`
          padding: 20px 33px 25px;
        `};
  ${({ $isColor }) =>
    css`
      background: ${$isColor};
    `};
`;
const Filter = styled.div<{
  $isMobile?: boolean;
}>`
  background: #ffffff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.16);
  height: 41px;
  width: 186px;
  margin-left: auto;
  margin-right: 0;
  ${({ $isMobile }) =>
    $isMobile
      ? css`
          padding: 5px 13px 25px;
        `
      : css`
          padding: 5px 16px 25px;
        `};
`;
export default {
  ItemContainer,
  ItemContainerDetails,
  Filter,
};
