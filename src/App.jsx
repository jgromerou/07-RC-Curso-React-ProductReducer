
import './styles/index.css';


function App() {


  return (
    <>
      <div className="container-fliud">
          <div className="row text-center mb-5 mt-5">
              <div className="col-lg-7 mx-auto">
                  <h1 className="display-4">Product List</h1>
              </div>
          </div>
          <div className="row p-5"  style={{ backgroundColor: '#000'}}>
              <div className="col-lg-4" >
                  <div className='text-white  my-3' style={{ fontSize: 25}}>Alta de Producto</div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Titulo del  Producto" />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Categoria" />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Precio" />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Descripcion del producto'></textarea>
                  </div>
                  <button className='btn btn-info'>GUARDAR</button>
              </div>
              <div className="col-lg-8" >
              <table className="table mt-5 table-secondary" >
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">PRODUCTO</th>
                    <th scope="col">PRECIO</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">SKU-78765</th>
                    <td>Apple iPhone XR (Red, 128 GB)</td>
                    <td>$125.365</td>
                    <td>
                      <button className='btn btn-info mx-2 btn-sm'>Editar</button>
                      <button className='btn btn-danger  btn-sm'>Eliminar</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">SKU-78765</th>
                    <td>Apple iPhone XR (Red, 128 GB)</td>
                    <td>$125.365</td>
                    <td>
                      <button className='btn btn-info mx-2 btn-sm'>Editar</button>
                      <button className='btn btn-danger  btn-sm'>Eliminar</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">SKU-78765</th>
                    <td>Apple iPhone XR (Red, 128 GB)</td>
                    <td>$125.365</td>
                    <td>
                      <button className='btn btn-info mx-2 btn-sm'>Editar</button>
                      <button className='btn btn-danger  btn-sm'>Eliminar</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">SKU-78765</th>
                    <td>Apple iPhone XR (Red, 128 GB)</td>
                    <td>$125.365</td>
                    <td>
                      <button className='btn btn-info mx-2 btn-sm'>Editar</button>
                      <button className='btn btn-danger  btn-sm'>Eliminar</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">SKU-78765</th>
                    <td>Apple iPhone XR (Red, 128 GB)</td>
                    <td>$125.365</td>
                    <td>
                      <button className='btn btn-info mx-2 btn-sm'>Editar</button>
                      <button className='btn btn-danger  btn-sm'>Eliminar</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">SKU-78765</th>
                    <td>Apple iPhone XR (Red, 128 GB)</td>
                    <td>$125.365</td>
                    <td>
                      <button className='btn btn-info mx-2 btn-sm'>Editar</button>
                      <button className='btn btn-danger  btn-sm'>Eliminar</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">SKU-78765</th>
                    <td>Apple iPhone XR (Red, 128 GB)</td>
                    <td>$125.365</td>
                    <td>
                      <button className='btn btn-info mx-2 btn-sm'>Editar</button>
                      <button className='btn btn-danger  btn-sm'>Eliminar</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">SKU-78765</th>
                    <td>Apple iPhone XR (Red, 128 GB)</td>
                    <td>$125.365</td>
                    <td>
                      <button className='btn btn-info mx-2 btn-sm'>Editar</button>
                      <button className='btn btn-danger  btn-sm'>Eliminar</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">SKU-78765</th>
                    <td>Apple iPhone XR (Red, 128 GB)</td>
                    <td>$125.365</td>
                    <td>
                      <button className='btn btn-info mx-2 btn-sm'>Editar</button>
                      <button className='btn btn-danger  btn-sm'>Eliminar</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
            <div className='row p-5'>
                <div className="col-lg-4">
                    <ul className="list-group shadow">
                        <li className="list-group-item">
                            <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                <div className="media-body order-2 order-lg-1">
                                    <h5 className="mt-0 font-weight-bold mb-2">Apple iPhone XR (Red, 128 GB)</h5>
                                    <p className="font-italic text-muted mb-0 small">128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor</p>
                                    <div className="d-flex align-items-center justify-content-between mt-1">
                                        <h6 className="font-weight-bold my-2">₹64,999</h6>
                                        <ul className="list-inline small">
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star-o text-gray"></i></li>
                                        </ul>
                                    </div>
                                </div><img src="https://i.imgur.com/KFojDGa.jpg" alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <ul className="list-group shadow">
                        <li className="list-group-item">
                            <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                <div className="media-body order-2 order-lg-1">
                                    <h5 className="mt-0 font-weight-bold mb-2">Apple iPhone XR (Red, 128 GB)</h5>
                                    <p className="font-italic text-muted mb-0 small">128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor</p>
                                    <div className="d-flex align-items-center justify-content-between mt-1">
                                        <h6 className="font-weight-bold my-2">₹64,999</h6>
                                        <ul className="list-inline small">
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star-o text-gray"></i></li>
                                        </ul>
                                    </div>
                                </div><img src="https://i.imgur.com/KFojDGa.jpg" alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <ul className="list-group shadow">
                        <li className="list-group-item">
                            <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                <div className="media-body order-2 order-lg-1">
                                    <h5 className="mt-0 font-weight-bold mb-2">Apple iPhone XR (Red, 128 GB)</h5>
                                    <p className="font-italic text-muted mb-0 small">128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor</p>
                                    <div className="d-flex align-items-center justify-content-between mt-1">
                                        <h6 className="font-weight-bold my-2">₹64,999</h6>
                                        <ul className="list-inline small">
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star-o text-gray"></i></li>
                                        </ul>
                                    </div>
                                </div><img src="https://i.imgur.com/KFojDGa.jpg" alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
      </div>
    </>
  )
}

export default App
