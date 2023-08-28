import React, { useReducer, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { productReducer } from '../reducers/productReducer';
import { types } from '../types/types';

const initialProducts = [
  {
    id: 'sku-0001',
    title: 'Galaxy AS3',
    category: 'Celulares',
    price: '120.000',
    description: 'Celular 5g con doble pantalla y 4 camaras',
  },
  {
    id: 'sku-0002',
    title: 'Galaxy A13',
    category: 'Celulares',
    price: '80.000',
    description: 'Celular 5g con, 3 Camaras',
  },
  {
    id: 'sku-0003',
    title: 'Galaxy A22 5g',
    category: 'Celulares',
    price: '98.000',
    description: 'Celular 5g con, 4 Camaras, 27mp',
  },
  {
    id: 'sku-0004',
    title: 'Galaxy A23 5g',
    category: 'Celulares',
    price: '148.000',
    description: 'Celular 5g con, 4 Camaras, 32mp',
  },
];

export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, initialProducts);

  const [productEditID, setProductEditID] = useState({
    id: '',
    title: '',
    category: '',
    price: '',
    description: '',
  });

  // useEffect(() => {
  //   console.log(products);
  // }, []);

  const onClickAddProduct = (event, form) => {
    event.preventDefault();
    if (form.id === '') {
      const newProductoObj = {
        id: 'sku-' + new Date().getTime(),
        title: form.title,
        category: form.category,
        price: form.price,
        description: form.description,
      };
      dispatch({
        type: types.products.addType,
        payload: newProductoObj,
      });
    } else {
      console.log('Editar Producto');
      const editProductoObj = {
        id: form.id,
        title: form.title,
        category: form.category,
        price: form.price,
        description: form.description,
      };
      const newProductsEdited = products.map((product) => {
        if (product.id === form.id) {
          return editProductoObj;
        }
        return product;
      });

      console.log(newProductsEdited);
      dispatch({
        type: types.products.editType,
        payload: newProductsEdited,
      });
    }
  };

  const onChargeProductFormId = (product) => {
    setProductEditID(product);
  };

  const onDeleteProduct = (productId) => {
    const newProducts = products.filter((product) => product.id !== productId);
    dispatch({
      type: types.products.deleteType,
      payload: newProducts,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        onClickAddProduct,
        onChargeProductFormId,
        onDeleteProduct,
        productEditID,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
