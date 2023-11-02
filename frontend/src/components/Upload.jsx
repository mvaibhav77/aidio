function Upload() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 px-16 md:px-8 my-20 gap-8 items-center md:h-full ">
      <div className="text-white">
        <h1 className="font-primary text-4xl md:text-center">
          DEEPFAKE DETECTION
        </h1>
        <p className="mt-4 w-4/5 md:mt-6 md:w-full md:text-center">
          Introducing our cutting-edge web app! Unmask deepfakes with ease by
          simply uploading an audio file. Using advanced spectrograph analysis,
          we accurately determine whether the audio is genuine or digitally
          altered. Protect your trust and authenticity with our reliable
          deepfake detection solution.
        </p>
      </div>
      <form className="text-black grid grid-rows-2 gap-6 justify-self-end md:justify-self-center md:p-4">
        <button className="p-4 text-white bg-dark border-2 group hover:bg-white hover:shadow-lg hover:border-transparent hover:text-black rounded-xl h-fit w-72 md:w-100 ">
          Upload Audio
        </button>
        <button className="p-4 bg-white h-fit group hover:bg-transparent hover:shadow-lg hover:border-2 hover:text-white rounded-xl w-72 md:w-100">
          Validate
        </button>
      </form>
    </div>
  );
}

export default Upload;
