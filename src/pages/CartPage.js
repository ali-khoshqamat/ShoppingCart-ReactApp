import Cart from "../components/Cart";
import CartSummery from "../components/CartSummery";
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
          <Cart key={product.id} product={product} />
        ))}
      </section>
      <section className="w-full basis-1/4">
        <CartSummery />
      </section>
    </main>
  );
};

export default CartPage;
