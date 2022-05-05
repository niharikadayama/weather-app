import React, { useState } from "react";
import { Images } from "constant/images";
import "./style.scss";

const Form = ({ val, submitSearch }) => {
  const [location, setLocation] = useState("");
  const { search } = Images;
  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    submitSearch(location);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        aria-label="location"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit" onClick={onSubmit}>
        <img src={search} alt="search-button" />
      </button>
    </form>
  );
};

export default Form;
