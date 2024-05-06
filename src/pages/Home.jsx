import {
  CustomerReviews,
  Hero,
  Subscribe,
  PopularProducts,
  Services,
  SpecialOffer,
  SuperQuality,
} from "../home-sections";

const Home = () => {
  return (
    <div>
      {/* These are the components for the App which are being rendered here */}
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding sm:px-10">
        <PopularProducts />
      </section>
      <section className="padding ">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
    </div>
  );
};

export default Home;
