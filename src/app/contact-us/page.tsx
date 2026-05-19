import Header from "../component/header";
import Footer from "../component/footer";
import { ContactUsContent } from "./contact-components";

export default function ContactUsMenu() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ContactUsContent />
      <Footer />
    </div>
  );
}
