import { type Proposition } from "./proposition.interface";

class P {
  constructor(private _value: boolean, private _sentence?: string) {}

  get sentence(): string {
    return this._sentence || "";
  }

  get value(): boolean {
    return this._value;
  }

  get prop(): Proposition {
    const proposition = {
      value: this.value,
      sentence: this.sentence
    };

    return proposition;
  }
};


export {
  P,
  type Proposition
};
