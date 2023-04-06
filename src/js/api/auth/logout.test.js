import { logout } from "./logout";
import { mockLocalStorage } from "../../storage/mockStorage";

global.localStorage = new mockLocalStorage();

describe("logout", () => {
  it("removes token and profile from storage", () => {
    // Set up test data
    global.localStorage.setItem("token", "test_token");
    global.localStorage.setItem(
      "profile",
      JSON.stringify({ name: "test_user" })
    );

    // Call logout function
    logout();

    // Check that token and profile have been removed from storage
    expect(global.localStorage.getItem("token")).toBeNull();
    expect(global.localStorage.getItem("profile")).toBeNull();
  });
});
