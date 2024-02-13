import axios from "axios";
import Users from "./practice";

jest.mock("axios");
const mockAxios = jest.mocked(axios);

describe("Users", () => {
  beforeEach(() => {
    // getの実装や戻り値を変更しても、他のテストが実行されるタイミングで初期化
    mockAxios.get.mockClear();
  });
  //   モックを定義
  it("ユーザーを取得", async () => {
    // ダミーのユーザーを作成
    const users = [{ name: "Taro" }, { name: "Hanako" }];
    // モック関数から返されるレスポンスを用意
    const response = { data: users };
    // getの戻り値とする
    mockAxios.get.mockResolvedValue(response);

    const result = await Users.all();
    expect(result).toEqual(users);
    expect(mockAxios.get).toHaveBeenCalledWith("/users.json");
  });
});
