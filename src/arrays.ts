// split array into chunks of given size
export const chunk = <T>(
  arr: Array<T>,
  chunkSize: number,
): Array<Array<T>> => arr.reduce(
    (
      prevVal: any,
      currVal: any,
      currIndx: number,
      array: Array<T>,
    ) => (
      !(currIndx % chunkSize)
        ? prevVal.concat([array.slice(currIndx, currIndx + chunkSize)])
        : prevVal
    ), [],
  );

// run async func on arr items sequentially
export const asyncSequence = async <T, R>(
  arr: readonly T[],
  func: (T) => Promise<R>,
): Promise<R[]> => arr.reduce((previous: Promise<R[]>, current: T) => (
  previous.then(
    (results: R[]) => (
      func(current).then(
        (result) => results.concat([result]),
      )
    ),
  )
), Promise.resolve([] as R[]));

// group array items by the key
export const groupBy = <T extends Record<K, PropertyKey>, K extends keyof T>(
  items: readonly T[],
  key: K,
): Record<T[K], T[]> => items.reduce((acc, item) => {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {} as Record<T[K], T[]>);

export default {
  chunk,
  asyncSequence,
  groupBy,
};
