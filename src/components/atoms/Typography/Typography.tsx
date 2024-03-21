import './typograpy.scss';

type Color = '#2C2C2C' | '#D7B46B';

type TextAlign =
  | 'center'
  | 'end'
  | 'justify'
  | 'left'
  | 'match-parent'
  | 'right'
  | 'start';
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
  color?: Color;

  /**
   * Optional fontWeight of the text
   */
  fontWeight?: number;

  textAlign?: TextAlign;
}

/**
 * Reusable typography component
 */
export const Typography: React.FC<TypographyProps> = ({
  text,
  color = '#2C2C2C',
  size,
  fontWeight,
  textAlign = 'left',
}) => {
  return (
    <p
      className={['typography', `typography--${size}`].join(' ')}
      style={{ color, fontWeight, textAlign }}
    >
      {text}
    </p>
  );
};
