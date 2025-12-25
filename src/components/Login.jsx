import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const naviation = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((a) => {
        console.log(a.user);
        toast.success("Account Login Successful!");
        naviation("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Email & Password Invalide!");
      });
  };

  const handleGoogleLogin = () => {
    console.log("google login test");
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
        toast.success("Google Login successful!");
        naviation("/");
      })
      .catch((er) => {
        console.log(er);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl font-bold text-center my-5 text-pink-600">
          Login Here
        </h1>

        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />

              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>

          <p className="text-center">
            Don't have an account? Please{" "}
            <Link className="underline text-blue-500" to={"/register"}>
              Register
            </Link>
          </p>

          <div className="flex items-center justify-center mx-auto space-x-2">
            <div className="w-30 border-t border border-gray-500"></div>
            <p className="opacity-80">or</p>
            <div className="w-30 border-t border border-gray-500"></div>
          </div>

          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
