import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageGrid from "../components/ImageGrid";

export default function Detail() {
  return (
    <div className="grid h-full grid-rows-[auto_auto] px-4 pb-2 pt-4 md:px-8 md:pb-4 md:pt-6">
      <Header title="Detail" active={2} />
      <div className="w-full overflow-y-auto">
        <ImageGrid folder="detail" images={30} />
      </div>
      <Footer />
    </div>
  );
}
