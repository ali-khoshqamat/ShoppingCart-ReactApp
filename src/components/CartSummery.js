import { useCart } from "../Providers/CartProvider";

const CartSummery = () => {
  const { cart, total } = useCart();

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const totalOffPrice = cart.reduce(
    (acc, curr) => acc + curr.offPrice * curr.quantity,
    0
  );

  return (
    <div className="flex flex-col justify-between gap-y-5 rounded-2xl border bg-slate-100 p-5 font-bold shadow dark:border-none dark:bg-slate-800">
      <div className="flex h-full flex-col gap-y-5">
        <h2 className="">Cart Summery</h2>
        <div className="h-full space-y-1.5">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between font-normal"
            >
              <div className="space-x-1.5">
                <span>{product.quantity}</span>
                <span>{product.name}</span>
              </div>
              <div>$ {product.offPrice * product.quantity}</div>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          <div className="mb-2 flex justify-between border-t pt-1 font-normal dark:border-t-slate-700">
            <div>
              {total} {total > 1 ? "discounts" : "discount"}
            </div>
            <div className="font-bold text-green-700">
              $ {totalPrice - totalOffPrice}
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="self-end">net total price:</div>
            <div className="text-end">
              <div className="text-slate-400 line-through dark:text-slate-500">
                $ {totalPrice}
              </div>
              <div className="text-sky-500">$ {totalOffPrice}</div>
            </div>
          </div>
        </div>
      </div>
      <button className="rounded-md border border-slate-300 bg-slate-200 py-1.5 px-3 text-center font-bold text-sky-500 shadow-sm hover:border-sky-500 dark:border-slate-600 dark:bg-slate-700 dark:hover:border-sky-500">
        Continue Order
      </button>
    </div>
  );
};

export default CartSummery;
