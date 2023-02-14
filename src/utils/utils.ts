import { API } from "../api/api";
import { LocalStorage } from "../components/storage";
import { UserType } from "../types/types";

export const checkAuth = (updateUser: (user: UserType | null) => void) => {
  const oldToken = LocalStorage.getUserToken();
  if (oldToken) {
    (async () => {
      const response = await API.checkUser(JSON.stringify({ token: oldToken }));
      if (!response.ok) {
        updateUser(null);
        return;
      }
      const { token, user } = await response.json();

      localStorage.setItem("token", token);
      updateUser(user);
    })();
  } else {
    updateUser(null);
  }
};
