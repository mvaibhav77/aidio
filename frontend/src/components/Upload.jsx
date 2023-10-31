function Upload() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 px-16 md:px-8 my-20 gap-8 items-center">
      <div className="text-white">
        <h1 className="font-primary text-4xl">DEEPFAKE DETECTION</h1>
        <p className="mt-4 w-3/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae,
          accusantium tenetur nihil praesentium pariatur officiis numquam
          consequatur minima possimus, corrupti exercitationem non! Ut
          perferendis quae voluptate at sed eius.
        </p>
      </div>
      <div className="text-black grid grid-rows-2 gap-6 justify-self-end md:p-4	">
        <button className="p-4 text-white bg-dark border-2 rounded-xl h-fit w-72 md:w-30 ">
          Upload Audio
        </button>
        <button className="p-4 bg-white h-fit rounded-xl w-72 md:w-30">
          Validate
        </button>
      </div>
    </div>
  );
}

export default Upload;
