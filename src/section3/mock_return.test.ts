it("モック関数に戻り値を設定する", () => {
  const mockFunc = jest.fn();
  // モック関数の戻り値にしたい値を渡す
  // 一度戻り値を設定すると、その後は永続的に同じ内容を返却し続ける
  mockFunc.mockReturnValue("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
});

// モック関数が一度だけ特定の値を返すように設定したい場合
it("モック関数に一度だけ返される戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValueOnce("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
  // 二回目以降はundefinedとなる
});

// APIのモックなどをモック関数で非同期処理の振る舞いを実現
it("モック関数に非同期な戻り値を設定する", async () => {
  const mockFunc = jest.fn();
  mockFunc.mockResolvedValue("Mock resolved value");
  const result = await mockFunc();
  expect(result).toBe("Mock resolved value");
});
