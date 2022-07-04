import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function LoginRegister() {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const toggleForm = () => setIsLoginPage(!isLoginPage);

  const btnS =
    "rounded-2xl border-b-2 border-b-gray-300 bg-white py-3 px-4 font-bold text-green-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200";

  return (
    <main className="relative min-h-screen w-full bg-white">
      <div className="p-6" x-data="app">
        <header className="flex w-full justify-end">
          <div>
            {isLoginPage ? (
              <button onClick={toggleForm} className={btnS}>
                REGISTER
              </button>
            ) : (
              <button onClick={toggleForm} className={btnS}>
                LOG IN
              </button>
            )}
          </div>
        </header>

        <section className="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
          {isLoginPage ? <Login /> : <Register />}
        </section>
      </div>
    </main>
  );
}
