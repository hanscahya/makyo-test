'use client';

import { useEffect, useState } from 'react';

interface OptionsProperties {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
interface DropdownProperties {
  label?: string;
  type?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';

  options: OptionsProperties[];
  value: string;
}

const Dropdown = ({
  label = 'Type to search',
  type = 'primary',
  size = 'md',
  options,
}: DropdownProperties) => {
  const [keyword, setKeyword] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<OptionsProperties[]>(
    [],
  );

  useEffect(() => {
    if (keyword === '') setFilteredOptions(options);

    setFilteredOptions(
      options.filter(option =>
        option.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()),
      ),
    );
  }, [options, keyword]);

  return (
    <div className="dropdown dropdown-end gap-4">
      <input
        type="text"
        placeholder={label}
        className={`input input-bordered w-full max-w-xs input-${size} input-${type}`}
        value={keyword}
        onChange={({ target }) => setKeyword(target.value)}
      />

      <ul className="menu dropdown-content z-[1] mt-2 w-full rounded-box bg-base-100 p-2 shadow">
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option, optionIndex) => (
            <li key={optionIndex}>
              <a>{option.name}</a>
            </li>
          ))
        ) : (
          <li className="px-4 py-2">No results found</li>
        )}
      </ul>
    </div>
  );
};

// Ensuring TailwindCSS picks up dynamic class names
const dummyClasses = {
  input: `
    input-xs input-sm input-md input-lg input-primary input-secondary
    input-accent input-info input-success input-warning input-error
  `,
};

export default Dropdown;
