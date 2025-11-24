import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Experience from "@/components/Experience";
import HeaderSection from "@/components/HeaderSection";
import Project from "@/components/Project";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <About />
      <Project />
      <Experience />
      <ContactUs />
    </>
  );
}
