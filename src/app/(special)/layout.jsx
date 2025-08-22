import Footer from "@/components/ui/navigation-bar";
import Header from "@/components/ui/header";


export default function RootLayout({ children }) {
  return (
    <>
      <Header transparent={true} />
      {children}
      <Footer />
    </>
  );
}
