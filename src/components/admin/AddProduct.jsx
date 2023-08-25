import { useEffect, useRef, useState } from "react";
import useForm from "../../hooks/useForm";

// const data = {
//   id: 'sku-0002',
//   title: 'Galaxy A13',
//   category: 'Celulares',
//   price: '$80.000',
//   description: 'Celular 5g con, 3 Camaras',
// };

export const AddProduct = ({ onClickAddProduct, productEditID = {} }) => {
  const idRef = useRef(null);
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);
  const { id, title, category, price, description, onChangeForm } =
    useForm(productEditID);

  return (
    <div className="col-lg-4">
      <form>
        <div className="mb-3">
          <input
            ref={idRef}
            type="text"
            className="form-control"
            placeholder="Id del Producto"
            name="id"
            value={id || ""}
            disabled={true}
            onChange={(event) =>
              onChangeForm(event.target.value, titleRef.current.name)
            }
          />
        </div>
        <div className="mb-3">
          <input
            ref={titleRef}
            type="text"
            className="form-control"
            placeholder="Titulo del  Producto"
            name="title"
            value={title || ""}
            onChange={(event) =>
              onChangeForm(event.target.value, titleRef.current.name)
            }
          />
        </div>
        <div className="mb-3">
          <input
            ref={categoryRef}
            type="text"
            className="form-control"
            placeholder="Categoria"
            name="category"
            value={category || ""}
            onChange={(event) =>
              onChangeForm(event.target.value, categoryRef.current.name)
            }
          />
        </div>
        <div className="mb-3">
          <input
            ref={priceRef}
            type="number"
            className="form-control"
            placeholder="Precio"
            name="price"
            value={price || ""}
            onChange={(event) =>
              onChangeForm(event.target.value, priceRef.current.name)
            }
          />
        </div>
        <div className="mb-3">
          <textarea
            ref={descriptionRef}
            className="form-control"
            rows="3"
            placeholder="Descripcion del producto"
            name="description"
            value={description || ""}
            onChange={(event) =>
              onChangeForm(event.target.value, descriptionRef.current.name)
            }
          ></textarea>
        </div>
        <button
          className="btn btn-info mb-3"
          onClick={(event) =>
            onClickAddProduct(event, {
              id,
              title,
              category,
              price,
              description,
            })
          }
        >
          GUARDAR
        </button>
      </form>
    </div>
  );
};
