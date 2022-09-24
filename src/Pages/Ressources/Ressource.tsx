import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CustomTypography from '~/Components/DataDisplay/CustomTypography/CustomTypography';
import BasicCard from '~/Components/Others/BasicCard/BasicCard';
import RessourcesStyled from './RessourcesStyled';
import ContentWrapper from '~/Components/General/ContentWrapper/ContentWrapper';
import { Col, Row } from 'antd';
import useEnhancedBreakPoint from '~/Hooks/useEnhancedBreakPoint';
import ArrowLeftOutlined from '@ant-design/icons/ArrowLeftOutlined';
import { IRessource } from '~/Interfaces/Ressource';
import { Get } from '~/Service/Ressource';

const Ressource = () => {
  const navigate = useNavigate();
  const { isMobile } = useEnhancedBreakPoint();
  const [ressource, setRessource] = useState<IRessource>();
  const params = useParams();

  const getRessource = async (id: number | string | undefined) => {
    const result: any = await Get(id);
    setRessource(result.data.data);
  };
  useEffect(() => {
    getRessource(params.id);
  }, []);
  return (
    <>
      {ressource ? (
        <BasicCard style={{ marginBottom: 90 }}>
          <ContentWrapper>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate('/ressources');
              }}>
              <ArrowLeftOutlined
                style={{ marginRight: 15, fontSize: 16, marginBottom: 20 }}
              />
              <CustomTypography
                size={16}
                lineHeight={28}
                letterSpacing="-0.44px"
                weight={400}
                color={(theme) => theme.textColor.main}>
                Retour à la liste
              </CustomTypography>
            </div>
            <Row
              gutter={[0, 42]}
              style={{
                width: '100%',
                paddingLeft: isMobile ? '43px' : undefined,
              }}>
              <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                <RessourcesStyled.ItemContainerDetails
                  $isMobile={isMobile}
                  $isColor={'#98B2D1'}>
                  <CustomTypography
                    size={24}
                    lineHeight={28}
                    letterSpacing="-0.44px"
                    weight={400}
                    color={(theme) => theme.textColor.white}>
                    Nom: {ressource?.name}
                  </CustomTypography>
                </RessourcesStyled.ItemContainerDetails>
              </Col>
              <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                <RessourcesStyled.ItemContainerDetails
                  $isMobile={isMobile}
                  $isColor={'#000000'}>
                  <CustomTypography
                    size={24}
                    lineHeight={28}
                    letterSpacing="-0.44px"
                    weight={400}
                    color={(theme) => theme.textColor.white}>
                    Valeur: {ressource?.pantone_value}
                  </CustomTypography>
                </RessourcesStyled.ItemContainerDetails>
              </Col>
              <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                <RessourcesStyled.ItemContainerDetails
                  $isMobile={isMobile}
                  $isColor={'#000000'}>
                  <CustomTypography
                    size={24}
                    lineHeight={28}
                    letterSpacing="-0.44px"
                    weight={400}
                    color={(theme) => theme.textColor.white}>
                    Année: {ressource?.year}
                  </CustomTypography>
                </RessourcesStyled.ItemContainerDetails>
              </Col>
            </Row>
          </ContentWrapper>
        </BasicCard>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};
export default Ressource;
