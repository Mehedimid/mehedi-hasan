const SecondaryButton = ({ text = "Secondary button", onClick }) => {
  return (
    <button
      className="cursor-pointer relative overflow-hidden px-5 py-2 focus:outline-none focus-visible:outline-none clip-focus-center-out capitalize font-semibold"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
