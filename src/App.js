//import logo from './logo.svg';
import {useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addAmountf, withDrawAmountf } from './redux/actioncreater/actioncreater';


function App() {
  let dtaccess = useSelector((adaccesselem)=>{
    return adaccesselem
  })
 //console.log(dtaccess)
  let dispatch = useDispatch()
  let addmyammount =()=>{
   let amount = parseInt(prompt("Add ammount"))
   
  //  console.log('djdjd',amount)
   dispatch(addAmountf(amount))
  }
  
  let wdmyammount =()=>{
    let amount = parseInt(prompt("Add ammount"))

    dispatch(withDrawAmountf(amount))
  }
  return (
    <div className="App">
      <div className='mt-5'>        
          <h1 className=''>Account Ammount</h1>
          <h5 className='mb-5'>₹ {dtaccess}</h5>
          <button className='btn btn-outline-info ' onClick={()=>{addmyammount()}} >Add Ammount</button>
          <button className='btn btn-outline-info ms-2'onClick={()=>{wdmyammount()}}>WithDrow Ammount</button>
      </div>        
    </div>
  );
}
/* const mapStateToProps = (state) => {
  return {
    myammount : state.ammount
  }
} */

export default App;
// export default connect(mapStateToProps) (App);
