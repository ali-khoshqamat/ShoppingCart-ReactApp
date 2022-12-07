import Product from "../components/Product";
import { products } from "../data";

const HomePage = () => {
  return (
    <main className="px-2.5">
      <h2 className="p-5 text-center text-xl font-bold">Products List</h2>
      <section className="container mx-auto space-y-5 py-5 xl:max-w-screen-xl">
        <ul className="grid grid-cols-autofit gap-x-[3rem] gap-y-[3.5rem]">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
