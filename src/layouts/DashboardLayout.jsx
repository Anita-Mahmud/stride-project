import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div>
           <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-72 min-h-full bg-slate-700  text-white">
      {/* Sidebar content here */}
      <li><Link to="/">Home</Link></li>
      <li><Link to="/dashboard">Profile</Link></li>
      <li><Link to="/dashboard/products">All Products</Link></li>
      <li><Link to="/dashboard/add/products">Add Products</Link></li>
      
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;