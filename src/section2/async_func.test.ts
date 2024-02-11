import { delay } from "./async_func";

// it関数のコールバック関数にasyncをつける
it("delay関数が指定した秒数でメッセージを返す", async () => {
  // 非同期関数を呼び出す際はconstでresultを定義し、関数の呼び出しにawaitをつける
  const result = await delay("Hello jest", 1000);
  expect(result).toBe("Hello jest");
});

// 非同期関数が失敗する時
it("timeがマイナスの場合はエラーが発生する", async () => {
  // eにエラーオブジェクトが渡される
  try {
    const result = await delay("Hello jest", -1);
  } catch (e: any) {
    expect(e.message).toBe("timeは0以上で指定してください");
  }
});
