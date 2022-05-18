import Footer from "../components/Footer";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

export default function Homepage() {
  return (
    <div className="grid grid-rows-[55px_auto_44px] h-full px-4 pt-4 pb-2 md:px-8 md:pt-6 md:pb-4">
      <Header />
      <div className="w-full h-full overflow-y-auto rounded-md">
        <Carousel images={28} />
      </div>
      <Footer />
    </div>
  );
}
