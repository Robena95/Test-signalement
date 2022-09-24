import { Layout } from 'antd';
import AppHeader from './AppHeader/AppHeader';
import { ContentStyled, HeaderStyled } from './AppLayoutStyled';
import { Outlet } from 'react-router-dom';
import ContentWrapper from '~/Components/General/ContentWrapper/ContentWrapper';
import { memo } from 'react';

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* header */}
      <HeaderStyled>
        <ContentWrapper
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
          <AppHeader />
        </ContentWrapper>
      </HeaderStyled>
      {/* content */}
      <ContentStyled>
        <Outlet />
      </ContentStyled>
    </Layout>
  );
};

export default memo(AppLayout);
