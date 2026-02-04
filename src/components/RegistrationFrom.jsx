import { useState } from "react";
import { Github } from "lucide-react";

function RegistrationFrom() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [selectOption, setSelectOption] = useState("")

    function handleSubmit(e) {
        console.log("name", name);
        console.log("email", email);
        console.log("password", password);
        console.log("confirmpassword", confirmPassword);
        console.log("selctoption", selectOption);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}
                className=" flex  flex-col rounded-md dark:bg-neutral-900 border-2 border-neutral-600  gap-2.5  px-5 py-4">

                <h2>Creatan an Account</h2>

                <p
                    className="text-neutral-500">
                    Enter ypur information below to create your account
                </p>



                <label htmlFor="name">Full Name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-1.6 rounded-md p-1.5  dark:bg-neutral-800 " type="text" id="name" placeholder="Enter your name" />

                <label htmlFor="Email">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}
                    className="border-1.5 p-1.5 rounded-md dark:bg-neutral-800" type="email" id="Email" placeholder="enter your Email" />


                <label htmlFor="Password">Password:</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}
                    className="border-1.6 rounded-md p-1.5  dark:bg-neutral-800" type="password" id="Password" placeholder="Enter your passsword" />



                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border-1.6 rounded-md p-1.5  dark:bg-neutral-800" type="password" id="confirmPassword" placeholder="Confirm password" />



                <label htmlFor="course"> Select Course
                    <select onChange={(e) => setSelectOption(e.target.value)}
                        className="border-1.6 p-2   rounded-md dark:bg-neutral-800  dark:text-white " placeholder="selectCourse">
                        <option disabled >Select </option>
                        <option value="mca">MCA</option>
                        <option value="mba" >MBA</option>
                        <option value="computerscience">Computer science</option>
                        <option value="informationtechnology">Information technology</option>
                        <option value="artificalintelligence" >Artifical intelligence</option>
                        <option value="other" >Other</option>
                    </select>
                </label>

                <button
                    className="border-1.5 rounded-md p-2 m-0.5  dark:bg-teal-700 ">Create Account
                </button>

                <button
                    className="border-1.5 flex justify-center gap-2 rounded-md p-2  text-neutral-400 border-neutral-300  dark:bg-neutral-800 "> 
                    <Github/>
                    sing up with github
                </button>


            </form>


        </div>
    )
}

export default RegistrationFrom;