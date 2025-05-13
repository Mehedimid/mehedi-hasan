import "./primaryButton.css";

const PrimaryButton = ({ text = "primary button", onClick }) => {
  return (
    <button
      className="cursor-pointer relative overflow-hidden px-5 py-2 border-2  border-primary text-primary focus:outline-none focus-visible:outline-none clip-focus-center-out-y capitalize font-semibold"
      onClick={onClick}
      type="submit"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
