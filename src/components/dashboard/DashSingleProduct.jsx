import { Link } from "react-router-dom";


const DashSingleProduct = ({id,title,brand,price,description,image_url,onDelete}) => {
    const handleDelete = async () => {
        await fetch(`http://localhost:3000/shoes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
           
            onDelete(id);

          });
      };
    return (
        <div className="card w-96 bg-base-100 shadow-lg shadow-indigo-500/50 mt-6">
        <figure><img src={image_url} alt={title} className="size-80
        mt-4"/></figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-center mt-2 ">
            <button className="btn btn-outline btn-primary px-8"><Link to={`/dashboard/products/edit/${id}`}>Edit</Link></button>
            <button onClick={handleDelete} className="btn btn-outline btn-error text-white">
            Delete
          </button>
          
          </div>
         
        </div>
      </div>
    );
};

export default DashSingleProduct;