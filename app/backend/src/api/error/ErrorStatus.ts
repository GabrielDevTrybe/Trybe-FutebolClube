export default class ErrorStatus extends Error {
  public _stack: number;
  constructor(stack: number, message: string) {
    super(message);
    this._stack = stack;
  }
}
