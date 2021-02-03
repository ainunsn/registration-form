const Button = ({ steps, text, styles, step }) => {
  return (
    <button
      className={`btn ${step === "back" ? "bg-red" : null}`}
      onClick={steps}
      style={styles !== undefined ? styles : null}
    >
      {text}
    </button>
  );
};

export default Button;
