import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import LeftAside from "../components/Homelayout/LeftAside";

import Boxes from "../components/Boxes";
import Reviews from "../components/Reviews";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <nav className="mb-5">
          <Header></Header>
        </nav>
        <Banner></Banner>
      </header>
 <main className="w-full max-w-7xl mx-auto px-4 py-6">
  {/* Mobile Tab Bar */}
  <div className="lg:hidden flex overflow-x-auto gap-2 mb-4 border-b pb-2">
    {/* Replace with actual tab buttons/logic */}
    <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">Tab 1</button>
    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">Tab 2</button>
    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">Tab 3</button>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
    {/* Vertical Tabs (Sidebar) */}
    <aside className="hidden lg:block lg:col-span-3 sticky top-4 self-start">
      <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col gap-4">
        <LeftAside />
      </div>
    </aside>

    {/* Main Content */}
    <section className="col-span-1 lg:col-span-9">
      <div className="bg-white shadow-2xl rounded-xl p-6 min-h-[300px] transition-all duration-300">
        {state === "loading" ? <Loading /> : <Outlet />}
      </div>
    </section>
  </div>
</main>

      <section>
        <Boxes></Boxes>
        <Reviews></Reviews>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
