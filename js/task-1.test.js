import stringLength from "./task-1.js";

it("Should return 6 as the length of the string: border", () => {
  expect(stringLength("border")).toBe(6);
});

it("Should return 8 as the length of the string: notebook", () => {
  expect(stringLength("notebook")).toBe(8);
});