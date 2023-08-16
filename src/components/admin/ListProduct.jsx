import React from 'react'

export const ListProduct = () => {


  return (
    <div className="col-lg-8" >
        <table className="table mt-5 table-secondary" >
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">PRODUCTO</th>
                <th scope="col">PRECIO</th>
                <th scope="col">ACTIVO</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">SKU-78765</th>
                <td>Apple iPhone XR (Red, 128 GB)</td>
                <td>$125.365</td>
                <td>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    </div>
                </td>
                <td>
                    <button className='btn btn-info mx-2 btn-sm'>Editar</button>
                    <button className='btn btn-danger  btn-sm'>Eliminar</button>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
