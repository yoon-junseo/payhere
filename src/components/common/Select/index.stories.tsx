import React, { useState } from 'react';
import { Story } from '@storybook/react';

import Select, { SelectProps } from '@/components/common/Select';

export default {
  component: Select,
  title: 'common/Select',
};

const Template: Story<SelectProps> = (args: SelectProps) => {
  const [selected, setSelected] = useState<string>('');

  const { placeholder, optionList } = args;

  return (
    <Select
      width={120}
      height={36}
      value={selected}
      optionList={optionList}
      placeholder={placeholder}
      onChange={setSelected}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: '선택',
  optionList: ['First', 'Second', 'Third'],
};
