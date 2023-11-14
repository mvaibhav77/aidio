import { createContext, useState } from 'react';

const ModelContext = createContext();

const url = 'http://127.0.0.1:8080';

export const ModelProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [audioID, setAudioID] = useState(null);
  const [output, setOutput] = useState({});
  const [isAudioFill, setIsAudioFill] = useState(false);

  //  Upload audio file
  const uploadAudio = async (audio) => {
    setAudioID(audio);
    setIsAudioFill(false);
    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', audio);

    fetch(`${url}/uploadfile`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        // 'Content-Type': 'multipart/form-data' is automatically set when using FormData
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        setAudioID(data.id);
        setIsLoading(false);
        setIsAudioFill(true);
      })
      .catch((error) => {
        // Handle errors
        setIsLoading(false);
        console.error('Error:', error);
      });
  };

  //   Validate audio file
  const validateAudio = async () => {
    setIsLoading(true);
    fetch(`${url}/status/?id=${audioID}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        setIsLoading(false);
        setIsAudioFill(false);
        console.log(data);
        setOutput(data);
      })
      .catch((error) => {
        // Handle errors
        setIsLoading(false);
        console.error('Error:', error);
      });
  };

  return (
    <ModelContext.Provider
      value={{
        isLoading,
        audioID,
        output,
        isAudioFill,
        uploadAudio,
        validateAudio,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
};

export default ModelContext;