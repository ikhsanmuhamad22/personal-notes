import LoginInput from '../components/Auth/LoginInlput';
import { login } from '../utils/api';

const LoginPage = ({ loginSuccess }) => {
  const onLoginHandler = async (user) => {
    const { error, data } = await login(user);
    !error ? loginSuccess(data) : null;
  };

  return <LoginInput login={onLoginHandler} />;
};

export default LoginPage;
