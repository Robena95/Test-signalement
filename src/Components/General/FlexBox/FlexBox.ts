import React from 'react';
import styled from 'styled-components';

export interface IFlexBoxProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  wrap?: React.CSSProperties['flexWrap'];
  background?: string;
  flexBox?: 'flex' | 'inline-flex';
  flex?: React.CSSProperties['flex'];
  order?: React.CSSProperties['order'];
  gap?: React.CSSProperties['gap'];
}

const showStringOnNumberValue = (value: string | number): string =>
  typeof value === 'string' ? value : `${value}px`;

export const FlexBox = styled.div.attrs<IFlexBoxProps, IFlexBoxProps>(
  (props) => ({
    ...props,
    className: `be-flexbox ${props.className || ''}`,
  }),
)`
  display: ${({ flexBox }) => flexBox || 'flex'};
  flex-direction: ${({ direction }) => direction || 'initial'};
  justify-content: ${({ justify }) => justify || 'initial'};
  align-items: ${({ align }) => align || 'initial'};
  background: ${({ background }) => background || 'transparent'};
  ${({ wrap }) => (wrap !== undefined ? 'wrap: ' + wrap + ';' : '')}
  ${({ flex }) => (flex !== undefined ? 'flex: ' + flex + ';' : '')}
  ${({ order }) => (order !== undefined ? 'order: ' + order + ';' : '')}
  ${({ gap }) =>
    gap !== undefined ? 'gap: ' + showStringOnNumberValue(gap) + ';' : ''}
`;

export default FlexBox;
