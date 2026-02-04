import { useState } from "react"
import pragya from "../components/pragya.jpeg";

function Container() {
    return (

        <div className=" flex flex-col gap-2 p-4 sm:flex-row rounded-md bg-white sm:items-center sm:gap-6 sm:py-4 ...  " >
            <img className="max-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={pragya} alt="" />
            <div className="space-y-2 text-center sm:text-left">
                <div className="space-y-0.5">
                    <h2 className="ftext-lg font-semibold text-black">pragya verma</h2>
                    <p className="font-medium text-gray-500"> Softeware engneering  </p>
                </div>
                <button className= "border-2 border-purple-100 rounded-md text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
                    Message
                </button>
            </div>
        </div>
    )
}

export default Container;