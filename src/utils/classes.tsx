const classes = (...classNames: Array<string | undefined>) => {
  return classNames
    .filter(Boolean)
    .map(className => className!.trim().replace(/\s+/, ' ').split(' '))
    .toString()
    .split(',')
    .join(' ');
};

export default classes;
