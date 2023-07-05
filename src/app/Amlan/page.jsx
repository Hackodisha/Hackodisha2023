import Image from 'next/image'
import Icon from './HO3 png.png'
import Insta from './insta.png'
import Linkedin from './linkedin.png'
import Twitter from './twitter.png'
import BgImg from './pngwing 7.png'
export default function Footer() {
    return(
		<div className="bg-black pt-5">
        <div className="flex justify-evenly">
          <div className="left w-1/3 pt-10 pl-5">
            <Image fill={false} src={Icon} className="sm:w-48 w-36 sm:h-24 w-18"></Image>
            <h2 className="mb-6 text-md w-11/12 sm:text-2xl mt-4 text-white">Want to become a sponsor of Hackodisha 3.0?</h2>
            <button className="px-4 bg-fuchsia-600 rounded-2xl sm:rounded-full w-26 sm:w-56 h-20 sm:h-14 py-4 text-sm sm:text-lg hover:bg-fuchsia-400 ease-in duration-100 text-white">Become a sponsor</button>        
          </div>

          
          <div className="p-5 text-lg sm:text-2xl text-white">
					<ul>
						<p className=" font-bold text-xl sm:text-4xl pb-4 text-cyan-500">Sitemap</p>
						<li className="pb-2 font-semibold hover:text-slate-500 cursor-pointer">
							Home
						</li>
						<li className="pb-2 font-semibold hover:text-slate-500 cursor-pointer">
							About us
						</li>
						<li className="pb-2 font-semibold hover:text-slate-500 cursor-pointer">
							Prizes
						</li>
						<li className="pb-2 font-semibold hover:text-slate-500 cursor-pointer">
							Contact us
						</li>
                        <li className="pb-2 font-semibold hover:text-slate-500 cursor-pointer">
							Sponsors
						</li>
						<li className="pb-2 font-semibold hover:text-slate-500 cursor-pointer">
							FAQs
						</li>
					</ul>
				</div>
				<div className="p-5 text-lg sm:text-2xl text-white">
					<ul>
						<p className="text-cyan-500 font-bold text-xl sm:text-4xl pb-4">Socials</p>
						<li><a className="text-center mb-5" href=""><Image fill={false} className="sm:w-10 w-8 sm:h-10 h-8 m-auto mb-5" src={Insta} ></Image></a></li>
						<li><a className="text-center mb-5" href=""><Image fill={false} className="sm:w-10 w-8 sm:h-10 h-8 m-auto mb-5" src={Linkedin} ></Image></a></li>
						<li><a className="text-center mb-5" href=""><Image fill={false} className="sm:w-10 w-8 sm:h-10 h-8 m-auto mb-5" src={Twitter} ></Image></a></li>
					</ul>
				</div>
          </div>
		  <hr className="my-4 bg-black"></hr>
		  <h2 className="text-white text-center pb-4">Hackodisha 3.0 © 2023. Powered by Webwiz, NIT Rourkela.</h2>
		  </div>
    );
}
