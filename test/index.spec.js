import {expect} from "chai";
import { Calculator } from "../src";

describe('add.js usage suite', () => {
  it('given two numbers when add then get result', () => {
    const n1 = 2, n2 = 3, expected = 5;
    const calc = new Calculator();

    const result = calc.add(n1, n2);

    expect(result).to.equal(expected);
  });
});
