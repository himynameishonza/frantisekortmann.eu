import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageGrid from "../components/ImageGrid";

export default function People() {
  return (
    <div className="grid h-full grid-rows-[auto_auto_auto] px-4 pb-2 pt-4 md:px-8 md:pb-4 md:pt-6">
      <Header title="People" active={3} />
      <div className="w-full overflow-y-auto">
        <ImageGrid folder="people" images={50} />
      </div>
      <Footer />
    </div>
  );
}
