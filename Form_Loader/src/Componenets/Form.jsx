import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [submit, setSubmit] = useState("Submit");
  const [loading, setLoading] = useState(false);
  function handleName(e) {
    setName(e.target.value);
  }

  function handleGender(e) {
    setGender(e.target.value);
  }

  function handleAddress(e) {
    setAddress(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log(name);
    console.log(age);
    console.log(gender);
    console.log(address);

    // Reset the form fields
    setName("");
    setAge("");
    setGender(""); // Clear the gender field
    setAddress("");
  }

  return (
    <>
      {loading ? (
        <h2>"Please wait while submitting..."</h2>
      ) : (
        <>
          {" "}
          <form action="#" id="data">
            <h2>Form</h2>
            <div className="form">
              <i>Name: </i>
              <input value={name} type="text" onChange={handleName} />
            </div>
            <div className="form">
              <i>Age: </i>
              <input
                value={age}
                type="number"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form">
              <i>Gender:</i>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"} // Bind state to checked
                  onChange={handleGender}
                />
                <i>Male</i>
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"} // Bind state to checked
                  onChange={handleGender}
                />
                <i>Female</i>
              </label>
            </div>
            <div className="form">
              <i>Address:</i>
              <textarea
                name="address"
                id="address"
                value={address}
                onChange={handleAddress}
              ></textarea>
            </div>
            <div>
              <button type="submit" onClick={handleSubmit}>
                {submit}
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default Form;
