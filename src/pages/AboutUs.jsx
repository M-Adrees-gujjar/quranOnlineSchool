export default function AboutUs() {
  return (
    <div className="overflow-hidden bg-white py-4">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 border-2 border-gray-200 rounded-md lg:shadow-md py-8 sm:py-12">
        <div className="mx-auto grid lg:grid-cols-2 grid-cols-1 lg:gap-20">
          <div className="">
            <div className="">
              <p className="mt-2 text-3xl font-bold tracking-tight text-main-color sm:text-4xl">
                About us
              </p>
              <p className="mt-6 text-lg font-semibold text-justify text-gray-600 leading-6">
                We are an international organization dedicated to providing
                authentic Islamic education to Muslims worldwide. Our online
                Quran classes are designed for learners of all ages and
                backgrounds, and our experienced faculty is committed to helping
                you learn the Holy Quran with accurate pronunciation and
                understanding. We aim to make Islamic education accessible and
                convenient for everyone, regardless of their location, school of thought, or level of knowledge.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-main-color lg:max-w-none">
                <p className="font-bold text-center text-xl leading-6 my-6">
                  Join us today and embark on a journey of spiritual
                  enlightenment and Islamic education.
                </p>
              </dl>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="border-main-color border-2 w-full lg:h-full h-60 rounded-lg flex justify-center items-center">
              <img
                alt="Product screenshot"
                src="https://res.cloudinary.com/dkzca4hyd/image/upload/v1720463829/asset1_dmwkas.png"
                width={100}
                height={100}
                className="object-fill object-center h-32 w-60"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
