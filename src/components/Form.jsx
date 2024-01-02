import { useState } from 'react';
import { addNote } from '../utils/data';
import SubmitButton from './Button/SubmitButton';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submitNote = (e) => {
    e.preventDefault();
    addNote({ title, body });
    navigate('/');
  };

  return (
    <form onSubmit={submitNote} className="flex flex-col gap-5 static">
      <input
        type="text"
        placeholder="ahhhhh"
        className="h-20 rounded-md text-4xl font-bold p-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        className="resize-none rounded-md text-lg p-3 h-full"
        placeholder="ahhhh"
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
