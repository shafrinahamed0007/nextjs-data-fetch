const Product = ({ product }) => {
  const { id, title, price, category, description, rating, stock } = product;
  return (
    <div className="card  bg-base-100 shadow-sm">
      <div className="card-body space-y-5">
        <h2  className="card-title text-xl font-semibold">{title}</h2>
        <p>
          {description}
        </p>
        <p>${price}</p>
        
      </div>
    </div>
  );
};

export default Product;
