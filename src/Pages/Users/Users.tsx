/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import CustomTypography from '~/Components/DataDisplay/CustomTypography/CustomTypography';
import BasicCard from '~/Components/Others/BasicCard/BasicCard';
import UsersStyled from './UsersStyled';
import ContentWrapper from '~/Components/General/ContentWrapper/ContentWrapper';
import { Col, Row } from 'antd';
import useEnhancedBreakPoint from '~/Hooks/useEnhancedBreakPoint';
import { useNavigate } from 'react-router-dom';
import PageNotFound from '../404/404';
import { IUser } from '~/Interfaces/User';
import { GetAll } from '~/Service/User';

const Users = () => {
  const navigate = useNavigate();
  const { isMobile } = useEnhancedBreakPoint();
  const [list, setList] = useState<IUser[]>([]);

  const getAllUsers = async () => {
    const result: any = await GetAll();
    setList(result.data.data);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <BasicCard style={{ marginTop: 40, marginBottom: 90 }}>
      <ContentWrapper>
        <Row
          gutter={[24, 42]}
          style={{
            width: '100%',
            paddingLeft: isMobile ? '43px' : '30px',
          }}>
          {list && list.length > 0 ? (
            list.map(({ first_name, email, last_name, avatar, id }) => (
              <Col key={id} xs={24} sm={24} md={12} lg={8} xl={6}>
                <UsersStyled.ItemContainer
                  key={id}
                  $isMobile={isMobile}
                  onClick={() => {
                    navigate('/detail-user/' + id);
                  }}>
                  <div
                    style={{
                      textAlign: 'center',
                      padding: isMobile ? '0 13px 0 13px' : undefined,
                    }}>
                    <img
                      src={avatar}
                      style={{
                        width: 114,
                        height: 114,
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      style={{
                        marginBottom: '8px',
                        marginTop: '23px',
                      }}>
                      <CustomTypography
                        size={24}
                        lineHeight={28}
                        letterSpacing="-0.44px"
                        weight={400}
                        color={(theme) => theme.textColor.main}>
                        {first_name} {last_name}
                      </CustomTypography>
                    </div>
                    <div>
                      <CustomTypography
                        size={14}
                        lineHeight={16}
                        letterSpacing="-0.44px"
                        weight={400}
                        color={(theme) => theme.textColor.gray}>
                        {email}
                      </CustomTypography>
                    </div>
                  </div>
                </UsersStyled.ItemContainer>
              </Col>
            ))
          ) : (
            <PageNotFound />
          )}
        </Row>
      </ContentWrapper>
    </BasicCard>
  );
};
export default Users;
