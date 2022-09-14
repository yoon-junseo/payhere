import React from 'react';
import { Story } from '@storybook/react';

import { RepositoryState } from '@/lib/api/types';

import { repositoryInfo } from '@/mock';

import SubInformation from '@/components/repository/Repository/SubInformation';

export default {
  component: SubInformation,
  title: 'repository/Repository/SubInformation',
};

const Template: Story<RepositoryState> = ({ ...args }: RepositoryState) => <SubInformation {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...repositoryInfo,
};
