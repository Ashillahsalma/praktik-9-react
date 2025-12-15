import { createContext, useState, useContext } from "react";

// Membuat User Context
const UserContext = createContext();

// Custom Hook
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Login function
  const login = async (email, password) => {
    setIsLoading(true);

    // Simulasi API call / delay 1 detik
    setTimeout(() => {
      setUser({
        id: 1,
        name: "John Doe",
        email: email,
        avatar: "👤",
      });

      setIsLoading(false);
    }, 1000);
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  // Update Profile
  const updateProfile = (updatedData) => {
    setUser((prev) => ({ ...prev, ...updatedData }));
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    updateProfile,
    isAuthenticated: !!user,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
