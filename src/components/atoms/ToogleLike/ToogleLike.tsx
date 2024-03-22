import { CiHeart } from 'react-icons/ci';

import { FaHeart } from 'react-icons/fa';

import './toggleLike.scss';

interface IToggleLiked {
  isLiked?: boolean;
  onToggle: () => void;
}

export const ToggleLike: React.FC<IToggleLiked> = ({ isLiked, onToggle }) => {
  return (
    <div className={`toggle-like ${isLiked ? 'liked' : ''}`} onClick={onToggle}>
      {isLiked ? <FaHeart /> : <CiHeart />}
    </div>
  );
};
