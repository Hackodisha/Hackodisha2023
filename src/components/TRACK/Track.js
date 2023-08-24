import Image from "next/image";
import "./Track.css";

function Track() {
  return (
    <div className="h-fit py-40">
      <div className=" parent max-w-[1200px] md:gap-y-0 px-4 sm:grid lg:grid-rows-2 md:grid-rows-2 gap-x-[4vw] sm:grid-rows-3 grid-flow-col mx-auto">
        <div className="child lg:row-span-2 md:row-span-2 place-content-evenly  justify-center grid xl:justify-end mb-4 ">
          <div className="imagio flex flex-col items-center md:justify-start justify-center h-fit ">
            <Image
            width={500}
            height={400}
              src={"/Images/gold-border.png"}
              alt="Picture of the author"
              className="ima-full"
            />
            <Image
            width={250}
            height={200}
              src={"/Images/gold-border-mobile.png"}
              alt="Picture of the author"
              className="ima-small"
            />
            <div className="text flex flex-col gap-6">
              <h1 className="headin">Gold</h1>
              <p className="">
                Cash Prizes <span className="sp"> ₹25k</span>
              </p>
              <p className="">Goodies & Tshirts</p>
              <p className="">
                Vouchers worth<span className="sp"> $50k </span>
              </p>
            </div>
          </div>
        </div>

        <div className=" child h-fit  mb-4">
          <div className="imago grid place-items-center xl:place-items-start">
            <Image
            width={500}
            height={400}
              src={"/Images/silver-border.png"}
              alt="Picture of the author"
              className="ima-full"
            />
            <Image
            width={250}
            height={200}
              src={"/Images/silver-border-mobile.png"}
              alt="Picture of the author"
              className="ima-small"
            />
            <div className="text2 h-full flex flex-col gap-4 xl:translate-x-[40%] -translate-y-[25%]  md:translate-y-0">
              <h1 className="hea">Silver</h1>
              <p className="">
                Cash Prizes <span className="sp">₹17k</span>
              </p>
              <p className="">Goodies & Tshirts</p>
              <p className="">
                Vouchers worth<span className="sp"> $50k </span>
              </p>
            </div>
          </div>
        </div>

        <div className=" child mb-4">
          <div className="imagos grid place-items-center xl:place-items-start">
            <Image
            width={500}
            height={400}
              src={"/Images/bronze-border.png"}
              alt="Picture of the author"
              className="ima-full"
            />
            <Image
            width={250}
            height={200}
              src={"/Images/bronze-border-mobile.png"}
              alt="Picture of the author"
              className="ima-small"
            />
            <div className="text2 h-full flex flex-col gap-4 xl:translate-x-[40%] -translate-y-[25%]  md:translate-y-0 ">
              <h1 className="hea">Bronze</h1>
              <p className="">
                Cash Prizes <span className="sp"> ₹10k</span>
              </p>
              <p className="">Goodies & Tshirts</p>
              <p className="">
                Vouchers worth<span className="sp"> $50k </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Track;
