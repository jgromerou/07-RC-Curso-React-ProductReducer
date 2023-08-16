
import { AddProduct } from './components/admin/AddProduct';
import { ListProduct } from './components/admin/ListProduct';
import { Product } from './components/products/Product';
import './styles/index.css';


function App() {


  return (
    <>
      <div className="container-fliud">
        <div className="row text-center mb-5 mt-5">
            <div className="col-lg-7 mx-auto">
                <h1 className="display-4" style={{  fontWeight:'lighter'}}>Product Reducer</h1>
            </div>
        </div>
        <div className="row p-5"  style={{ backgroundColor: '#000'}}>
            <AddProduct />
            <ListProduct />
        </div>
          <div className='row p-5'>
            <Product />
        </div>
      </div>
    </>
  )
}

export default App
