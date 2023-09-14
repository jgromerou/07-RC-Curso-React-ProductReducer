import { render, screen } from '@testing-library/react';
import { AddProduct } from '../../../src/components/admin/AddProduct';
import { dataProducts } from '../../fixtures/products';
import useForm from '../../../src/hooks/useForm';
jest.mock('../../../src/hooks/useForm');

describe('TEST - HOOK useForm', () => {
  useForm.mockReturnValue({
    title: dataProducts[0].title,
    onchangeForm: () => {},
  });
  test('CONTROL - HOOK Validar que devuelva correctamente los datos', () => {
    useForm.mockReturnValue({
      id: dataProducts[0].id,
      title: dataProducts[0].title,
      category: dataProducts[0].category,
      price: dataProducts[0].price,
      description: dataProducts[0].description,
      onChangeForm: () => {},
    });
    render(
      <AddProduct onClickAddProduct={() => {}} productEditID={() => {}} />
    );
    const inputs = screen.getAllByRole('textbox');

    const data = inputs.map((item) => item.value);
    //console.log(data);
    const name = inputs.map((item) => item.name);
    //console.log(name);

    expect(name[0]).toBe('id');
    expect(name[1]).toBe('title');
    expect(name[2]).toBe('category');
    expect(name[3]).toBe('price');
    expect(name[4]).toBe('description');

    expect(data[0]).toBe(dataProducts[0].id.toString());
    expect(data[1]).toBe(dataProducts[0].title);
    expect(data[2]).toBe(dataProducts[0].category);
    expect(data[3]).toBe(dataProducts[0].price);
    expect(data[4]).toBe(dataProducts[0].description);
    //screen.debug();
  });
});
