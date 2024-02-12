import { sum } from "./sum";

// it("1と2を足すと3になる", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// 関数にパラメータを渡す -> eachを使用
// テンプレートリテラルを使用するため``を使用
// 値の定義にはテンプレートリテラルのプレースホルダである${}を使用

it.each`
  a    | b     | expected
  ${1} | ${2}  | ${3}
  ${1} | ${-2} | ${-1}
`("$aと$bは$expectedになる", ({ a, b, expected }) => {
  expected(sum(a, b)).toBe(expected);
});
