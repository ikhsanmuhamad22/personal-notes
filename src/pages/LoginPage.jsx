import LoginInput from '../components/Auth/LoginInput';
import Header from '../components/Header';
import { login } from '../utils/api';
import PropTypes from 'prop-types';

const LoginPage = ({ loginSuccess }) => {
  const onLoginHandler = async (user) => {
    const { error, data } = await login(user);
    !error ? loginSuccess(data) : null;
  };

  return (
    <>
      <Header /> <LoginInput login={onLoginHandler} />
    </>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
