
import logo from "../../assets/logo.png"
import { navigation } from "./navigation";
import Developer from "../Developer/Developer";

import NavbaMobile from './NavMobile'

export default function Navbar() {


    return (

        <div className="  sticky top-0   backdrop-blur-lg   z-10 border-primary/10 border-b shadow-lg">

            <div className="  container mx-auto py-5  ">
                <div className="  flex w-full items-center justify-between px-5  ">
                    <div className="flex items-center gap-2 ">
                        <img src={logo} alt="" loading="lazy" className=" h-12" />
                    </div>

                    <ul className="md:flex hidden gap-10">
                        {
                            navigation?.map((link, idx) => <a key={idx} className="text-white text-lg font-semibold uppercase cursor-pointer hover:text-primary">{link?.title}</a>)
                        }
                    </ul>
                    {/* <ButtonPrimary onClick={login} className="md:flex hidden items-center justify-center">Action</ButtonPrimary> */}
                        <Developer className="md:flex hidden items-center justify-center" />
                        <NavbaMobile />
                   
                </div>
            </div>
        </div>
    )

}