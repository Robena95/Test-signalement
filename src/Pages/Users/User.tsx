import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomTypography from '~/Components/DataDisplay/CustomTypography/CustomTypography';
import BasicCard from '~/Components/Others/BasicCard/BasicCard';
import UsersStyled from './UsersStyled';
import useEnhancedBreakPoint from '~/Hooks/useEnhancedBreakPoint';
import ContentWrapper from '~/Components/General/ContentWrapper/ContentWrapper';
import { IUser } from '~/Interfaces/User';
import { Get } from '~/Service/User';

const User = () => {
  const { isMobile } = useEnhancedBreakPoint();
  const [user, setUser] = useState<IUser>();
  const params = useParams();

  const getUser = async (id: number | string | undefined) => {
    const result: any = await Get(id);
    setUser(result.data.data);
  };
  useEffect(() => {
    getUser(params.id);
  }, []);
  return (
    <>
      {user ? (
        <BasicCard style={{ marginTop: 40, marginBottom: 90 }}>
          <ContentWrapper>
            <UsersStyled.ItemContainerDetails $isMobile={isMobile}>
              <div
                style={{
                  textAlign: 'center',
                  padding: isMobile ? '0 13px 0 13px' : undefined,
                }}>
                <img
                  src={user?.avatar}
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
                    {user?.first_name} {user?.last_name}
                  </CustomTypography>
                </div>
                <div>
                  <CustomTypography
                    size={14}
                    lineHeight={16}
                    letterSpacing="-0.44px"
                    weight={400}
                    color={(theme) => theme.textColor.gray}>
                    {user?.email}
                  </CustomTypography>
                </div>
              </div>
            </UsersStyled.ItemContainerDetails>
          </ContentWrapper>
        </BasicCard>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};
export default User;
