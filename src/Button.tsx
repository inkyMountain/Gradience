import React from 'react';

interface ButtonProps {
  onClick: () => void
}

const Button = ({onClick}: ButtonProps) =>
  <button className="button" onClick={() => onClick()}>Button</button>;


export {
  Button
};
