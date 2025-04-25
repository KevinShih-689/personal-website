// eslint-disable-next-line no-unused-vars
export default function throttle<T> (func: (...args: T[]) => void, limit: number) {
  let lastCallTime: number = 0;
  return (...args: T[]) => {
    const now: number = Date.now();
    const shouldCall: boolean = now - lastCallTime > limit;

    if (shouldCall) {
      lastCallTime = now;
      func(...args);
    }
  };
}
