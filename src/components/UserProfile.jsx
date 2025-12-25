import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";

const UserProfile = () => {
  const { theme } = useTheme();
  const { user, isAuthenticated, login, logout, updateProfile, isLoading } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.name || "");

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
    setEmail("");
    setPassword("");
  };

  // Handle Update Profile
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    updateProfile({ name });
    setEditMode(false);
  };

  // Jika belum login
  if (!isAuthenticated) {
    return (
      <div className={`user-profile ${theme}`}>
        <h2>Login</h2>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={isLoading} className="btn btn-primary">
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="demo-credentials">
          <p><strong>Demo:</strong> Use any email and password</p>
        </div>
      </div>
    );
  }

  // Jika user sudah login → tampilkan profil
  return (
    <div className={`user-profile ${theme}`}>
      <h2>User Profile</h2>

      {!editMode ? (
        <div className="profile-info">
          <div className="avatar">{user.avatar}</div>

          <div className="details">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>

          <button onClick={() => setEditMode(true)} className="btn btn-outline">
            Edit Profile
          </button>

          <button onClick={logout} className="btn btn-danger" style={{ marginLeft: "10px" }}>
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleUpdateProfile} className="edit-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Save
            </button>

            <button
              type="button"
              onClick={() => setEditMode(false)}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserProfile;
