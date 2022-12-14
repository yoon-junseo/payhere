import React from 'react';
import styled from 'styled-components';

import { IconOption } from './type';

import Icon from '@/components/common/Icon';
import Text from '@/components/common/Text';
import * as Icons from '@/components/common/Icon/Icons';

export default {
  component: Icon,
  title: 'common/Icon',
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-gap: 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 120px;
  height: 140px;

  padding-top: 10px;

  border-radius: 8px;
  box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.25);

  svg {
    width: 40px;
    height: 40px;
  }

  & > :first-child {
    margin-bottom: 30px;
  }
`;

const Template = () => {
  const iconList: IconOption[] = Object.keys(Icons) as IconOption[];

  return (
    <GridContainer>
      {iconList.map((icon) => (
        <IconWrapper>
          <Icon icon={icon} />
          <Text fontSize={13} fontWeight={700}>
            {icon}
          </Text>
        </IconWrapper>
      ))}
    </GridContainer>
  );
};

export const Default = Template.bind({});
