
const Product = ({id,title,brand,price,description,image_url}) => {

const handleModal = (id)=>{
 
}
    
    return (
        <div className="card w-96 bg-base-100 shadow-lg shadow-indigo-500/50">
  <figure><img src={image_url} alt={title} className="w-80 mt-4"/></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{title}</h2>
    <p>{description}</p>
    <p className="font-bold">Brand: <span className="font-normal">{brand}</span></p>
    <p className="font-bold">Brand: <span className="font-normal">${price}</span></p>
    
   
  </div>
</div>
    );
};

export default Product;