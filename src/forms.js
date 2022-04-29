import { useState } from "react";
import { string } from "yup";

export const useForms = (initialValue, onSubmit) => {
  const [formData, setFormData] = useState({ initialValue });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const assignmentSubmit = (event) => {
    event.preventDefault();

    const urlValidator = string().url("please enter a valid url");

    try {
      urlValidator.validateSync(formData.URL);
    } catch (e) {
      setErrorMessage(e.message);
      return;
    }
    onSubmit(formData);
  };

  return { formData, errorMessage, handleChange, assignmentSubmit };
};
