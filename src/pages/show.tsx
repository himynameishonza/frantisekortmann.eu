import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageGrid from "../components/ImageGrid";

export default function Show() {
  return (
    <div className="grid grid-rows-[auto_auto_auto] h-full px-4 pt-4 pb-2 md:px-8 md:pt-6 md:pb-4">
      <Header title="Show" active={4} />
      <div className="w-full overflow-y-auto">
        <ImageGrid folder="show" images={166} />
      </div>
      <Footer />
    </div>
  );
}
