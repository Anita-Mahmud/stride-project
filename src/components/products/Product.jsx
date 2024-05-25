

const Product = ({title,brand,price,description,image_url}) => {
    
    return (
        <div className="card w-96 bg-base-100 shadow-lg shadow-indigo-500/50">
  <figure><img src={image_url} alt={title}/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-center mt-2 ">
      <button className="btn btn-primary px-20">Show Details</button>
    </div>
  </div>
</div>
    );
};

export default Product;