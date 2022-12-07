import Cart from "../components/Cart";
import { useCart } from "../Providers/CartProvider";

const CartPage = () => {
  const { cart } = useCart();

  return !cart.length ? (
    <main className="text-center">
      <h2>Cart is Empty!</h2>
    </main>
  ) : (
    <main className="container mx-auto flex w-full gap-x-5 p-5 xl:max-w-screen-xl">
      <section className="w-full basis-3/4 space-y-5">
        {cart.map((product) => (
          <Cart product={product} />
        ))}
      </section>
      <section className="w-full basis-1/4">
        <div className="flex h-80 flex-col justify-between gap-y-5 rounded-2xl border bg-slate-100 p-5 shadow dark:border-none dark:bg-slate-800">
          <div className="flex h-full flex-col justify-between">
            <div>product summery</div>
            <div className="font-bold">total: </div>
          </div>
          <button className="rounded-md border border-slate-300 bg-slate-200 py-1.5 px-3 text-center font-bold shadow-sm hover:border-sky-500 hover:!text-sky-500 dark:border-slate-600 dark:bg-slate-700 dark:hover:border-sky-500">
            continue the order
          </button>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
