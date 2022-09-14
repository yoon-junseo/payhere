import React from 'react';
import { Story } from '@storybook/react';

import { repositoryInfo } from '@/mock';

import Repository, { RepositoryProps } from '@/components/repository/Repository';

export default {
  component: Repository,
  title: 'repository/Repository',
};

const Template: Story<RepositoryProps> = ({ ...args }: RepositoryProps) => <Repository {...args} />;

export const Default = Template.bind({});
Default.args = {
  repository: repositoryInfo,
  icon: 'Plus',
};

export const StoredRepository = Template.bind({});
StoredRepository.args = {
  repository: repositoryInfo,
  icon: 'X',
};
