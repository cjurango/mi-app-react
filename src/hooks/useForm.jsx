import { useState } from "react";

function useForm(initialValues, validationRules) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    for (const name in validationRules) {
      const rule = validationRules[name];
      const value = values[name];

      if (rule.required && !value) {
        newErrors[name] = `${name} es requerido`;
      }

      if (rule.minLength && value.length < rule.minLength) {
        newErrors[name] = `Mínimo ${rule.minLength} caracteres`;
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (onSubmit) => async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await onSubmit();
    setIsSubmitting(false);
  };

  return { values, errors, isSubmitting, handleChange, handleSubmit };
}

export default useForm;
