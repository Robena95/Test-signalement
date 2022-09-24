import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { hexaToRbga } from '~/Utils/hexaToRbga';

interface IHeaderMenuProps {
  to: string;
  name: string;
}

export const NavLinkWrapper = styled.span`
  margin-bottom: -7px;

  & > a {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    border-bottom: 4px solid transparent;
    padding-bottom: 15px;
    color: ${({ theme }) => hexaToRbga(theme.palette.common.black, 0.87)};

    &.active-link {
      color: ${({ theme }) => hexaToRbga(theme.palette.common.black, 1)};
      border-bottom-color: ${({ theme }) => theme.palette.common.black};
    }
  }
`;

const HeaderMenu = (props: IHeaderMenuProps) => {
  return (
    <NavLinkWrapper>
      <NavLink
        className={({ isActive }) => (isActive ? 'active-link' : '')}
        to={props.to}>
        {props.name}
      </NavLink>
    </NavLinkWrapper>
  );
};

export default HeaderMenu;
