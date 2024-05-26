
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
const Login = () => {
    const {googleLogin,user,signIn} = useAuth();
    const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;


    await signIn(email, password);
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  name="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button type="submit"
          className="btn btn-primary"
         
          >Login</button>
        </div>
        <button className="btn mt-4"  onClick={()=>googleLogin()}>
            <FcGoogle size={30}></FcGoogle>
        </button>
       
      </form>
      <div className="pb-10">
              <p className="text-xl text-center">
                New here?{" "} 
                <Link to="/register" className="text-blue-500">
                  Register
                </Link>
              </p>
            </div>
     
    </div>
    
  </div>
  
</div>


        </div>
        
    );
};

export default Login;