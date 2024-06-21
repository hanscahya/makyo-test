import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface OptionsProperties {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
interface DropdownProperties {
  options: OptionsProperties[];
  onUpdateSelected: (v: string[]) => any;

  multiple?: boolean;
  searchable?: boolean;

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
}

const Dropdown = ({
  label = 'Type to search',
  type = 'primary',
  size = 'md',
  searchable = true,
  multiple = true,
  options,
  onUpdateSelected,
}: DropdownProperties) => {
  const [keyword, setKeyword] = useState<string>('');
  const findKeywordIndices = (target: string, keyword: string): number[] => {
    const keywordLower = keyword.toLowerCase();
    let result: number[] = [];

    const lowerStr = target.toLowerCase();

    let startIndex = lowerStr.indexOf(keywordLower);
    if (startIndex !== -1) {
      const endIndex = startIndex + keyword.length;
      if (endIndex !== -1) result = [startIndex, endIndex];
      else result = [0, 0];
    }

    return result;
  };

  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const addSelectedOptions = (newValue: string) => {
    if (multiple) setSelectedOptions([...selectedOptions, newValue]);
    else setSelectedOptions([newValue]);
    setOpenDropdown(false);
  };
  const deleteSelectedOptions = (deleteValue: string) => {
    const index = selectedOptions.findIndex(v => v === deleteValue);
    selectedOptions.splice(index, 1);
    setSelectedOptions(selectedOptions);
    setOpenDropdown(false);
  };

  const [filteredOptions, setFilteredOptions] = useState<OptionsProperties[]>(
    [],
  );
  useEffect(() => {
    if (!searchable) return setFilteredOptions(options);
    if (keyword === '') setFilteredOptions(options);

    setFilteredOptions(
      options
        .filter(option => {
          if (selectedOptions.includes(option.name)) return false;
          return true;
        })
        .filter(option =>
          option.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()),
        ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, keyword, selectedOptions, openDropdown]);

  useEffect(() => {
    onUpdateSelected(selectedOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions]);

  return (
    <div className={`dropdown ${openDropdown && 'dropdown-open'}`}>
      <label
        role="button"
        className={`min-w-xs input input-bordered flex h-fit max-w-[768px] flex-wrap items-center gap-2 py-2 input-${size} input-${type}`}
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        {selectedOptions.length > 0 && (
          <>
            {selectedOptions.map((selected, selectedIndex) => {
              return (
                <span
                  className="badge badge-info cursor-pointer gap-1 whitespace-nowrap pr-1"
                  key={selectedIndex}
                  onClick={() => deleteSelectedOptions(selected)}
                >
                  {selected}
                  <FaTimes />
                </span>
              );
            })}
          </>
        )}

        <input
          type="text"
          className="grow"
          placeholder={label}
          value={keyword}
          onChange={({ target }) => setKeyword(target.value)}
        />
      </label>

      <ul className="menu dropdown-content z-[1] mt-2 w-full rounded-box bg-base-100 p-2 shadow">
        {/* Unsearchable */}
        {!searchable &&
          options.length > 0 &&
          options.map((option, optionIndex) => {
            return (
              <li key={optionIndex}>
                <a
                  className="inline"
                  onClick={() => addSelectedOptions(option.name)}
                >
                  {option.name}
                </a>
              </li>
            );
          })}

        {/* Searchable */}
        {filteredOptions.length > 0 && searchable ? (
          filteredOptions.map((option, optionIndex) => {
            const highlight = findKeywordIndices(option.name, keyword);
            return (
              <li key={optionIndex}>
                <a
                  className="inline"
                  onClick={() => addSelectedOptions(option.name)}
                >
                  {highlight[0] === 0 ? '' : option.name.slice(0, highlight[0])}

                  <span className="bg-primary">
                    {option.name.slice(highlight[0], highlight[1])}
                  </span>

                  {highlight[1] === option.name.length
                    ? ''
                    : option.name.slice(highlight[1], option.name.length)}
                </a>
              </li>
            );
          })
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
