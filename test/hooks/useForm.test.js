import { act, renderHook } from '@testing-library/react';
import useForm from '../../src/hooks/useForm';

const initialValues = {
  id: 'sku-0002',
  title: 'Galaxy A13',
  category: 'Celulares',
  price: '$80.000',
  description: 'Celular 5g con, 3 Camaras',
};

describe('TEST HOOK useForm', () => {
  test('CONTROL HOOK Validar Valores iniciales', () => {
    const { result } = renderHook(() => useForm(initialValues));
    // const { form, onChangeForm } = result.current;
    // expect(form.id).toBe(initialValues.id);
    // expect(form.title).toBe(initialValues.title);
    // expect(form.price).toBe(initialValues.price);
    // expect(form.description).toBe(initialValues.description);
    //console.log(result.current);

    expect(result.current.form).toEqual({
      id: initialValues.id,
      title: initialValues.title,
      category: initialValues.category,
      price: initialValues.price,
      description: initialValues.description,
      image: initialValues.image,
      //onChangeForm: expect.any(Function),
    });
  });

  test('CONTROL EVENT HOOKS - Validar Cambio del Title', () => {
    const newTitle = 'Motorola E13';
    const fieldTitle = 'title';

    const { result } = renderHook(() => useForm(initialValues));
    const { onChangeForm } = result.current;
    act(() => {
      onChangeForm(newTitle, fieldTitle);
    });

    expect(result.current.title).toBe(newTitle);
  });
});
