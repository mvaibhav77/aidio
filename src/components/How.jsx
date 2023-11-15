const posts = [
    {
      id: 1,
      title: 'Analyzing Spectrograph',
      description:
        'Our web app employs sophisticated spectrograph analysis to distinguish genuine audio from deepfakes, ensuring unparalleled accuracy in audio verification.',
    },
  
    {
      id: 2,
      title: 'Better Accuracy',
      description:
        'Benefit from the most precise deepfake identification, thanks to our cutting-edge technology, providing unparalleled results in audio analysis.',
    },
    {
      id: 3,
      title: 'User Friendly',
      description:
        'With a sleek and intuitive interface, our web app makes deepfake detection accessible to all users, regardless of their technical expertise.',
    },
  ];
  
  function How( showDevice, toggleDevice )  {
    return (
        <div id="container" data-show={showDevice}>
        <div className="galaxy-container" onClick={toggleDevice('galaxy')}>
        <div className="mx-auto max-w-2xl lg:mx-0">
            <h2
              className="text-3xl font-primary tracking-tight text-gray-900 sm:text-4xl"
              id="galaxy"
            >
              About
            </h2>
          </div>
          <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-20 gap-y-16 border-t md:p-4 border-gray-200 pt-10 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="motion-safe:hover:scale-110 group hover:bg-[#282828] 
                 hover:shadow-lg ease-in duration-200 hover:border-transparent border-solid border-2 border-black rounded-md flex max-w-xl flex-col items-start justify-between min-h-[200px] md:min-h-0"
              >
                <div className="group relative">
                  <h3 className="mt-6 font-reckoner text-center text-3xl leading-6 text-gray-900 group-hover:text-white">
                    <a>
                      <span className="absolute inset-0 " />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 px-8 font-secondary ease-in duration-200 text-md leading-6 text-gray-600 group-hover:text-white pb-4">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        {/* <div className="bg-white py-24 sm:py-10 md:py-10">
        <div className="mx-auto max-w-7xl px-6 ">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2
              className="text-3xl font-primary tracking-tight text-gray-900 sm:text-4xl"
              id="galaxy"
            >
              HOW THIS WORKS
            </h2>
          </div>
          <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-20 gap-y-16 border-t md:p-4 border-gray-200 pt-10 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="motion-safe:hover:scale-110 group hover:bg-[#282828] 
                 hover:shadow-lg ease-in duration-200 hover:border-transparent border-solid border-2 border-black rounded-md flex max-w-xl flex-col items-start justify-between min-h-[200px] md:min-h-0"
              >
                <div className="group relative">
                  <h3 className="mt-6 font-reckoner text-center text-3xl leading-6 text-gray-900 group-hover:text-white">
                    <a>
                      <span className="absolute inset-0 " />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 px-8 font-secondary ease-in duration-200 text-md leading-6 text-gray-600 group-hover:text-white pb-4">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div> */}
    </div>
      
    );
  }
  export default How;
  