import Header from "@/components/ui/header";
import Footer from "@/components/ui/navigation-bar";

export default function RootLayout({ children }) {
  return (
    <div className="px-5">
      <Header />
      <main className="py-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}