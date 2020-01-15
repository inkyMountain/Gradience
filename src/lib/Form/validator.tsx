interface Rule {
  [Key: string]: {
    pattern?: RegExp,
    errorMessage?: string,
    required?: boolean,
  }
}

type Rules = Array<Rule>

const validator = (rules: Rules): Array<string> => {
  return [''];
};

export default validator;
