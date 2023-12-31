const Form = () => {
  return (
    <form action="/" className="flex flex-col gap-5">
      <input
        type="text"
        placeholder="ahhhhh"
        className="h-20 rounded-md text-4xl font-bold p-3"
      />
      <textarea
        cols="30"
        rows="10"
        className="resize-none rounded-md text-lg p-3 h-full"
        placeholder="ahhhh"
      ></textarea>
    </form>
  );
};

export default Form;
