import { IoSearchOutline } from 'react-icons/io5';
import './input.scss';

type InputFieldProps = {
  type: string;
  value: string;
  onSearch: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField: React.FC<InputFieldProps> = ({
  onSearch,
  type,
  value,
  onChange,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="container-search">
      <input
        className="input"
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <IoSearchOutline onClick={onSearch} className="input-icon" />
    </div>
  );
};
