import React, { useState } from 'react'
import Head from './components/Head';
import TableRow from './components/TableRow';
import Error from './components/Error';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  console.log(data)
// Mahsulot qo'shish uchun funksiya start //
  function AddProduct() {
    const newProduct = {
      id:Math.random(),
      name: name,
      price: price
    }

    if(name.length>0 && price.length>0){
      setData([...data, newProduct]);
      notify();
    }else{
      notifyError();
    }

    setName('');
    setPrice('');
  }
  // Mahsulot qo'shish uchun funksiya end //

  // Mahsulotni olib tashlash uchun funksiya start //

  function Delete(delData){
    setData(data.filter((item)=>item.id!=delData.id));
  }

    // Mahsulotni olib tashlash uchun funksiya end //
function notify(){
  toast.success("Mahsulot muvaffaqqiyatli qo'shildi!", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}
function notifyError(){
  toast.error("Formalarni to'liq to'ldiring!", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className="card w-50 p-4 d-flex flex-column align-items-center mt-5">
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='form-control w-75 m-1' placeholder='Mahsulot nomini kiriting...' />
        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" className='form-control w-75 m-1' placeholder='Mahsulot narxini kiriting...' />
        <button className='btn btn-success w-50 mx-auto m-2' onClick={AddProduct} >QO'SHISH</button>

        {data.length ?
          <table className='table table-bordered mt-3'>
            <Head />
            <tbody>
              {data.map((item, ind) => <TableRow item={item} index={ind} delete={Delete}/>)}
            </tbody>
          </table>
          :
          <Error />
        }

      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  )
}
