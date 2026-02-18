export {};

declare global {
  interface Array<T> {
    myReduce<R>(func: (acc: R, value: T, index: number, array: T[]) => R, initialValue: R): R;

    myReduce(func: (acc: T, value: T, index: number, array: T[]) => T): T;
  }
}

declare global {
  interface Array<T> {
    myFilter<S extends T>(func: (value: T, index: number, array: T[]) => value is S): S[];

    myFilter(func: (value: T, index: number, array: T[]) => boolean): T[];
  }
}
