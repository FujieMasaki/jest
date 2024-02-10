// テキストやbooleanをテスト
it("文字列のテスト", () => {
  expect(true).toBe(true);
});

// オブジェクトや配列が同じ構造を持っているかテストする
it("配列のテスト", () => {
  const arry1 = [1, 2, 3];
  const arry2 = [1, 2, 3];
  expect(arry1).toEqual(arry2);
});

it("オブジェクトのテスト", () => {
  const obj1 = {
    a: 1,
    b: 2,
    c: 3,
  };
  const obj2 = {
    a: 1,
    b: 2,
    c: 3,
  };
  expect(obj1).toEqual(obj2);
});

// 値の対象を一致しない事を確認したい場合
it("文字列のテスト", () => {
  expect(true).not.toBe(false);
});
