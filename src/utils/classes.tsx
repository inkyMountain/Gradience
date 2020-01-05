const classes = (...classNames: Array<string | undefined>) => {
  return classNames.filter(Boolean).map(className => (className as string).trim()).join(' ');
};

export default classes;
