import { mockLocalStorage } from "../../storage/mockStorage";
import { login } from "./login";

const CREDENTIALS = { email: "benjatest@stud.noroff.no", password: "test1234" };
const ACCESSTOKEN = "123abc";
const PROFILE = {
  name: "benjamel",
  email: "benjatest@stud.noroff.no",
  accessToken: ACCESSTOKEN,
};

global.localStorage = new mockLocalStorage();

function validCredentials() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: jest.fn().mockResolvedValue(PROFILE),
  });
}

describe("login", () => {
  it("logs in the user with email and password, and stores a token in localstorage", async () => {
    global.localStorage.clear();
    global.fetch = jest.fn(() => validCredentials());
    await login(CREDENTIALS.email, CREDENTIALS.password);

    expect(JSON.parse(global.localStorage.getItem("token"))).toBe(ACCESSTOKEN);
    expect(JSON.parse(global.localStorage.getItem("profile"))).toEqual(PROFILE);
  });
});
