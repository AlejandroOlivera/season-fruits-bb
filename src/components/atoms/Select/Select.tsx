import { useMemo } from 'react';
import './select.scss';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  onChange: (value: string) => void;
  defaultValue?: string;
  value: string;
  disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  options,
  onChange,

  value,
  disabled,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  const memoizedOptions = useMemo(() => options, [options]);

  return (
    <select
      className="form-select select-container"
      value={value}
      onChange={handleSelectChange}
      disabled={disabled}
    >
      {memoizedOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
