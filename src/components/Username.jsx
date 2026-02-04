import { useState } from "react";
import pragya from "../components/pragya.jpeg";

function Username() {
    return (
        <div>
            <div className="flex flex-row rounded-4xl   border-neutral-600  mt-4 m-2 px-6 py-4 justify-between" >
                <label htmlFor=""></label>
                <input className="border-2 border-gray-600 rounded-md p-1" type="text" placeholder="Enter your username" />
                <button className=" border-2  border-gray-600 rounded-md m-1 p-1 text-gray-400 "  >
                    search
                </button>
            </div>
            <div className="flex  flex-col rounded-4xl  dark:bg-neutral-900  border-neutral-600  gap-2.5  px-6 py-4" >
                <div className="flex justify-center  ">
                    <img className="  h-30  rounded-full " src={pragya} alt="pragya" />
                </div>
                <div className="flex flex-col gap-2 border-transparent ">
                    <label htmlFor="">Full Name:
                        <input type="text" />
                    </label>

                    <label htmlFor=""> Followers:
                        <span>200</span>
                    </label>

                    <label htmlFor=""> Followings:
                        <span>400</span>
                    </label>

                    <label htmlFor=""> Total Repository:
                        <span>600</span>
                    </label>

                </div>

                <div>
                    <button className="flex justify-center ml-25 border-2 border-gray-600 rounded-md p-1 text-gray-400  font-medium">
                        Profile View
                    </button>
                </div>
            </div>

        </div>

    )
}
export default Username;