import { useState } from "react";
import { Github } from "lucide-react";


function LoginPage() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        console.log("name", name);
        console.log("password", password);
        e.preventDefault();

    }

    return (

        <div>
            <form onSubmit={handleSubmit} className=" flex flex-col bg-black rounded-md border-2 px-12 py-4 gap-2" >
                <span className="flex justify-center gap-2"> <Github /> </span>

                <h2 className="flex justify-center text gap-2"> Sign in to Github</h2>

                <label htmlFor="useName">Username or email addres</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="border-0 p-2 gap-2 rounded-md dark:bg-neutral-900 font-medium" type="text" />

                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="border-0 p-2 rounded-md dark:bg-neutral-900" type="password" />

                <p className="text-blue-400">
                    <a href="forgot_password.html">Forgot your password?</a>
                </p>

                <button className=" flex justify-center border-0 p-2 m-2  rounded-md dark:bg-green-800 hover:bg-green-700">
                    Sign in
                </button>

                <span className="flex justify-center">or</span>

                <button className=" flex  rounded-md border-0  justify-center bg-neutral-800 p-2 px-12" >
                    Continue with Google
                </button>

                <button className="flex  rounded-md border-0  justify-center bg-neutral-800 p-2 px-12">
                    Continue with Apple
                </button>

                <p className="flex gap-1"> New to Github?
                    <a href="Create Account" className="text-blue-400">Create Account</a>
                </p>

                <button>
                    <a className="text-blue-400" href="Sign in with Passkey">Sign in with passkey</a>
                </button>

            </form>

        </div>
    )
}

export default LoginPage;