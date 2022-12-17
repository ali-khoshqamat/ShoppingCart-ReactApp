import CheckoutDetails from "../components/CheckoutDetails";
import User from "../components/User";

const CheckOutPage = () => {
  return (
    <main className="px-2.5">
      <h2 className="p-5 text-center text-xl font-bold">CheckOut Page</h2>
      <div className="container mx-auto flex w-full gap-x-5 p-5 xl:max-w-screen-xl">
        <section className="w-full basis-3/4">
          <User />
        </section>
        <section className="w-full basis-1/4">
          <CheckoutDetails />
        </section>
      </div>
    </main>
  );
};

export default CheckOutPage;
