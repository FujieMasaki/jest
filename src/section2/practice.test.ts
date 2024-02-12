import { ShoppingList } from "./practice";

describe("ShoppingList", () => {
  let shoppingList: ShoppingList;
  // 各テストケースの前にshoppingListの新しいインスタンスを作成
  beforeEach(() => {
    shoppingList = new ShoppingList();
  });

  // addItemメソッドをテスト
  describe("addItemをテスト", () => {
    it("アイテムをリストに追加する", () => {
      shoppingList.addItem("apple");
      expect(shoppingList.list).toEqual(["apple"]);
    });
  });

  // removeItemメソッドがアイテムをリストから削除できているか
  describe("removeItemをテスト", () => {
    it("アイテムを削除", () => {
      shoppingList.addItem("apple");
      shoppingList.removeItem("apple");
      expect(shoppingList.list).not.toContain("apple");
      // toContainは配列に変数があるか確認するmatcher関数
    });

    it("リストにアイテムが存在しない場合はエラー", () => {
      expect(() => shoppingList.removeItem("banana")).toThrow(
        "アイテム: banana は存在しません"
      );
    });
  });
});
