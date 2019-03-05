const { useState } = require('react');
const _ = require('lodash');

export const useMap = (initial) => {
  const keys = Object.keys(initial);
  const [state, setState] = useState(initial);

  let result = {};

  for (const key of keys) {
    result[key] = state[key];
    result[`set${_.capitalize(key)}`] = (value) => {
      result = { ...state, [key]: value };
      setState(result);
    }
  }

  return result;
}
