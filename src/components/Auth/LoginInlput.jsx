import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginInput = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitData = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <>
      <form
        onSubmit={submitData}
        className="w-2/4 m-auto flex flex-col gap-4 mt-8"
      >
        <h1 className="text-3xl text-center underline mt-3 mb-6">Login</h1>
        <div>
          <label htmlFor="first_name" className="text-lg">
            Email :
          </label>
          <input
            type="email"
            className="bg-light w-full p-2 border-2 border-bgDark"
            placeholder="ikhsan@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="first_name" className="text-lg">
            Password :
          </label>
          <input
            type="password"
            className="bg-light w-full p-2 border-2 border-bgDark"
            placeholder="ikhsan123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="p-2 text-light bg-bgDark">
          Submit
        </button>
      </form>
      <p className="text-center mt-3">
        Dont have an account?{' '}
        <Link to="/register" className="underline">
          Register Here
        </Link>
      </p>
    </>
  );
};

export default LoginInput;
