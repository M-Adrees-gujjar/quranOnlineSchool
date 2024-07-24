const products = [
    {
      id: 1,
      name: 'Quran Reading',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1720463830/courseOne_x0qkzy.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Tajweed Course',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1720463831/CourseTwo_cigjwa.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Quran Memorization',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1720463830/CourseThree_ejmcpx.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Quran Tafsir',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1720463830/CourseFour_vhqet5.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 5,
      name: 'Tarbiyah Classess',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1720463830/CourseFive_xoyewo.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 6,
      name: 'Serah Course',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dkzca4hyd/image/upload/v1720463831/CourseSix_x62gsj.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
  ]
  
  export default function Courses() {

    function handleCourse(product) {
      console.log("-----",product);
      location.replace("courseDetail");
    }

    return (
      <div className="bg-white shadow-sm" id="course">
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
                    <button 
                    onClick={()=>handleCourse(product)}
                    type="button" className="transition-all border-2 text-2xl bg-main-color hover:bg-white border-main-color text-white hover:text-main-color font-bold w-full py-2 my-5 rounded-md">
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
  