import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../../context/LanguageContext';
import translations from '../../utils/translate';
import PropTypes from 'prop-types';
import { DarkMode } from '../../context/DarkModeContext';

const LoginInput = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { language } = useContext(Language);
  const { isMode } = useContext(DarkMode);

  const submitData = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <>
      <form
        onSubmit={submitData}
        className="md:w-2/4 w-full m-auto flex flex-col gap-4 mt-8"
      >
        <h1 className="text-3xl text-center underline mt-3 mb-6">
          {translations[language].login}
        </h1>
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
        {translations[language].no_account}{' '}
        <Link to="/register" className="underline">
          {translations[language].register_here}
        </Link>
      </p>
    </>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
