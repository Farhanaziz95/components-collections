'use client'

import Link from "next/link";
import { useState } from "react";

export default function Login1() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(JSON.stringify({ email, password }))
        // const response = await fetch('/api/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ email, password }),
        // });

        // if (response.ok) {
        //     const data = await response.json();
        //     localStorage.setItem('token', data.token);
        //     // Redirect to the user's dashboard or some other page
        // } else {
        //     const data = await response.json();
        //     alert(data.message);
        // }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
                <section className="flex w-[30rem] flex-col space-y-10">
                    <h1 className="text-center text-4xl font-medium">Log In</h1>

                    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                        <input
                            type="text"
                            placeholder="Email or Username"
                            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <button
                        className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
                        type="submit">
                        LOG IN
                    </button>

                    <Link
                        href="#"
                        className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">
                        FORGOT PASSWORD?
                    </Link>

                    <div className="text-center text-lg">
                        No account?
                        <Link
                            href="#"
                            className="font-medium text-indigo-500 underline-offset-4 hover:underline">
                            Create One
                        </Link>
                    </div>
                </section>
            </main>
        </form>
    )
}