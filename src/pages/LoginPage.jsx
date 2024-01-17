const LoginPage = () => {
  return (
    <form className="w-2/4 m-auto flex flex-col gap-4">
      <h1 className="text-3xl text-center underline mt-3 mb-6">Login</h1>
      <div>
        <label htmlFor="first_name" className="text-lg">
          Email :
        </label>
        <input
          type="email"
          className="w-full p-2 border-2 border-black"
          placeholder="ikhsan@gmail.com"
          required
        />
      </div>
      <div>
        <label htmlFor="first_name" className="text-lg">
          Password :
        </label>
        <input
          type="password"
          className="w-full p-2 border-2 border-black"
          placeholder="ikhsan123"
          required
        />
      </div>
      <button type="submit" className="p-2 text-white bg-black">
        Submit
      </button>
    </form>
  );
};

export default LoginPage;