import type { Meta, StoryObj } from '@storybook/react';

import data from '@/mock/data.json';
import Dropdown from '@/components/Dropdown';
import { DropdownSize, DropdownType } from '@/types/dropdown.type';

const meta = {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {},
  args: {
    label: 'Select One',
    type: DropdownType.Primary,
    size: DropdownSize.MD,
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
    size: DropdownSize.MD,
    type: DropdownType.Primary,
    multiple: false,
  },
};

export const LargeSingleSelection: Story = {
  args: {
    size: DropdownSize.LG,
    type: DropdownType.Success,
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
