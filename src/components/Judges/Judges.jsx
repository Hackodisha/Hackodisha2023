import Image from "next/image"
import Link from "next/link";
export const speakJudgeData = [
  {
      name:"Ajay Suneja",
      subHeading:"Technical Suneja",
      imgSrc:"https://res.cloudinary.com/webwiz-team/image/upload/q_auto/v1693992086/ho3/judges/suneja.webp",
      link:"https://technicalsuneja.com/"
  },
  {
      name:"Vivek Gupta",
      subHeading:"Algo Zenith",
      imgSrc:"https://res.cloudinary.com/webwiz-team/image/upload/q_auto:good/v1693992088/ho3/judges/vivek.webp",
      link:"https://www.youtube.com/@vivekgupta3484"
  },
  {
      name:"Aniket Pal",
      subHeading:"Wells Fargo",
      imgSrc:"https://res.cloudinary.com/webwiz-team/image/upload/q_auto:good/v1693992088/ho3/judges/aniket.jpg",
      link:"https://www.linkedin.com/in/aniket-pal"
  },
  {
      name:"Jay Saadana",
      subHeading:"Quine",
      imgSrc:"https://res.cloudinary.com/webwiz-team/image/upload/q_auto:good/v1693992088/ho3/judges/jay.jpg",
      link:"https://www.linkedin.com/in/jaysaadana/"
  },
  {
      name:"Harsh Kumar Jadon",
      subHeading:"Zuraverse",
      imgSrc:"https://res.cloudinary.com/webwiz-team/image/upload/q_auto:good/v1693992088/ho3/judges/harsh.webp",
      link:"https://www.linkedin.com/in/harsh-kumar-jadon-204a15197//"
  },
  {
      name:"Abhishek Sagar",
      subHeading:"Zuraverse",
      imgSrc:"https://res.cloudinary.com/webwiz-team/image/upload/q_auto:good/v1693992088/ho3/judges/abhishek.webp",
      link:"https://www.linkedin.com/in/asssagar/"
  },
  {
      name:"Ajit Garg",
      subHeading:"FifthTry",
      imgSrc:"https://res.cloudinary.com/webwiz-team/image/upload/q_auto:good/v1693992088/ho3/judges/ajit.webp",
      link:"https://www.linkedin.com/in/ajit-garg-319167190/"
  },
];

export default function Judges() {
  return (
    <>
  <div >
  <div   className="sm:grid-cols-3 grid gap-5 grid-cols-2 gap-y-20 py-[100px] w-[80vw] mx-auto  "
        > 
    <div className="text-[#07d6d1] text-5xl font-extrabold font-serif decoration-[6px] underline py-[20px] px-[20px] flex justify-center items-center">Speakers & Judges</div>
    { speakJudgeData && speakJudgeData.map((item) => (
            <Link
              href={item.link}
              target="_blank"
              className=" w-260px h-240px  grayscale hover:text-[#FF2525] hover:grayscale-0 duration-500 ease-in-out text-[#FFF] mx-auto "
              >
                <Image
                  src={item.imgSrc}
                  width={260}
                  height={240}
                />
              <h3 className="font-Syoog lg:text-[1.2rem] text-[0.9rem] text-center">
                {item.name}
              </h3>
              <h3 className="text-white text-center lg:[1rem] text-[0.7rem]  ">
                {item.subHeading}
              </h3></Link>

    ))}
    </div>
    </div>
    </>
)
}
