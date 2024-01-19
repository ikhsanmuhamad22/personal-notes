import { useState } from 'react';

const RegisterInput = ({ register }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifPassword, setVerifPassword] = useState('');
  const [verifPasswordInfo, setVerifPasswordInfo] = useState(false);

  const submitData = (e) => {
    e.preventDefault();
    const match = verifPasswordHandle();
    match ? register({ name, email, password }) : null;
  };

  const verifPasswordHandle = () => {
    if (password !== verifPassword) {
      setVerifPasswordInfo(true);
      return false;
    }
    return true;
  };

  return (
    <form
      onSubmit={submitData}
      className="w-2/4 m-auto flex flex-col gap-3 mt-8"
    >
      <h1 className="text-3xl text-center underline mt-3 mb-6">Register</h1>
      <div>
        <label htmlFor="first_name" className="text-lg">
          Name :
        </label>
        <input
          type="text"
          className="w-full p-2 border-2 border-black"
          placeholder="ikhsan"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="first_name" className="text-lg">
          Email :
        </label>
        <input
          type="email"
          className="w-full p-2 border-2 border-black"
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
          className="w-full p-2 border-2 border-black"
          placeholder="ikhsan123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="first_name" className="text-lg">
          Confirm Password :
        </label>
        <input
          type="password"
          className="w-full p-2 border-2 border-black"
          placeholder="ikhsan123"
          value={verifPassword}
          onClick={() => setVerifPasswordInfo(false)}
          onChange={(e) => setVerifPassword(e.target.value)}
          required
        />
        {verifPasswordInfo ? <p>password do not match</p> : null}
      </div>
      <button type="submit" className="p-2 text-white bg-black">
        Submit
      </button>
    </form>
  );
};

export default RegisterInput;
