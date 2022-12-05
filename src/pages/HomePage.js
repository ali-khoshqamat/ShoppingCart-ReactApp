import { products } from "../data";

const HomePage = () => {
  return (
    <main className="px-2.5">
      {/* <h2 className="p-2.5">Home Page!</h2> */}
      <section className="container mx-auto space-y-5 xl:max-w-screen-xl ">
        <h3 className="text-center font-bold">Products List</h3>
        <ul className="grid grid-cols-autofit gap-x-3 gap-y-5">
          {products.map((product) => (
            <li
              key={product.id}
              className="rounded-2xl bg-slate-900 text-sm text-white dark:bg-white dark:text-slate-900"
            >
              <div className="aspect-w-5 aspect-h-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-t-2xl object-cover"
                />
                {/* <div className="relative h-0 pb-4/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className=" absolute inset-0 h-full w-full rounded-t-2xl object-cover"
                  />
                </div> */}
              </div>
              <div className="flex justify-between p-2.5">
                <p>{product.name}</p>
                <p>$ {product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
