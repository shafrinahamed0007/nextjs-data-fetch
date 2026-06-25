import Product from "@/Components/Product";

const getProducts = async () => {
  const res = await fetch("http://localhost:3004/products", {
    next: { revalidate: 20 },
  });
  return res.json();
};

const productsPage = async () => {
  const products = await getProducts();
  return (
    <div className="container mx-auto">
      Total Products: {products.length}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default productsPage;
