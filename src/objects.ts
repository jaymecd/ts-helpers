// The pick() method is used to return a copy of the object
// that is composed of the picked object properties.
export const pick = (obj: object, ...keys: string[]) => Object.fromEntries(
  Object.entries(obj).filter(([key]) => keys.includes(key)),
);

export default {
  pick,
};
