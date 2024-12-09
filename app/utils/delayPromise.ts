const delayPromise = (fn: () => void, milliseconds: number = 2000) => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      resolve(fn());
    }, milliseconds);
  }).catch((err) => {
    throw new Error(err);
  });
};

export default delayPromise;
