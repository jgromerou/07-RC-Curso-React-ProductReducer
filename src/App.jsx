import { useContext, useEffect, useReducer, useState } from 'react';
import { AddProduct } from './components/admin/AddProduct';
import { ListProduct } from './components/admin/ListProduct';
import { Product } from './components/products/Product';
import './styles/index.css';
import { productReducer } from './reducers/productReducer';
import { AuthContext } from './contexts/AuthContext';

import { ProfilePage } from './ProfilePage';
import { NavBar } from './components/ui/NavBar';

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

function App() {
  // const [products, setProducts] = useState(initialProducts);

  const [products, dispatch] = useReducer(productReducer, initialProducts);
  const { state } = useContext(AuthContext);

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
        type: '[Product] - ADD-PRODUCT',
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
        type: '[Product] - EDIT-PRODUCT',
        payload: newProductsEdited,
      });
    }
  };

  const onDeleteProduct = (productId) => {
    const newProducts = products.filter((product) => product.id !== productId);
    dispatch({
      type: '[Product] - DELETE-PRODUCT',
      payload: newProducts,
    });
  };

  const onChargeProductFormId = (product) => {
    setProductEditID(product);
    // dispatch({
    //   type: '[Product] - EDIT-PRODUCT',
    //   payload: newProducts,
    // });
  };

  return (
    <>
      <NavBar />
      <div className="container-fluid">
        {/* <div className="row text-center mb-5 mt-5">
          <div className="col-lg-7 mx-auto">
            <h1 className="display-4" style={{ fontWeight: "lighter" }}>
              Product Reducer
            </h1>
          </div>
        </div> */}
        {state && state.isLogged && (
          <div className="row" style={{ backgroundColor: '#000', padding: 20 }}>
            <AddProduct
              onClickAddProduct={(event, value) =>
                onClickAddProduct(event, value)
              }
              productEditID={productEditID}
            />
            <ListProduct
              products={products}
              onDeleteProduct={(value) => onDeleteProduct(value)}
              onChargeProductFormId={(value) => onChargeProductFormId(value)}
            />
          </div>
        )}
        <div className="row p-5">
          <Product products={products} />
        </div>
      </div>

      <ProfilePage />
    </>
  );
}

export default App;
