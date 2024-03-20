export class WholeNumber {
  private _value: number

  private constructor(value: number) {
    this._value = value
  }

  static from(value: number) {
    if (this.is(value)) {
      return new WholeNumber(value)
    }

    throw new Error(`${value} is not a whole number`)
  }

  static is(value: number) {
    return value >= 0 && value % 1 === 0
  }

  get value() {
    return this._value
  }
}
