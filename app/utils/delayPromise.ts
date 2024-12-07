const delayPromise = (fn: Function, milliseconds: number = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn);
    }, milliseconds);
  });
};

export default delayPromise;
