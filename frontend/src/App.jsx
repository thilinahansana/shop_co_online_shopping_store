import Brands from "./components/Brands/Brands";
import DressStyle from "./components/DressStyle/DressStyle";
import Footer from "./components/Footer/Footer";
import HappyCustomers from "./components/HappyCustomers/HappyCustomers";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import Newsletter from "./components/Newsletter/Newsletter";
import TopSelling from "./components/TopSelling/TopSelling";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <HappyCustomers />
      <Newsletter />
      <Footer />
    </div>
  );
}
