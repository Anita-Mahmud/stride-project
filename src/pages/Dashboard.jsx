import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
     <div className="hero min-h-screen bg-slate-800 w-full mx-auto">
  <div className="hero-content flex-col lg:flex-row">
  <img alt="" 
  className="w-96 rounded-lg shadow-2xl"
  src={
              user?.photoURL? user.photoURL: "https://cdn.pixabay.com/photo/2020/06/30/10/23/icon-5355896_960_720.png"}/>
    <div>
      <h1 className="text-2xl font-bold">Name: <span className="text-xl font-normal">{user?.displayName? user.displayName: "No Name Provided"}</span></h1>

      <h1 className="text-2xl font-bold">Email: <span className="text-xl font-normal"> {user?.email}</span></h1>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
    </div>
  );
};

export default Dashboard;
