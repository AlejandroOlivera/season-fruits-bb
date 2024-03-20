import './typograpy.scss';

interface TypographyProps {
  /**
   * The text to be displayed
   */
  text: string | number;
  /**
   * The size of the text
   */
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  /**
   * Optional color of the text
   */
  color?: string;

  /**
   * Optional fontWeight of the text
   */
  fontWeight?: number;
}

/**
 * Reusable typography component
 */
export const Typography: React.FC<TypographyProps> = ({
  text,
  color = '#2C2C2C',
  size,
  fontWeight,
}) => {
  return (
    <p
      className={['typography', `typography--${size}`].join(' ')}
      style={{ color, fontWeight }}
    >
      {text}
    </p>
  );
};
