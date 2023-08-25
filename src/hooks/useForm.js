import { useEffect, useState } from 'react';

const useForm = (initValues = {}) => {
  const { id, ...resto } = initValues;
  const [form, setForm] = useState(initValues);

  useEffect(() => {
    setForm(initValues);
  }, [initValues]);

  const onChangeForm = (value, field) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return {
    form,
    onChangeForm,
  };
};

export default useForm;
