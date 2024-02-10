// toThrow
import { divide, ZeroDivisorError } from "./divide";

// divide = テスト対象の関数
//  ZeroDivisorError = エラークラス

it("0で割り切れません", () => {
  // 以下だと、エラーを期待していたが、 発生しなかったためtestが失敗する
  // Received function did not throw
  // expect(() => divide(10, 1)).toThrow();
  // 以下だと、エラー文が違うのでtestが失敗する
  // expect(() => divide(10, 0)).toThrow("0で割れません");
  expect(() => divide(10, 0)).toThrow();
  expect(() => divide(10, 0)).toThrow("0で割ることはできません");
  expect(() => divide(10, 0)).toThrow(ZeroDivisorError);
});
