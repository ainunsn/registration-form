const Input = ({ label, name, style, value, handleChange, type }) => {

  const genderArr = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  return (
    <div
      className={`input-container ${style !== "undefined" ? "flex-1" : null}`}
    >
      <label>{label}</label>
      {type === "select" ? (
        <select
          className="input-form"
          name={name}
          value={value}
          onChange={handleChange}
        >
          {genderArr.map((opt) => (
            <option value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          type={"textarea"}
          rows="3"
          className="input-form"
          name={name}
          value={value}
          onChange={handleChange}
        ></textarea>
      ) : (
        <input
          type={type}
          className={`input-form`}
          name={name}
          value={value}
          onChange={handleChange}
        />
      )}
    </div>
  );
};
export default Input;
