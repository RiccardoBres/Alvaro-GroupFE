import { useState } from 'react';

const useFormCleaner = (initialState) => {
  const [fields, setFields] = useState(initialState);

  const cleanFields = () => {
    const cleanedFields = {};
    Object.keys(fields).forEach((key) => {
      cleanedFields[key] = '';
    });
    setFields(cleanedFields);
  };

  return { fields, cleanFields };
};

export default useFormCleaner;