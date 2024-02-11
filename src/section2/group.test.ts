// 配列に要素を追加
// 配列の長さが正しい

describe("配列に関するテスト", () => {
  it("配列に要素を追加", () => {
    const arr = [];
    arr.push("element");
    expect(arr).toEqual(["element"]);
  });

  it("配列の長さが正しい", () => {
    const arr = ["element1", "element2"];
    expect(arr.length).toBe(2);
  });
});
