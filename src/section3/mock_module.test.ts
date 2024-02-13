import fs from "fs";
import { readFile } from "./mock_module";

// モジュールのモックかはトップレベルで記述する必要がある;
jest.mock("fs");
// モジュールのすべての関数メソッドは実装を持たないモック関数となるので
// コンパイラにモジュールがモック化されていることを伝える必要がある
// モック化したオブジェクトを渡す
const mockFs = jest.mocked(fs);
// モック関数に戻り値を設定
mockFs.readFileSync.mockReturnValue("dummy data");

it("readFileがデータを返却する", () => {
  const result = readFile("path/dummy");
  expect(result).toBe("dummy data");
  // 実行時の回数などもテストできるようになる
  expect(fs.readFileSync).toHaveBeenCalledTimes(1);
});
