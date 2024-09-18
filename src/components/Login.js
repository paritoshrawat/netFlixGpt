import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // handle validation

    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
  };

  const toggleSignInform = () => {
    setIsSignForm(!isSignForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute inset-0 w-screen h-screen  ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"
          alt="logo-netflix-background"
          className="w-full h-full object-cover"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 px-2">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 bg-opacity-70"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Adress"
          className="p-4 my-4 w-full bg-gray-800 bg-opacity-70
          "
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-800 bg-opacity-70"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button
          className="p-4 my-6 font-bold text-lg bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInform}>
          {isSignForm
            ? "New To Netfilix Sign Up Now"
            : "Already Registerd ?  sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
