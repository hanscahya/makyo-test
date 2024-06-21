import type { Meta, StoryObj } from '@storybook/react';

import data from '../mock/data.json';
import Dropdown from '@/components/Dropdown';

const meta = {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {},
  args: {
    label: 'Select One',
    type: 'primary',
    size: 'md',
    options: data,
    multiple: true,
    searchable: true,
    onUpdateSelected: () => {},
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
``;
type Story = StoryObj<typeof meta>;

export const SingleSelection: Story = {
  args: {
    size: 'md',
    type: 'primary',
    multiple: false,
  },
};

export const LargeSingleSelection: Story = {
  args: {
    size: 'lg',
    type: 'success',
    multiple: false,
  },
};

export const MultipleSelection: Story = {
  args: {
    multiple: true,
  },
};

export const SearchableSelection: Story = {
  args: {
    searchable: true,
  },
};
export const UnsearchableSelection: Story = {
  args: {
    searchable: false,
  },
};
