export enum DropdownType {
  Primary = 'primary',
  Secondary = 'secondary',
  Accent = 'accent',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export enum DropdownSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

export interface OptionsProperties {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface DropdownProperties {
  options: OptionsProperties[];
  onUpdateSelected: (v: string[]) => void;
  multiple?: boolean;
  searchable?: boolean;

  label?: string;
  type?: DropdownType;
  size?: DropdownSize;
}
