/* bridge */
export class Deferred<T = any> {
  public promise: Promise<T>;
  public resolve: (value: T) => void;
  public reject: (value: T) => void;

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.reject = reject;
      this.resolve = resolve;
    });
  }
}
