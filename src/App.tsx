import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

const siteUrl = "https://techkingbingo.com";

const pageMeta = {
  "/": {
    title: "TechKing Bingo | Web Design, Branding & Digital Growth",
    description:
      "TechKing Bingo builds modern websites, branding, e-commerce platforms, and digital growth systems for businesses in Ghana and beyond.",
  },
  "/services": {
    title: "Services | TechKing Bingo",
    description:
      "Explore website design, branding, SEO, e-commerce, booking systems, and digital marketing services from TechKing Bingo.",
  },
  "/booking": {
    title: "Book a Free Consultation | TechKing Bingo",
    description:
      "Book a discovery call with TechKing Bingo for web design, branding, and digital solutions tailored to your business.",
  },
  "/shop": {
    title: "Shop Packages | TechKing Bingo",
    description:
      "Review web packages and digital service bundles from TechKing Bingo for startups, SMEs, and growing brands.",
  },
  "/about": {
    title: "About TechKing Bingo | Our Mission & Vision",
    description:
      "Learn about TechKing Bingo, our mission, values, and the strategy behind our digital growth and website design work.",
  },
  "/contact": {
    title: "Contact TechKing Bingo",
    description:
      "Get in touch with TechKing Bingo for website design, branding, SEO, and business growth services.",
  },
  "/admin": {
    title: "Admin | TechKing Bingo",
    description: "Admin area for business operations and internal management at TechKing Bingo.",
  },
} as const;

function SeoMeta() {
  const location = useLocation();
  const currentPath = location.pathname;
  const meta = pageMeta[currentPath as keyof typeof pageMeta] ?? pageMeta["/"];

  useEffect(() => {
    document.title = meta.title;

    const setMeta = (selector: string, value: string, attr: "name" | "property" = "name") => {
      const selectorString = `meta[${attr}="${selector}"]`;
      let tag = document.head.querySelector(selectorString) as HTMLMetaElement | null;

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, selector);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", value);
    };

    setMeta("description", meta.description);
    setMeta("keywords", "TechKing Bingo, website design Ghana, web development company, branding agency, business websites, e-commerce website, SEO services, digital marketing");
    setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMeta("og:title", meta.title, "property");
    setMeta("og:description", meta.description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", `${siteUrl}${currentPath}`, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);

    let canonical = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${siteUrl}${currentPath}`;
  }, [currentPath, meta]);

  return null;
}

function AppShell() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
      return;
    }

    const onLoad = () => setLoading(false);
    window.addEventListener("load", onLoad);

    const timeoutId = window.setTimeout(() => setLoading(false), 1500);

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(timeoutId);
    };
  }, []);

  if (loading) {
    return (
      <div className="app-loader-overlay">
        <div className="loader" />
      </div>
    );
  }

  return (
    <>
      <SeoMeta />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}
