import { createContext, ReactNode, useContext, useEffect } from "react";
import { getCurrentUser } from "./appwrite";
import  useAppwrite  from "./useAppwrite";

// Define the User interface
interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}

// Define the GlobalContextType interface
interface GlobalContextType {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  refetch: (newParams?: Record<string, string | number>) => Promise<void>;
}

// Create the context with an initial value of undefined
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Create the GlobalProvider component
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
 
  const { data: user, loading, refetch } = useAppwrite({
    fn: getCurrentUser,
    params: {} as Record<string, string | number> | undefined, 
    skip: false,
  });

  const resolvedUser = user ?? null;
  const isLoggedIn = !!resolvedUser;

  // Log the user info for debugging purposes
  useEffect(() => {
    if (resolvedUser) {
      console.log(JSON.stringify(resolvedUser, null, 2)); // Fixed JSON.stringify syntax
    }
  }, [resolvedUser]);

  // Define a wrapper for refetch that defaults newParams to an empty object
  const refetchWithDefaultParams = async (newParams: Record<string, string | number> = {}) => {
    await refetch(newParams);
  };

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        user: resolvedUser,
        loading,
        refetch: refetchWithDefaultParams, 
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// A custom hook to access the GlobalContext
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("Global context must be used within a GlobalProvider");
  }

  return context;
};

export default GlobalProvider;
