
const articles = [
  {
    title:
      "Islam in the West: The Role of Online Quran Teaching in Promoting Understanding and Tolerance",
    author: "quransch",
    date: "April 16, 2023",
    content:
      "Islam is one of the fastest-growing religions in the world, and the Muslim population in the West is increasing rapidly. However, the lack of understanding and misconceptions about Islam among non-Muslims in the West have led to Islamophobia and discrimination. To address this issue, there is a need to promote understanding and tolerance towards Islam, and online Quran teaching can play a significant role in this regard.",
  },
  {
    title: "The Importance of Tajweed: How to Perfect Your Quranic Recitation",
    author: "quransch",
    date: "April 16, 2023",
    content:
      "The Quran is the holy book of Islam and recitation of its verses is an integral part of daily worship. Tajweed is the science of recitation of the Quran and refers to the correct pronunciation and intonation of the Arabic words.",
  },
  {
    title:
      "The Benefits of Learning Quran Online: How Online Quran Classes Can Help You Grow Spiritually",
    author: "quransch",
    date: "April 16, 2023",
    content:
      "In today’s fast-paced world, finding time to learn Quran can be a challenge. But with the advent of technology, online Quran classes have made it easier than ever before to learn the Quran from the comfort of your own home.",
  },
  {
    title: "5 Benefits of Online Quran Teaching for Kids and Adults",
    author: "quransch",
    date: "April 16, 2023",
    content:
      "Online Quran teaching is becoming increasingly popular among Muslims all around the world, especially those living in Western countries.",
  },
  {
    title: "Benefits of Online Quran Teaching",
    author: "quransch",
    date: "April 16, 2023",
    content:
      "The internet has revolutionized the way we learn, and the field of Islamic education is no exception. Online Quran teaching has become increasingly popular over the past few years and for good reason.",
  },
  {
    title:
      "The Importance of Learning Quran Correctly: Benefits and Challenges",
    author: "quransch",
    date: "April 16, 2023",
    content:
      "As Muslims, it is our duty to learn and understand the teachings of the Quran. The Quran is the word of Allah, and it is the ultimate source of guidance for mankind.",
  },
];

export default function Blog() {
  function handleBlogDetail(details) {
    console.log("handleBlogDetail --- ",details);
    localStorage.setItem("blogDetails",details);
    location.replace('/blogDetails')
  }

  return (
    <div className="overflow-hidden py-4 pt-32">
      <div className="mx-auto max-w-6xl flex flex-col gap-5">
        {articles.map((element, index) => (
          <div
            key={index}
            onClick={()=>handleBlogDetail(element)}
            className=" border-gray-200 border-2 rounded-md lg:shadow-md mx-auto grid lg:grid-cols-2 grid-cols-1 lg:gap-5 hover:cursor-pointer"
          >
            <div className="py-8 px-6">
              <div className="">
                <p className="mt-2 text-2xl font-bold tracking-tight text-main-color sm:text-2xl">
                  {element.title}
                </p>
                <p className="text-gray-800 font-semibold">
                  {element.date}
                </p>
                <p className="mt-2 font-semibold text-justify text-gray-500 leading-5">
                  {element.content}
                </p>
              </div>
            </div>
            <div className="">
              <img
                alt="Product screenshot"
                src="https://res.cloudinary.com/dkzca4hyd/image/upload/v1720542418/blogImg_gs7r1v.jpg"
                width={100}
                height={100}
                className="object-fill object-center h-full w-full lg:rounded-r-md rounded-e-md rounded-s-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
