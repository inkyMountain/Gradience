import {Field} from './index';

interface Rules {
  [name: string]: {
    pattern?: RegExp,
    required?: boolean,
    lengthRange?: [number, number],
    validate?: (value: string) => Promise<void> | boolean,
    suggestion?: string
  }
}

export interface SyncErrors {
  pattern: boolean,
  required: boolean,
  lengthRange: boolean,
}

interface BooleanObject {
  [Key: string]: boolean
}

const allSettled = (promises: Array<Promise<any>>) =>
  Promise.all(promises.map(
    (promise) => promise
      .then((result) => ({status: 'fulfilled', message: result}))
      .catch(reason => ({status: 'rejected', message: reason}))
  ));


const validator = (rules: Rules, fields: Array<Field>, onComplete: (result: { [Key: string]: boolean }) => void) => {
  const syncResult = fields.reduce<BooleanObject>((errors, field) => {
    const {value = '', name} = field;
    const {
      pattern = /.*/,
      required = false,
      lengthRange = [0, Infinity],
    } = rules[name];
    errors[name] = pattern.test(value)
                   && (required ? value.length > 0 : true)
                   && (value.length >= lengthRange[0] && value.length <= lengthRange[1]);
    return errors;
  }, {});
  const promises = fields.map((field) => {
    const {value = '', name} = field;
    const validate = rules[name].validate || (() => true);
    const validateResult = validate(value);
    return typeof validateResult === 'boolean'
           ? Promise.resolve({name, success: validateResult})
           : validateResult
             .then((result) => ({name, success: true}))
             .catch(() => ({name, success: false}));
  });
  allSettled(promises).then(results => {
    results.map(result => {
      const {name, success} = result.message;
      syncResult[name] = syncResult[name] && success;
    });
    onComplete(syncResult);
  });
};


export default validator;
