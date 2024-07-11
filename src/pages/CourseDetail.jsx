export default function CourseDetail() {
  return (
    <div className="pt-36 max-w-6xl m-auto flex flex-col gap-5">
      <div className="rounded-md bg-main-color h-80 text-white text-center">
        <img
          src="https://res.cloudinary.com/dkzca4hyd/image/upload/v1720463831/CourseTwo_cigjwa.jpg"
          alt="ImgCourse"
          className="rounded-md object-cover w-full h-full object-center"
          width={100}
          height={100}
        />
      </div>
      <div className="border-main-color border-2">
        <div className="">
          <button type="button" className="w-1/2 px-2 text-xl font-bold text-main-color bg-gray-200 border-gray-300 border-2 p-3">
          - About Course -
          </button>
          <button
            type="button"
            className="w-1/2 text-xl font-bold text-main-color
          "
          >
            - Course Content -
          </button>
        </div>
        <div className=" p-3">
        <p className="text-xl text-main-color text-justify">
          The “Quran School Online” Islamic Tarbiyah Classes is a comprehensive
          course designed to provide a deep understanding of Islamic teachings
          and their practical application in daily life. The course is intended
          to help students develop a strong relationship with Allah, purify
          their hearts, and cultivate good character and ethical behavior.
          Tarbiyah, which means nurturing or education, is an essential
          component of Islamic teachings. It involves the development of one’s
          spiritual, moral, and intellectual capacities through a disciplined
          and structured approach. The “Quran School Online” emphasizes the
          importance of Tarbiyah in personal and collective development and
          considers it an integral part of Islamic education. The course is
          structured in a way that provides a step-by-step approach to Tarbiyah,
          starting with the purification of the heart and character development,
          followed by the exploration of Islamic ethics and morality, prayer and
          worship, Islamic history and heritage, and relationship with Allah and
          His Messenger. The course also emphasizes the practical application of
          Tarbiyah in daily life and its relevance in contemporary times.
        </p>
        </div>
      </div>
    </div>
  );
}
