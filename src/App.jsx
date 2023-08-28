import { useContext, useState } from 'react';
import { AddProduct } from './components/admin/AddProduct';
import { ListProduct } from './components/admin/ListProduct';
import { Product } from './components/products/Product';
import './styles/index.css';
import { productReducer } from './reducers/productReducer';
import { AuthContext } from './contexts/AuthContext';
import { ProductContext } from './contexts/ProductContext';

import { ProfilePage } from './ProfilePage';
import { NavBar } from './components/ui/NavBar';

function App() {
  const {
    products,
    onClickAddProduct,
    onChargeProductFormId,
    productEditID,
    onDeleteProduct,
  } = useContext(ProductContext);
  const { state } = useContext(AuthContext);

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
