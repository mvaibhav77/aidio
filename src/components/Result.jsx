import { useContext } from 'react';
import ModelContext from '../context/ModelContext';
import Loader1 from './Shared/Loader1';
import '../App.css'
function Result() {
  const { output, isLoading } = useContext(ModelContext);

  const printResult = () => {
    if (output.status < 0) {
      return (
        <div className="font-primary text-center text-5xl  md:text-2xl">
          Audio Invalid...
        </div>
      );
    } else {
      if (output.out === 0) {
        return (
          <div className="font-primary text-center text-5xl md:text-2xl ">
            Real Audio
          </div>
        );
      } else {
        return (
          <div className="font-primary text-center text-5xl md:text-2xl  ">
            DeepFaked Audio
          </div>
        );
      }
    }
  };
  const result1=Object.keys(output).length !== 0 && printResult()
  return isLoading ? (
    <Loader1 />
  ) : (
    // <div className='flex items-center justify-center h-24 md:h-16'> 
    //   <div className="glass bg-gradient-to-r from-indigo-600 to-pink-500 text-white opacity-70 h-16 w-auto md:w-64 md:h-10  ">
    //   {Object.keys(output).length !== 0 && printResult()}
    // </div>
    // </div>
    <div className='flex justify-center'>
      <div className="glass bg-gradient-to-r from-indigo-600 to-pink-500 text-white opacity-70  h-auto w-auto md:w-64 md:h-10 m-4 ">
        
        {result1}
      
       
    </div>
    </div>
  );
  // return(
  //   <div className="glass">
  //     <h1>hii</h1>
  //      {Object.keys(output).length !== 0 && printResult()}
  //   </div>
  // )
}

export default Result;
