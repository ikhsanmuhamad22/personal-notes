import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import translations from '../../utils/translate';
import { Language } from '../../context/LanguageContext';
import PropTypes from 'prop-types';
import { DarkMode } from '../../context/DarkModeContext';

const RegisterInput = ({ register }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifPassword, setVerifPassword] = useState('');
  const [verifPasswordInfo, setVerifPasswordInfo] = useState(false);
  const { language } = useContext(Language);
  const { isMode } = useContext(DarkMode);

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
    <>
      <form
        onSubmit={submitData}
        className="md:w-2/4 w-full m-auto flex flex-col gap-3 mt-8"
      >
        <h1 className="text-3xl text-center underline mt-3 mb-6">
          {translations[language].register}
        </h1>
        <div>
          <label htmlFor="first_name" className="text-lg">
            Name :
          </label>
          <input
            type="text"
            className={`${
              isMode === 'light' ? ' bg-light' : 'border-light bg-bgDark'
            } w-full p-2 border-2 border-bgDark`}
            placeholder="jhonDoe"
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
            className={`${
              isMode === 'light' ? ' bg-light' : 'border-light bg-bgDark'
            } w-full p-2 border-2 border-bgDark`}
            placeholder="jhonDoe@gmail.com"
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
            className={`${
              isMode === 'light' ? ' bg-light' : 'border-light bg-bgDark'
            } w-full p-2 border-2 border-bgDark`}
            placeholder="jhonDoe123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
            required
          />
        </div>
        <div>
          <label htmlFor="first_name" className="text-lg">
            Confirm Password :
          </label>
          <input
            type="password"
            className={`${
              isMode === 'light' ? ' bg-light' : 'border-light bg-bgDark'
            } w-full p-2 border-2 border-bgDark`}
            placeholder="jhonDoe123"
            value={verifPassword}
            onClick={() => setVerifPasswordInfo(false)}
            onChange={(e) => setVerifPassword(e.target.value)}
            autoComplete="on"
            required
          />
          {verifPasswordInfo ? <p>password do not match</p> : null}
        </div>
        <button
          type="submit"
          className={`${
            isMode === 'light'
              ? ' text-light bg-bgDark'
              : 'text-bgDark bg-light'
          } p-2`}
        >
          {translations[language].submit}
        </button>
      </form>
      <p className="text-center mt-3">
        {translations[language].have_account}{' '}
        <Link to="/" className="underline">
          {translations[language].login_here}
        </Link>
      </p>
    </>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
