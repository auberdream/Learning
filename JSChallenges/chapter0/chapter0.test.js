import { giveMeFive } from "./exercise1";
import { addMe } from "./exercise2";
import {
  booleans0,
  booleans1,
  booleans2,
  booleans3,
  booleans4,
  isLtOrGt0,
  isLtOrGt1
} from "./exercise3";

describe("chapter0", () => {
  describe("exercise1", () => {
    it("giveMeFive returns 5", () => {
      expect(giveMeFive()).toEqual(5);
    });
  });

  describe("exercise2", () => {
    it("addMe correctly adds two numbers together", () => {
      expect(addMe(3, 5)).toEqual(8);
      expect(addMe(1, 2)).toEqual(3);
      expect(addMe(50, 101)).toEqual(151);
    });
  });

  describe("exercise3", () => {
    it("All variables are true", () => {
      expect(booleans0).toEqual(true);
      expect(booleans1).toEqual(true);
      expect(booleans2).toEqual(true);
      expect(booleans3).toEqual(true);
      expect(booleans4).toEqual(true);

      expect(isLtOrGt0).toEqual(true);
      expect(isLtOrGt1).toEqual(true);
    });
  });
});
