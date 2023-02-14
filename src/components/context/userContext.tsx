import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { AccountType, UserType } from "../../types/types";

export interface ProviderProps {
  children: ReactNode;
  defaultUser?: UserType | null;
}

export interface CreateUserContext {
  user: UserType | null;
  setUser: (user?: UserType | null) => void;
  selectedUser: AccountType | null;
  setSelectedUser: (user: AccountType | null) => void;
}

const UserContext = createContext<CreateUserContext>({
  user: null,
  selectedUser: null,
  setUser: (user) => {},
  setSelectedUser: (user) => {},
});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider: FC<ProviderProps> = ({ children, defaultUser = null }) => {
  const [user, setUser] = useState<UserType | null>(defaultUser);
  const [selectedUser, setSelectedUser] = useState<AccountType | null>(null);

  const handleSetUser = useCallback((user: UserType | null = null) => {
    setUser(user);
  }, []);

  const handleSetSelectedUser = useCallback((user: AccountType | null = null) => {
    setSelectedUser(user);
  }, []);

  const value = useMemo(
    () => ({
      user,
      setUser: handleSetUser,
      selectedUser,
      setSelectedUser: handleSetSelectedUser,
    }),
    [user, handleSetUser, selectedUser, handleSetSelectedUser]
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
