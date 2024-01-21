import { useContext, useState } from 'react';
import SubmitButton from './Button/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/api';
import { DarkMode } from '../context/DarkModeContext';

const Form = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { isMode } = useContext(DarkMode);

  const submitNote = async (e) => {
    e.preventDefault();
    await addNote({ title, body });
    navigate('/');
  };

  return (
    <form onSubmit={submitNote} className="flex flex-col gap-5 static">
      <input
        type="text"
        placeholder="Monthly expenses"
        className={`${
          isMode === 'light' ? 'bg-light' : 'bg-bgDark'
        } h-20 text-xl lg:text-4xl font-bold p-3`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={30}
      />
      <textarea
        cols="30"
        rows="10"
        className={`${
          isMode === 'light' ? 'bg-light' : 'bg-bgDark'
        } resize-none text-lg p-3 h-full`}
        placeholder="............."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button type="submit" className="absolute bottom-10 right-10">
        <SubmitButton />
      </button>
    </form>
  );
};

export default Form;
