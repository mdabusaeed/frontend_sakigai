import defaultImage from "../../assets/images/default_product.jpg";

const ProductItem = ({ product }) => {
  // Add safety checks for product data
  const hasImages = product && product.images && Array.isArray(product.images) && product.images.length > 0;
  
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={hasImages ? product.images[0].image : defaultImage}
          alt={product?.name || "Product"}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product?.name || "Unnamed Product"}</h2>
        <h3 className="font-bold text-xl text-green-700">${product?.price || "0.00"}</h3>
        <p>{product?.description || "No description available"}</p>
        <div className="card-actions mt-1">
          <button className="btn btn-warning">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;