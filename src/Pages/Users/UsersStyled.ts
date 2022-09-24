import styled, { css } from 'styled-components';

const ItemContainer = styled.div<{
  $isMobile?: boolean;
}>`
  background: #ffffff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  flex: 1;
  height: 277px;
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
`;
const ItemContainerDetails = styled.div<{
  $isMobile?: boolean;
}>`
  background: #ffffff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  flex: 1;
  height: 277px;
  width: 295px;
  cursor: pointer;
  margin: 0 auto;
  ${({ $isMobile }) =>
    $isMobile
      ? css`
          padding: 20px 13px 25px;
        `
      : css`
          padding: 20px 33px 25px;
        `};
`;
const ItemContainer404 = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;

export default {
  ItemContainer,
  ItemContainerDetails,
  ItemContainer404,
};
