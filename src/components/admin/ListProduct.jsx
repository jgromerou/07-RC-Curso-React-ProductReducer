import React from 'react';

export const ListProduct = ({
  products,
  onDeleteProduct,
  onChargeProductFormId,
}) => {
  return (
    <div className="col-lg-8 mt-3 table-responsive">
      <table className="table">
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
              <tr key={product.id} className="text-center">
                <th scope="row">{product.id}</th>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>
                  <button
                    className="btn btn-info mx-2 mb-1 btn-sm"
                    onClick={() => onChargeProductFormId(product)}
                  >
                    Editar
                  </button>
                  <button
                    data-testid="delete"
                    className="btn btn-danger mb-1 btn-sm"
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
