import { useEffect, useState } from 'react';
import CustomTypography from '~/Components/DataDisplay/CustomTypography/CustomTypography';
import BasicCard from '~/Components/Others/BasicCard/BasicCard';
import RessourcesStyled from './RessourcesStyled';
import ContentWrapper from '~/Components/General/ContentWrapper/ContentWrapper';
import { Col, Row, Select } from 'antd';
import useEnhancedBreakPoint from '~/Hooks/useEnhancedBreakPoint';
import { useNavigate } from 'react-router-dom';
import PageNotFound from '../404/404';
import { IRessource } from '~/Interfaces/Ressource';
import { GetAll } from '~/Service/Ressource';

const Ressources = () => {
  const navigate = useNavigate();
  const { isMobile } = useEnhancedBreakPoint();
  const { Option } = Select;
  const [list, setList] = useState<IRessource[]>([]);
  const [change, setChange] = useState<boolean>(false);

  const getAllRessources = async () => {
    const result: any = await GetAll();
    setList(result.data.data);
  };

  const handleChange = (value: string) => {
    setChange(!change);
    if (value === 'name') {
      list.sort((a, b) => (a.name < b.name ? -1 : 1));
      setList(list);
    }

    if (value === 'date')
      list.sort((a: any, b: any) => {
        return a.year - b.year;
      });
    setList(list);
  };

  useEffect(() => {
    // refresh;
  }, [change]);

  useEffect(() => {
    getAllRessources();
  }, []);
  return (
    <>
      <BasicCard style={{ marginBottom: 90 }}>
        <ContentWrapper>
          {list && list.length > 0 && (
            <div
              style={{
                marginBottom: 25,
                paddingLeft: isMobile ? '43px' : undefined,
                marginRight: '38px',
              }}>
              <RessourcesStyled.Filter>
                <CustomTypography
                  size={16}
                  lineHeight={19}
                  letterSpacing="-0.44px"
                  weight={400}
                  color={(theme) => theme.textColor.main}>
                  Filtre par
                </CustomTypography>
                <Select
                  bordered={false}
                  defaultValue="date"
                  style={{
                    marginLeft: 8,
                    fontFamily: 'Helvetica',
                    fontSize: 16,
                  }}
                  dropdownStyle={{ fontFamily: 'Helvetica', fontSize: 16 }}
                  onChange={handleChange}>
                  <Option value="date">date</Option>
                  <Option value="name">Name</Option>
                </Select>
              </RessourcesStyled.Filter>
            </div>
          )}
          <Row
            gutter={[0, 42]}
            style={{
              width: '100%',
              paddingLeft: isMobile ? '43px' : undefined,
            }}>
            {list && list.length > 0 ? (
              list.map(({ name, year, id, color }) => (
                <Col key={id} xs={24} sm={24} md={12} lg={8} xl={6}>
                  <RessourcesStyled.ItemContainer
                    key={id}
                    $isMobile={isMobile}
                    $isColor={color}
                    onClick={() => {
                      navigate('/detail-ressource/' + id);
                    }}>
                    <div
                      style={{
                        marginBottom: '8px',
                        marginTop: '23px',
                      }}>
                      <CustomTypography
                        size={16}
                        lineHeight={19}
                        letterSpacing="-0.44px"
                        weight={400}
                        color={(theme) => theme.textColor.main}>
                        {name}
                      </CustomTypography>
                    </div>
                    <div>
                      <CustomTypography
                        size={70}
                        lineHeight={82}
                        letterSpacing="-0.44px"
                        weight={400}
                        color={() => color}>
                        {year}
                      </CustomTypography>
                    </div>
                  </RessourcesStyled.ItemContainer>
                </Col>
              ))
            ) : (
              <PageNotFound />
            )}
          </Row>
        </ContentWrapper>
      </BasicCard>
    </>
  );
};
export default Ressources;
