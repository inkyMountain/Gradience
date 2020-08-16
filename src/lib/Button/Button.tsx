import React from 'react';
import classes from '../../utils/classes';
import {getRandomColor, ColorType} from '../../utils/colorUtils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colortype?: ColorType
  color?: string,
  disable?: boolean,
  ghost?: boolean,
}

const colorValidator = (color: string | undefined): boolean => {
  const regex = /^#[\da-z]{6,8}$/;
  return regex.test(color || '');
};

const getRandomColorType = (): ColorType => {
  const types = ['red', 'orange', 'yellow', 'green', 'blue', 'khaki'];
  const randomIndex = Math.floor(Math.random() * types.length);
  return types[randomIndex] as ColorType;
};

const INVALID_COLOR_MESSAGE =
  `The custom color you pass is invalid. Change it to meet
   this regex: /^#[\\da-z]{6,8}$/, for example #ffffff .`;

const Button: React.FunctionComponent<ButtonProps> = props => {
  const {className, children, color, disable, onClick, ghost, ...restProps} = props;
  !!color && !colorValidator(color) && console.error(INVALID_COLOR_MESSAGE);

  const finalColor = color && colorValidator(color)
    ? color : getRandomColor(props.colortype || getRandomColorType());
  const buttonStyle = {
    'backgroundImage': `linear-gradient(to right, ${finalColor}66, white)`,
    border: `${finalColor} 1px solid`,
  };
  ghost && delete buttonStyle.backgroundImage;

  return (
    <button
      className={classes('gui-button', `${disable ? 'disable' : ''}`, className)} {...restProps}
      style={buttonStyle}
      onClick={(event) => {
        if (disable === true) return;
        onClick && onClick(event);
      }}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
