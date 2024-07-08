const products = [
    {
      id: 1,
      name: 'Quran Reading',
      href: '#',
      imageSrc: '/src/assets/images/courseOne.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Tajweed Course',
      href: '#',
      imageSrc: '/src/assets/images/CourseTwo.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Quran Memorization',
      href: '#',
      imageSrc: '/src/assets/images/CourseThree.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Quran Tafsir',
      href: '#',
      imageSrc: '/src/assets/images/CourseFour.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Tarbiyah Classess',
      href: '#',
      imageSrc: '/src/assets/images/CourseFive.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Serah Course',
      href: '#',
      imageSrc: '/src/assets/images/CourseSix.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
  ]
  
  export default function Courses() {
    return (
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-6xl">
          <div className="lg:border-gray-200 lg:border-2 p-2 lg:rounded-md lg:shadow-md">
          <h2 className="font-bold tracking-tight text-main-color text-3xl">
            Our Courses
          </h2>

          <div className="mt-6 flex flex-wrap lg:justify-between justify-center">
            {products.map((product) => (
              <div key={product.id} className="group relative border-main-color rounded-md border-2 my-5">
                <div className="aspect-h-1 aspect-w-1 w-80 overflow-hidden  bg-gray-200 lg:aspect-none lg:h-60">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4">
                  <div className="px-5">
                    <h3 className="text-2xl font-semibold text-main-color text-center">
                      {product.name}
                    </h3>
                    <button type="button" className="transition-all border-2 text-2xl bg-main-color hover:bg-white border-main-color text-white hover:text-main-color font-bold w-full py-2 my-5 rounded-md">
                      Course Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    )
  }
  