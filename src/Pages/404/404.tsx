import CustomTypography from '~/Components/DataDisplay/CustomTypography/CustomTypography';
import BasicCard from '~/Components/Others/BasicCard/BasicCard';
import UsersStyled from '../Users/UsersStyled';
import ContentWrapper from '~/Components/General/ContentWrapper/ContentWrapper';

const PageNotFound = () => {
  return (
    <BasicCard style={{ marginTop: 40, marginBottom: 90 }}>
      <ContentWrapper>
        <UsersStyled.ItemContainer404>
          <CustomTypography
            size={128}
            lineHeight={150}
            letterSpacing="-0.44px"
            weight={400}
            color={(theme) => theme.textColor.main}>
            404 Not found
          </CustomTypography>
          <br />
          <CustomTypography
            size={24}
            lineHeight={28}
            letterSpacing="-0.44px"
            weight={400}
            color={(theme) => theme.textColor.link}>
            Retour à la liste des utilisateurs
          </CustomTypography>
        </UsersStyled.ItemContainer404>
      </ContentWrapper>
    </BasicCard>
  );
};
export default PageNotFound;
