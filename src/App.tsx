import useUserStore from "./store/userstore";

const App = () => {
  const { user, setUser } = useUserStore();

  const handleCreateUser = () => {
    const newUser = { username: "gian" };
    setUser(newUser);
  };

  return (
    <main className="grid h-screen place-content-center">
      <div className="text-center">
        {user ? (
          <p>Welcome, {user.username}!</p>
        ) : (
          <p>No user is currently set.</p>
        )}
        <button
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
          onClick={handleCreateUser}
        >
          Create User
        </button>
      </div>
    </main>
  );
};

export default App;
