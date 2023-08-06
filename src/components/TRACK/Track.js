import Image from "next/image";
import "./Track.css";
import image1 from "../../../public/Images/Vector 47.png";
import image2 from "../../../public/Images/Vector 48.png";
import image3 from "../../../public/Images/Vector 49.png";
import image4 from "../../../public/Images/Vector 48 new.png";
import image5 from "../../../public/Images/Vector 49 mobile.png";
import image6 from "../../../public/Images/Vector 47 mobile.png";

function Track() {
  return (
    <div className="bg-black">
      <div className=" parent max-w-[1200]  bg-black grid lg:grid-rows-2 md:grid-rows-2 sm:grid-rows-3 grid-flow-col gap-2 box-sizing: border-box  ">
        <div className="child lg:row-span-2 md:row-span-2 place-content-evenly  box-sizing: border-box justify-center ">
          <div className="imagio">
            <Image
              src={image1}
              alt="Picture of the author"
              className="ima-full"
              
            />
            <Image
              src={image6}
              alt="Picture of the author"
              className="ima-small"  
              
            />
            <div className="text">
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

        <div className=" child box-sizing: border-box">
          <div className="imago">
            <Image
              src={image2}
              alt="Picture of the author"
              className="ima-full"
            
            />
            <Image
              src={image4}
              alt="Picture of the author"
              className="ima-small" 
             
            />
            <div className="text2">
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

        <div className=" child   box-sizing: border-box">
          <div className="imagos">
            <Image
              src={image3}
              alt="Picture of the author"
              className="ima-full"
             
             
            />
            <Image
              src={image5}
              alt="Picture of the author"
              className="ima-small"
              
            />
            <div className="text2">
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
