import { useState } from "react";

function Quotes() {
    return (
        <div className=" flex flex-col  border-2  bg-emerald-50  text-black rounded-4xl p-4 ">
            <p className=" flex flex-col h-10">
                "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."
            </p>
            <footer className="text-red-600">— A. P. J. Abdul Kalam</footer>
        </div>
    )
}

export default Quotes;