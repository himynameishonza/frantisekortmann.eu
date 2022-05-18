import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Page404() {
  return (
    <div className="grid grid-rows-[40px_auto_28px] h-full px-4 pt-4 pb-2 md:px-8 md:pt-6 md:pb-4">
      <Header />
      <div className="w-full min-h-max overflow-hidden gap-5">
        <div className="flex items-center justify-center bg-gray-50 rounded-md h-full text-slate-300 text-xl">
          Omlouváme se, ale požadovaná stránka neexistuje
        </div>
      </div>
      <Footer />
    </div>
  );
}
