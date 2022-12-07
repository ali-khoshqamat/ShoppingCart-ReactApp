import CartSummery from "../components/CartSummery";
import Order from "../components/Order";
import { useCart } from "../Providers/CartProvider";

const CartPage = () => {
  const { cart } = useCart();

  return !cart.length ? (
    <main className="text-center">
      <h2 className="p-5 text-xl font-bold">Shopping Cart</h2>
      <h2>Cart is Empty!</h2>
    </main>
  ) : (
    <main className="px-2.5">
      <h2 className="p-5 text-center text-xl font-bold">Shopping Cart</h2>
      <div className="container mx-auto flex w-full gap-x-5 p-5 xl:max-w-screen-xl">
        <section className="w-full basis-3/4 space-y-5">
          {cart.map((product) => (
            <Order key={product.id} product={product} />
          ))}
        </section>
        <section className="w-full basis-1/4">
          <CartSummery />
        </section>
      </div>
    </main>
  );
};

export default CartPage;
