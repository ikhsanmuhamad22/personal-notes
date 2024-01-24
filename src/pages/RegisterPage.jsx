import { useNavigate } from 'react-router-dom';
import RegisterInput from '../components/Auth/RegisterInput';
import { register } from '../utils/api';
import Header from '../components/Header';

const RegisterPage = () => {
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    !error ? navigate('/') : null;
  };

  return (
    <>
      <Header /> <RegisterInput register={onRegisterHandler} />
    </>
  );
};

export default RegisterPage;
