import { appRoutes } from '~/Routes';
import { DefaultHeaderMenuWrapper } from './AppHeaderStyled';
import HeaderMenu from './HeaderMenu/HeaderMenu';

const DefaultHeader = () => {
  return (
    <DefaultHeaderMenuWrapper>
      <HeaderMenu
        to={appRoutes[0].path || ''}
        name={appRoutes[0].name}
        key={appRoutes[0].path}
      />
      <HeaderMenu
        to={appRoutes[1].path || ''}
        name={appRoutes[1].name}
        key={appRoutes[1].path}
      />
    </DefaultHeaderMenuWrapper>
  );
};

export default DefaultHeader;
