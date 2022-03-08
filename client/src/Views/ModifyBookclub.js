import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Error404View from "./Error404View";
import "../App.css";

const ModifyBookclub = (props) => {
  let { id } = useParams();
  // modBookclub is an object
  // console.log("IM THE LOG", props.bookClubs);
  let modBookclub = props.bookClubs.find((bc) => bc.id === Number(id));
  const [formData, setFormData] = useState(modBookclub);

  const [submitted, setSubmitted] = useState(false); // success message

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => {
      return {
        ...formData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.modifyBookclub(formData.id, formData.name);
    setFormData({ name: "" });
  };

  return (
    <div className="modify-bc">
      {submitted ? (
        <div className="success-message">
          {" "}
          {modBookclub.name} has been updated!
        </div>
      ) : null}
      <form className="mod-bc" onSubmit={handleSubmit}>
        <h2>{modBookclub.name}</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
        />
        <button className="btn-update">submit</button>
      </form>
    </div>
  );
};

export default ModifyBookclub;
