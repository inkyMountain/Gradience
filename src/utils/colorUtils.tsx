const reds = ['#C14953', '#CD5D67', '#DAA49A', '#FFBCB5', '#FBBFCA', '#C99DA3', '#EDB6A3'];
const oranges = ['#E88873', '#F19A3E', '#D0A98F', '#EABDA8', '#F34213', '#FC814A', '#E5B25D', '#F7A278', '#F49D37'];
const yellows = ['#F6E27F', '#E2C391', '#F5CB5C', '#F9DF74', '#F2DD6E', '#FFCB47', '#FFCB47', '#F5CB5C', '#E6AF2E'];
const greens = ['#C2FBEF', '#7DAA92', '#ABEDC6', '#98D9C2', '#B9FFB7', '#BFD7B5', '#A3C4BC', '#9CBFA7', '#BAD9B5'];
const blues = ['#86BBD8', '#C1DBE3', '#C0E8F9', '#66C3FF', '#5C80BC', '#95B8D1', '#C2EFEB', '#9AC2C9'];
const khakis = ['#F2E7C9', '#EDD4B2', '#CAC2B5', '#ECDCC9', '#C2A878', '#E2C290', '#F9EDCC', '#BCAB79'];

const colorMap = {
  'red': reds,
  'orange': oranges,
  'yellow': yellows,
  'green': greens,
  'blue': blues,
  'khaki': khakis,
};

type ColorType = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'khaki'

const getRandomColor = (color: ColorType): string => {
  const colors = colorMap[color];
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  return colors[randomColorIndex];
};

export {getRandomColor, colorMap, ColorType};
