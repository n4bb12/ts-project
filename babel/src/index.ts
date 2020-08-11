export class Email {
  constructor(
    public recepients: string[],
    public subject: string,
    public message: string,
  ) {}
}

// tsc and babel both transpile language features
export function logError(error: any) {
  console.error(error?.message || error)
}

// tsc doesn't polyfill built-ins
// babel (with preset-env) inserts a core-js polyfill
export function allSettled(...promises: Promise<any>[]) {
  return Promise.allSettled(promises)
}
