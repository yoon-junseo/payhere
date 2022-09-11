import React from 'react';
import { Story } from '@storybook/react';

import { RepositoryState } from '@/lib/api/types';

import { repositoryInfo } from '@/mock';

import Repository from '@/components/repository/Repository';

export default {
  component: Repository,
  title: 'repository/Repository',
};

const Template: Story<RepositoryState> = ({ ...args }: RepositoryState) => <Repository {...args} />;

export const Default = Template.bind({});
Default.args = repositoryInfo;
