import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { StudioSection } from "@/components/StudioSection";
import { InquiryForm } from "@/components/InquiryForm";
import { Footer } from "@/components/Footer";

const LandingPage = () => {
  return (
    <div data-testid="landing-page">
      {/* SEO: visually hidden but crawlable heading */}
      <h1 className="sr-only">
        Sabadinnk — Bruna Sabadin | Delicate Fineline & Ornamental Tattoo Artist in Porto, Portugal
      </h1>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <StudioSection />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="bottom-right"
        theme="light"
        toastOptions={{
          style: {
            fontFamily: '"Mulish", sans-serif',
            fontSize: '14px',
          },
        }}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
