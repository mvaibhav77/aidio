import { useContext } from 'react';
import ModelContext from '../context/ModelContext';
import Loader from './Shared/Loader';

function Result() {
  const { output, isLoading } = useContext(ModelContext);

  const printResult = () => {
    if (output.status < 0) {
      return (
        <div className="font-primary text-center text-5xl text-[yellow]">
          Audio Invalid...
        </div>
      );
    } else {
      if (output.out === 0) {
        return (
          <div className="font-primary text-center text-5xl text-[green]">
            Real Audio
          </div>
        );
      } else {
        return (
          <div className="font-primary text-center text-5xl text-[red]">
            DeepFaked Audio
          </div>
        );
      }
    }
  };
  return isLoading ? (
    <Loader />
  ) : (
    <div className="p-4">
      {Object.keys(output).length !== 0 && printResult()}
    </div>
  );
}

export default Result;
