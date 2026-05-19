import Header from "./component/header"; 
import Footer from "./component/footer";
import { Hero, Benefits, Steps, Testimonials, CTA } from "./home-components";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Steps />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
