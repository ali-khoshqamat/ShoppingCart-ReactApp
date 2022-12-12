import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart, useCartActions } from "../Providers/CartProvider";
import { checkInCart } from "../utils/checkInCart";

const Product = ({ product }) => {
  const { cart } = useCart();
  const dispatch = useCartActions();

  const addProductHandler = (product) => {
    if (!checkInCart(cart, product)) {
      dispatch({ type: "ADD_TO_CART", payload: product });
      toast.success(`${product.name} Added to Cart :)`);
    }
  };

  return (
    <li className="flex flex-col items-center rounded-2xl bg-slate-100 pb-2.5 text-sm shadow dark:bg-slate-800">
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
        <div className="flex gap-x-2">
          <p className="font-bold text-slate-300 line-through dark:text-slate-500">
            ${product.price}
          </p>
          <p className="font-bold">${product.offPrice}</p>
        </div>
      </div>

      {checkInCart(cart, product) ? (
        <Link to="/checkout" className="text-sky-500">
          <button
            onClick={() => addProductHandler(product)}
            className="rounded-md border border-slate-300 bg-slate-200 py-1 px-3 text-center font-bold shadow-sm hover:border-sky-500 hover:!text-sky-500 dark:border-slate-600 dark:bg-slate-700 dark:hover:border-sky-500"
          >
            Continue Order
          </button>
        </Link>
      ) : (
        <button
          onClick={() => addProductHandler(product)}
          className="rounded-md border border-slate-300 bg-slate-200 py-1 px-3 text-center font-bold shadow-sm hover:border-sky-500 hover:!text-sky-500 dark:border-slate-600 dark:bg-slate-700 dark:hover:border-sky-500"
        >
          Add to Cart
        </button>
      )}
    </li>
  );
};

export default Product;
