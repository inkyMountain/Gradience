const reds = ['#C3423F', '#D68FD6', '#C14953', '#CD5D67', '#AA7078', '#DAA49A', '#FFBCB5', '#E07BE0', '#FBBFCA', '#AA5042', '#C99DA3', '#EDB6A3', '#E3655B'];
const oranges = ['#E88873', '#F19A3E', '#D0A98F', '#EABDA8', '#CA895F', '#F34213', '#FC814A', '#C17767', '#C97D60', '#E5B25D', '#F7A278', '#F49D37', '#EBCFB2'];
const yellows = ['#F6E27F', '#E2C391', '#F5CB5C', '#FF8966', '#F9DF74', '#F2DD6E', '#E8DDB5', '#FFCB47', '#FFCB47', '#EFFFC8', '#F5CB5C', '#AFA060', '#E6AF2E'];
const greens = ['#7DAA92', '#C2FBEF', '#81A684', '#7DAA92', '#57886C', '#ABEDC6', '#98D9C2', '#B9FFB7', '#BFD7B5', '#A3C4BC', '#8FA998', '#9CBFA7', '#BAD9B5'];
const blues = ['#86BBD8', '#C1DBE3', '#C0E8F9', '#B4C5E4', '#66C3FF', '#6C969D', '#5C80BC', '#95B8D1', '#B6C2D9', '#4D7EA8', '#6EA4BF', '#C2EFEB', '#9AC2C9'];
const khakis = ['#F2E7C9', '#EDD4B2', '#CAC2B5', '#ECDCC9', '#C2A878', '#E2C290', '#F9EDCC', '#F8F0FB', '#F7ECE1', '#BCAB79', '#FAFFFD', '#F5F5F5', '#E8EDDF'];

enum colors {red, orange, yellow, green, blue, khaki};

const colorMap = {
  [colors.red]: reds,
  [colors.orange]: oranges,
  [colors.yellow]: yellows,
  [colors.green]: greens,
  [colors.blue]: blues,
  [colors.khaki]: khakis,
};

const getRandomColor = (colorType: colors): string => {
  const colors = colorMap[colorType];
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  return colors[randomColorIndex];
};
