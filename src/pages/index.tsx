import Footer from "../components/Footer";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

export default function Homepage() {
  return (
    <div className="grid h-full grid-rows-[55px_auto_44px] px-4 pb-2 pt-4 md:px-8 md:pb-4 md:pt-6">
      <Header />
      <div className="h-full w-full overflow-y-auto rounded-md">
        <Carousel images={7} />
      </div>
      <Footer />
    </div>
  );
}
