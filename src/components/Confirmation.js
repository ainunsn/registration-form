


const Confirmation = ({firstname, lastname, jobdesc, gender, email, laptop, address, mobile_number}) => {
  return (
    <div className='confirmation'>
      <h2>Confirmation data of entry</h2>

      <div>
        <div>
          <p>Fullname: {firstname} {lastname}</p>
          <p>Jobdesc: {jobdesc.map(i => <ul><li>{i.value}</li></ul>)}</p>
          <p>Gender: {gender}</p>
          <p>E-mail: {email}</p>
          <p>Have a Laptop/PC: {laptop ? 'Yes' : 'No'}</p>
          <p>Mobile Number: {mobile_number}</p>
          <p>Address: {address}</p>

        </div>
      </div>
    </div>
  );
};

export default Confirmation;
