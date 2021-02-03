import Input from "./Input";

const FormB = ({ laptop, address, mobile_number, handleChange }) => {
  return (
    <>
      <div className="radio-button">
        <p>Have a Laptop / PC ?</p>

        <div>
          <input
            type="radio"
            id="yes"
            name="laptop"
            onChange={handleChange}
            checked={laptop ? true : false}
          />
          <label for="yes">Yes</label>
        </div>

        <div>
          <input
            type="radio"
            id="no"
            name="laptop"
            onChange={handleChange}
            checked={!laptop ? true : false}

          />
          <label for="no">No</label>
        </div>
      </div>

      <Input
        label={"Address"}
        name="address"
        type="textarea"
        value={address}
        handleChange={handleChange}
      />
      <Input
        label={"Mobile Number"}
        name="mobile_number"
        value={mobile_number}
        handleChange={handleChange}
      />
    </>
  );
};

export default FormB;
