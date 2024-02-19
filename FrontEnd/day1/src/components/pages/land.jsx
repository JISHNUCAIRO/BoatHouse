const LoginPage = () => {
  const handleAdminLogin = () => {
    console.log('Admin login clicked');
  };

  const handleUserLogin = () => {
    console.log('User login clicked');
  };

  return (
    <div className="login-page">
      <h2>Welcome to My Website</h2>
      <p>Please select your login role:</p>
      <div className="login-buttons">
        <button className="admin-button" onClick={handleAdminLogin}>Login as Admin</button>
        <button className="user-button" onClick={handleUserLogin}>Login as User</button>
      </div>
    </div>
  );
};

export default LoginPage;
