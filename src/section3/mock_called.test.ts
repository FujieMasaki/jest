// mock関数が呼び出されたかをtest
it("モック関数が呼び出される", () => {
  const mockFunc = jest.fn();
  mockFunc();
  // 関数自体を渡すので()はつけない
  // 関数が一度でも呼び出されれば成功
  expect(mockFunc).toHaveBeenCalled();
});

it("モック関数が2回呼び出される", () => {
  const mockFunc = jest.fn();
  mockFunc();
  mockFunc();
  expect(mockFunc).toHaveBeenCalledTimes(2);
});

it("モック関数の引数にhogeが渡される", () => {
  const mockFunc = jest.fn();
  mockFunc("hoge");
  expect(mockFunc).toHaveBeenCalledWith("hoge");
});
