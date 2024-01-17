import { useNavigate } from 'react-router-dom';
import RegisterInput from '../components/Auth/RegisterInput';
import { register } from '../utils/api';

const RegisterPage = () => {
  const navigate = useNavigate();
  async function onRegisterHandler(user) {
    const { error } = await register(user);
    !error ? navigate('/') : null;
  }
  return <RegisterInput register={onRegisterHandler} />;
};

export default RegisterPage;
