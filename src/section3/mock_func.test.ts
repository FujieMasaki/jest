it("初めてのmock", () => {
  // jest.fn()とは何も処理を行わない新しいモック関数を生成する関数
  const mockFunc = jest.fn(() => "Hello mock");
  // jest.fn()の引数に渡した関数がモック関数の動作として設定される
  expect(mockFunc()).toBe("Hello mock");
});

// mockImplementation
it("mockImplementation", () => {
  const mockFunc = jest.fn();
  mockFunc.mockImplementation(() => "Hello mock2");
  expect(mockFunc()).toBe("Hello mock2");
});
