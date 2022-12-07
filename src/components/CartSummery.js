import { useCart } from "../Providers/CartProvider";

const CartSummery = () => {
  const { cart, total } = useCart();

  return (
    <div className="flex flex-col justify-between gap-y-5 rounded-2xl border bg-slate-100 p-5 font-bold shadow dark:border-none dark:bg-slate-800">
      <div className="flex h-full flex-col gap-y-5">
        <h2 className="">Cart Summery</h2>
        <div className="h-full space-y-1.5">
          {cart.map((product) => (
            <div key={product.id} className="space-x-1.5 font-normal">
              <span>{product.quantity}</span>
              <span>{product.name}</span>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          <div className="border-t pt-1">
            {total} {total > 1 ? "products" : "product"}
          </div>
          <div className="flex justify-between ">
            <div>total price:</div>
            <div className="text-sky-500">
              $ {cart.reduce((acc, crr) => acc + crr.price * crr.quantity, 0)}
            </div>
          </div>
        </div>
      </div>
      <button className="rounded-md border border-slate-300 bg-slate-200 py-1.5 px-3 text-center font-bold shadow-sm hover:border-sky-500 hover:!text-sky-500 dark:border-slate-600 dark:bg-slate-700 dark:hover:border-sky-500">
        continue the order
      </button>
    </div>
  );
};

export default CartSummery;
