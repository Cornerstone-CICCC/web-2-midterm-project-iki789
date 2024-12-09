const delayPromise = (fn: () => void, milliseconds: number = 2000) => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      resolve(await fn());
    }, milliseconds);
  });
};

export default delayPromise;
