import React, { useState } from "react";
import "../App.css";

const empty_form = {
  name: "",
  category: "",
};

const CreateBookclub = (props) => {
  const [formValues, setFormValues] = useState(empty_form); // create a copy of the object

  const [submitted, setSubmitted] = useState(false);

  const handleFormInputChange = (event) => {
    console.log("i am the change", event);
    // extract name and value prop from event.target object
    const { name, value } = event.target;
    // // then call the setFormValues function, this returns an object that has the previous state merged with the new value that we get from the event.target property.
    setFormValues((formValues) => {
      return {
        ...formValues, // retains form values
        [name]: value, // overrides one of the form values
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    props.addBookclub(formValues.name, formValues.category);
    setFormValues(empty_form);
  };

  return (
    <div className="form-container">
      {submitted ? (
        <div className="success-message">A new bookclub was created!</div>
      ) : null}
      <h4>Create a new bookclub</h4>
      <form className="bookclub-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={formValues.name}
          id="name"
          placeholder="Name"
          name="name"
          onChange={handleFormInputChange}
        />

        <input
          type="text"
          value={formValues.category}
          id="category"
          placeholder="Category"
          name="category"
          onChange={handleFormInputChange}
        />
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBookclub;
