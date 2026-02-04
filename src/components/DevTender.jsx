import { useState } from "react";

function DevTender() {
    return (
        <div>
            <div className="flex  bg-zinc-800 p-3 justify-between ">
                <header>
                    <span className="text-2xl">DevTender</span>
                </header>

                <header className=" flex p-1 gap-3">
                    <span>Features</span>
                    <span>Pricing</span>
                    <span>Login</span>
                    <span>Get Started</span>
                </header>
            </div>

            <div className="bg-zinc-950 from-violet-950 to-black  flex flex-col items-center justify-center gap-6 p-6">
                <span><button className="border-purple-950 bg-violet-950 p-2 rounded-3xl text-purple-300">Connect. Code. Collaborate.</button></span>
                <h1 className=" flex flex-wrap text-5xl font-bold justify-center gap-3 text-amber-50 p-4">Find Your Perfect <span className="text-purple-700">Dev Match</span></h1>
                <p className="text-gray-400 ">DevTinder connects developers based on skills, interests, and tech stack. Swipe right on your next coding partner, mentor, or collaborator.</p>
                <div className="flex flex-wrap gap-5 m-5">
                    <button className=" bg-purple-600 px-10 sm:px-6 py-6 sm:py-4 rounded-md hover:bg-purple-800 ">Start Maching</button>
                    <button className="bg-gray-800 px-10 sm:px-6 py-6 sm:py-4  rounded-md ">Learn More</button>
                </div>
            </div>

            <div className=" bg-stone-950 gap-10">
                <div className="  flex  flex-col justify-center items-center p-10 gap-5 ">
                    <h1 className="text-5xl">Built for Developers</h1>
                    <p className=" flex felx-col text-gray-400">Everything you need to find and connect with developers who share your passion</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8  px-8 py-6 ">
                    <div className="border-2 rounded-3xl p-10  border-gray-600 bg-black hover:border-violet-700">
                        <h3 className="font-bold">Smart Matching</h3>
                        <p className="text-gray-400" >Algorithm-based matching based on tech stack, experience level, and interests. Find developers who complement your skills.</p>
                    </div>

                    <div className="border-2 rounded-3xl p-10  border-gray-600  bg-black hover:border-violet-700">
                        <h3 className="font-bold">Real-time Chat</h3>
                        <p className="text-gray-400">Instant messaging with code snippet support. Discuss ideas, share knowledge, and plan collaborations in real-time.</p>
                    </div>

                    <div className="border-2 rounded-3xl p-10  border-gray-600  bg-black hover:border-violet-700">
                        <h3 className="font-bold">Quick Connections</h3>
                        <p className="text-gray-400">Swipe right to send interest, accept or reject requests. Build your developer network effortlessly.</p>
                    </div>

                    <div className="border-2 rounded-3xl p-10  border-gray-600  bg-black  hover:border-violet-700">
                        <h3 className="font-bold">Verified Profiles</h3>
                        <p className="text-gray-400">Connect with confidence. All profiles are verified and showcase real skills, projects, and experience.</p>
                    </div>

                    <div className="border-2 rounded-2xl p-10  border-gray-600  bg-black hover:border-violet-700">
                        <h3 className="font-bold" >Premium Features</h3>
                        <p className="text-gray-400">Unlock advanced filters, unlimited swipes, see who liked you, and priority matching with premium membership.</p>
                    </div>

                    <div className="border-2 rounded-3xl p-10  border-gray-600  bg-black hover:border-violet-700">
                        <h3 className="font-bold">Skill Showcase</h3>
                        <p className="text-gray-400">Display your tech stack, projects, and achievements. Let your code speak for itself.</p>
                    </div>

                </div>

            </div>

            <div className="  bg-black ">

                <div className="  flex  flex-col justify-center items-center p-8 gap-5">
                    <h1 className="text-5xl">Choose Your Plan</h1>
                    <p className="flex felx-col text-gray-400">Start free, upgrade when you're ready</p>
                </div>

                <div className="flex flex-wrap gap-25 justify-center p-5 ">

                    <div className="  border-2 rounded-4xl border-gray-500 p-5">
                        <div className=" flex flex-col m-2">
                            <span className=" font-extrabold text-2xl">Free</span>
                            <span className="font-extrabold text-2xl">$0</span>
                        </div>
                        <div className="p-1">
                            <p><span className="text-purple-700 font-bold m-1">✓</span>10 swipes per day</p>
                            <p><span className="text-purple-700 font-bold m-1">✓</span>Basic profile customization</p>
                            <p><span className="text-purple-700 font-bold m-1">✓</span>Standard matching algorithm</p>
                            <p><span className="text-purple-700 font-bold m-1">✓</span>Message accepted connections</p>
                            <p><span className="text-purple-700 font-bold m-1">✓</span>View your matches</p>
                        </div>

                        <div className=" flex bg-gray-900 hover:bg-gray-800 rounded-3xl p-2 m-4 justify-center">
                            <button>Get Started</button>
                        </div>

                    </div>

                    <div className="border-2 rounded-4xl border-gray-500 p-6 hover:border-violet-800 hover:bg-auto">
                        <div className="flex flex-col m-2">
                            <span><button className="bg-violet-800 rounded-4xl m-1 px-2">Most Popural</button></span>
                            <span className="font-extrabold text-2xl">premium</span>
                            <span className="font-extrabold text-2xl">$9.99/month</span>
                        </div>

                        <div className="p-1">
                            <p><span className="text-purple-700 font-bold m-1">✓</span>Unlimited swipes</p>
                            <p><span className="text-purple-700 font-bold m-1">✓</span>Advanced profile customization</p>
                            <p><span className="text-purple-700 font-bold m-1">✓</span>Priority matching algorithm</p>
                            <p><span className="text-purple-700 font-bold m-1">✓</span>See who liked your profile</p>
                            <p><span className="text-purple-700 font-bold m-1">✓</span>Advanced filters by tech stack</p>
                            <p><span className="text-purple-700 font-bold m-1">✓</span>Unlimited messaging</p>
                            <p><span className="text-purple-700 font-bold m-1">✓</span>Profile boost feature</p>
                            <p><span className="text-purple-700 font-bold m-1">✓</span>Ad-free experience</p>
                        </div>
                        <div className=" flex justify-center bg-violet-800 rounded-3xl p-2 m-2">
                            <button >Go Premium</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className=" flex flex-col justify-center items-center bg-violet-900 p-10 ">
                <h1 className="font-extrabold text-3xl m-2 p-3">Ready to Find Your Dev Match?</h1>
                <p className="text-gray-300 m-4">Join thousands of developers already connecting, collaborating, and building together</p>
                <button className="bg-white text-violet-800 rounded-md p-2 m-4">Get Started Free</button>
            </div>

            <div className=" grid sm:grid-cols-2 md:grid-cols-3 mx-auto justify-between bg-white text-gray-500 p-8 ">
                <div className="flex flex-col gap-1 ">
                    <h2 className="text-black font-medium">DevTinder</h2>
                    <p className="mt-1">Connecting developers worldwide.
                        Find your perfect coding partner,
                        mentor, or collaborator.</p>
                </div>

                <div className=" flex flex-col gap-1">
                    <h3 className="text-black font-medium">Product</h3>
                    <span>Features</span>
                    <span>Pricing</span>
                    <span>Premium</span>
                    <span>Roadmap</span>
                    <span>Changelog</span>
                </div>

                <div className="flex flex-col gap-1">
                    <h3 className="text-black font-medium">Resources</h3>
                    <span>Blog</span>
                    <span>Guides</span>
                    <span>Help Center</span>
                    <span>Community</span>
                    <span>API Docs</span>
                </div>

                <div className="flex flex-col gap-1">
                    <h3 className="text-black font-medium">Company</h3>
                    <span>About Us</span>
                    <span>Careers</span>
                    <span>Contact</span>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>

            <div className="flex flex-wrap justify-between bg-pink-50 border-2 border-gray-100 py-4 px-6 ">
                <div>
                    <h2 className="text-black font-medium">Stay Updated</h2>
                    <p className="text-gray-500">Get the latest updates, tips, and exclusive offers delivered to your inbox.</p>
                </div>
                <div className=" flex gap-4">
                    <input className="text-gray-700 border-gray-800 p-2 bg-white rounded-md" type="email" placeholder="Enter your email" />
                    <button className="text-white bg-violet-700 rounded-md px-5 p-2">Subscribe</button>
                </div>
            </div>

            <div>

            </div>

        </div>
    )
}

export default DevTender;