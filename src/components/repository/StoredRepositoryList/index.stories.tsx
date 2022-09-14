import React from 'react';
import { Story } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { repositoryInfo } from '@/mock';

import StoredRepositoryList, { StoredRepositoryListProps } from '@/components/repository/StoredRepositoryList';

export default {
  component: StoredRepositoryList,
  title: 'repository/StoreRepositoryList',
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/repository',
    },
  },
};

const Template: Story<StoredRepositoryListProps> = (args: StoredRepositoryListProps) => (
  <StoredRepositoryList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  repositoryList: [repositoryInfo, repositoryInfo, repositoryInfo],
};
