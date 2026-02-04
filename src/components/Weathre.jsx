import { useState } from "react";

function Weather() {
    return (
        <div className=" flex  rounded-md text-gray-500 bg-white py-2 ">
            <div className=" flex flex-col gap-5" >
                <div>
                    <div className=" flex  justify-between">
                        <h3 className="text-black text-4xl m-4 ">Ranchi</h3>
                        <input className="text-black" type="date" />
                    </div>
                    <div className=" flex items-center justify-center m-5 ">
                        <p className="text-9xl"> 32<sup>o</sup>c</p>
                        <span>cloudy</span>
                    </div>

                </div>

                <div className="flex flex-row gap-5 m-8 p-5">
                    <span className=" hover:border-gray-400 hover:bg-gray-100 shadow-2xl rounded-md p-3">
                        <h3>Today</h3>
                        <p>20<sup>o</sup>C</p>
                        <p>Mist</p>
                    </span>
                    <span className=" hover:border-gray-400  hover:bg-gray-100 shadow-2xl rounded-md p-3">
                        <h3>Tue</h3>
                        <p> 32<sup>o</sup>C</p>
                        <p>Sunny</p>
                    </span>
                    <span className=" hover:bg-gray-100 shadow-2xl hover:border-gray-400 rounded-md p-3">
                        <h3>Wed</h3>
                        <p> 12<sup>o</sup>C</p>
                        <p>Rainy</p>
                    </span>
                    <span className="  hover:bg-gray-100 shadow-2xl hover:border-gray-400 rounded-md p-3">
                        <h3>Thu</h3>
                        <p> 13<sup>o</sup>C</p>
                        <p>Rainy</p>
                    </span>
                    <span className="  hover:bg-gray-100 shadow-2xl hover:border-gray-400 rounded-md p-3">
                        <h3>Fri</h3>
                        <p>22<sup>o</sup>C</p>
                        <p>mist</p>
                    </span>
                    <span className="  hover:bg-gray-100 shadow-2xl hover:border-gray-400 rounded-md p-3">
                        <h3>Sat</h3>
                        <p>23<sup>o</sup>C</p>
                        <p>Mist</p>
                    </span>
                </div>
            </div>

            <div>
                <div className=" flex flex-col items-center justify-between gap-2 m-5 ">
                    <h2 className="text-black text-xl">Good Morning</h2>
                    <input type="time" />
                    <p className="text-3xl gap-4">20<sup>o</sup>c</p>
                    <span>Cloudy</span>
                    <p className="text-black">Hourly Forcast</p>
                </div>

                <div className="md:grid gap-4 md:grid-cols-3 m-8 p-5">

                    <span className="  hover:bg-gray-100 shadow-2xl hover:border-gray-400 rounded-md p-3">
                        <h3>Today</h3>
                        <p className="" >32<sup>o</sup>C</p>
                        <p className="text-gray-400">Sunny</p>
                    </span>
                    <span className=" hover:bg-gray-100 rounded-md shadow-2xl hover:border-gray-400 p-3 ">
                        <h3>Tue</h3>
                        <p className="text-gray-500">32<sup>o</sup>C</p>
                        <p className="text-gray-400">Sunny</p>
                    </span>
                    <span className="  rounded-md shadow-2xl border-gray-200 p-3  hover:bg-gray-100">
                        <h3>Wed</h3>
                        <p>32<sup>o</sup>C</p>
                        <p className="text-gray-400">Sunny</p>
                    </span>
                    <span className="  rounded-md shadow-2xl border-gray-200 p-3  hover:bg-gray-100">
                        <h3>Thu</h3>
                        <p>32<sup>o</sup>C</p>
                        <p className="text-gray-400">Sunny</p>
                    </span>
                    <span className=" rounded-md shadow-2xl border-gray-200 p-3  hover:bg-gray-100">
                        <h3>Fri</h3>
                        <p>32<sup>o</sup>C</p>
                        <p className="text-gray-400">Sunny</p>
                    </span>
                    <span className="  rounded-md shadow-2xl border-gray-200 p-3  hover:bg-gray-100">
                        <h3>Sat</h3>
                        <p>32<sup>o</sup>C</p>
                        <p className="text-gray-400">Sunny</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Weather;
