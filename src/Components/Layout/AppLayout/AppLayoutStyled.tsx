import styled from 'styled-components';
import { Layout } from 'antd';

export const HeaderStyled = styled(Layout.Header)`
  background: ${({ theme }) => theme.layout.header.bg};
  height: ${({ theme: { layout } }) => layout.header.height};
  color: ${({ theme: { layout } }) => layout.header.color};
  display: flex;
  align-items: center;
`;

export const ContentStyled = styled(Layout.Content)`
  background: #f5f5f5;
`;
