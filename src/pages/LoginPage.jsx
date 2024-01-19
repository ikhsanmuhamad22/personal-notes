import LoginInput from '../components/Auth/LoginInlput';
import Header from '../components/Header';
import { login } from '../utils/api';

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

export default LoginPage;
