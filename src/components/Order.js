import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";

const Order = ({ product }) => {
  const dispatch = useDispatch();

  const incrementHandler = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} Added :)`);
  };
  const decrementHandler = (product) => {
    dispatch(removeFromCart(product));
    product.quantity > 1
      ? toast.error(`${product.name} was Removed!`)
      : toast.error(`${product.name} was Deleted!`);
  };

  return (
    <div className="flex max-h-80 rounded-2xl border bg-slate-100 shadow dark:border-none dark:bg-slate-800">
      <div className="aspect-w-12 aspect-h-[3.2] basis-4/12">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-l-2xl object-cover"
        />
      </div>

      <div className="flex basis-8/12 items-center justify-between py-7 px-10 ">
        <div className="flex h-full flex-col">
          <h2 className="mb-5 text-lg font-bold">{product.name}</h2>
          <div className="flex flex-col gap-y-1">
            {product.description.map((item, index) => (
              <p key={index}>- {item.support}</p>
            ))}
          </div>
        </div>

        <div className="flex h-full flex-col justify-between gap-y-2">
          <div className="self-end">
            <h2 className="text-lg font-bold text-slate-400 line-through dark:text-slate-500">
              $ {product.price * product.quantity}
            </h2>
            <h2 className="text-lg font-bold">
              $ {product.offPrice * product.quantity}
            </h2>
          </div>
          <div className="flex items-center gap-x-4">
            <button
              onClick={() => decrementHandler(product)}
              className="rounded-md border border-slate-300 bg-slate-200 py-1 px-3 text-center font-bold shadow-sm hover:border-red-600 hover:!text-red-600 dark:border-slate-600 dark:bg-slate-700 dark:hover:border-red-600"
            >
              {product.quantity === 1 ? (
                <FaTrash className="my-1 mx-3 text-red-600" />
              ) : (
                "Remove"
              )}
            </button>
            <p className="text-lg font-bold">{product.quantity}</p>
            <button
              onClick={() => incrementHandler(product)}
              className="rounded-md border border-sky-500 bg-sky-500 py-1 px-3.5 font-bold text-slate-100 shadow-sm hover:ring-2 hover:ring-sky-500 hover:ring-offset-1 dark:border-sky-600 dark:bg-sky-600 dark:ring-offset-slate-800 dark:hover:ring-sky-600"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
