import {Field} from './Form';

interface Rules {
  [name: string]: {
    pattern?: [RegExp, string],
    required?: [boolean, string],
    lengthRange?: [[number, number], string],
    validate?: [(value: string) => Promise<any> | boolean, string]
  }
}

export interface Errors {
  [name: string]: Array<string>
}

const validator = (rules: Rules, fields: Array<Field>): Errors =>
  fields.reduce<Errors>((errors, field) => {
    console.log('field', field);
    const {value = '', name} = field;
    errors[name] = [];
    const addError = (e: string) => errors[name].push(e);
    const {
      pattern = [/.*/],
      required = [false, ''],
      lengthRange = [[0, Infinity]],
      validate = [() => true]
    } = rules[name];
    if (!pattern[0].test(field.value || '')) {
      addError(pattern[1] as string);
    }
    if (required[0] && value.length < 0 && (required[1] as string).length > 0) {
      addError(required[1] as string);
    }
    const [min, max] = lengthRange[0];
    if (value.length < min || value.length > max) {
      addError(lengthRange[1] as string);
    }
    if (!validate[0](value)) {
      addError(validate[1] as string);
    }
    return errors;
  }, {});


export default validator;
