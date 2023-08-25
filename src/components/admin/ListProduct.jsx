import React from 'react';

export const ListProduct = ({
  products,
  onDeleteProduct,
  onChargeProductFormId,
}) => {
  return (
    <div className="col-lg-8">
      <table className="table mt-6">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">PRODUCTO</th>
            <th scope="col">PRECIO</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-info mx-2 btn-sm"
                    onClick={() => onChargeProductFormId(product)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDeleteProduct(product.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
