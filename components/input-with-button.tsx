type InputWithButtonProps = {
  inputPlaceholder: string;
  buttonText: string;
  onSubmit?: (input: string) => void;
};

export default function InputWithButton({
  inputPlaceholder,
  buttonText,
  onSubmit,
}: InputWithButtonProps) {
  function submitWrapper(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const input = new FormData(event.currentTarget).get("input") as string;
    onSubmit?.(input);
  }

  return (
    <form onSubmit={submitWrapper} className="flex">
      <input
        name="input"
        type="text"
        placeholder={inputPlaceholder}
        className="py-2 px-3 rounded-tl-md rounded-bl-md outline-none border border-r-0 bg-transparent flex-1"
      />
      <button
        type="submit"
        className="py-2 px-4 rounded-tr-md rounded-br-md border border-l-0 bg-white text-black font-semibold hover:opacity-80 duration-100"
      >
        {buttonText}
      </button>
    </form>
  );
}
