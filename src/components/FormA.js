import Input from "./Input";

const FormA = (props) => {
  const {
    firstname,
    lastname,
    jobdesc,
    gender,
    email,
    addJobdesc,
    handleChange,
    deleteJobDesc,
  } = props;

  return (
    <>
      <div className="form-name">


        <Input
          label={"First Name"}
          name="firstname"
          style="flex-1"
          value={firstname}
          type="text"
          handleChange={handleChange}
        />
        <Input
          label={"Last Name"}
          name="lastname"
          style="flex-1"
          value={lastname}
          type="text"
          handleChange={handleChange}
        />
      </div>

      {jobdesc.map((item) => (
        <div key={item.id} className="jobdesc">
          <Input
            label={"Job Desc"}
            name="jobdesc"
            value={item.value}
            type="text"
            handleChange={(e) => handleChange(e, item.id)}
          />

          {item.del ? (
            <div className="add-jobdesc" onClick={() => deleteJobDesc(item.id)}>
              -
            </div>
          ) : (
            <div className="add-jobdesc" onClick={addJobdesc}>
              +
            </div>
          )}
        </div>
      ))}

      <Input
        label={"Gender"}
        name="gender"
        value={gender}
        type="select"
        handleChange={handleChange}
      />
      <Input
        label={"Email"}
        name="email"
        value={email}
        type="email"
        handleChange={handleChange}
      />
    </>
  );
};

export default FormA;
