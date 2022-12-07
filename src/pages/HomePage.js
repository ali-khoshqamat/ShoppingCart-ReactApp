import { products } from "../data";
import { useCartActions } from "../Providers/CartProvider";

const HomePage = () => {
  const dispatch = useCartActions();

  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <main className="px-2.5">
      {/* <h2 className="p-2.5">Home Page!</h2> */}
      <section className="container mx-auto space-y-5 xl:max-w-screen-xl ">
        <h3 className="text-center font-bold">Products List</h3>
        <ul className="grid grid-cols-autofit gap-x-[3rem] gap-y-[3.5rem]">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex flex-col items-center rounded-2xl bg-slate-100 pb-2.5 text-sm shadow dark:bg-slate-800"
            >
              <div className="aspect-w-5 aspect-h-4 w-full">
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
              <div className="flex w-full justify-between p-2.5">
                <p className="font-bold">{product.name}</p>
                <p className="font-bold">${product.price}</p>
              </div>
              <button
                onClick={() => addProductHandler(product)}
                className="rounded-md border border-slate-300 bg-slate-200 py-1 px-3 text-center font-bold shadow-sm hover:border-sky-500 hover:!text-sky-500 dark:border-slate-600 dark:bg-slate-700 dark:hover:border-sky-500"
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
