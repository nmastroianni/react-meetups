import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-rose-50">
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
