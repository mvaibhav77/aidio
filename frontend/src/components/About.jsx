const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
  },

  {
    id: 2,
    title: 'Boost your sjkld  conversion rate',
    
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel.',
  },
  {
    id: 3,
    title: 'Boost your conversion rate',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
  },
  // More posts...
];

function About() {
  return (
    <div className="bg-white py-24 sm:py-10 md:py-10">
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            className="text-3xl font-primary tracking-tight text-gray-900 sm:text-4xl"
            id="how"
          >
            HOW THIS WORKS
          </h2>
        </div>
        <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-20 gap-y-16 border-t md:p-4 border-gray-200 pt-10 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="motion-safe:hover:scale-110 group hover:bg-[#282828] hover:shadow-lg hover:border-transparent border-solid border-2 border-black rounded-md flex max-w-xl flex-col items-start justify-between"
            >
              <div className="group relative">
                <h3 className="mt-3  text-center font-semibold leading-6 text-gray-900 group-hover:text-white">
                  <a>
                    <span className="absolute inset-0 " />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 px-4 font-secondary text-sm leading-6 text-gray-600 group-hover:text-white pb-4">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
export default About;
