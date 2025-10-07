import Services from "@/components/services";
import About from "@/components/about";

export default function Home() {
  return (
    <section className="flex flex-col gap-12">
      <div className="w-full h-full relative">
        <img
          src="/banner.png"
          alt="A person working on a computer with multiple monitors"
          className="w-full max-w-7xl h-full mx-auto"
        />
      </div>
      <Services />
      <About />
    </section>
  );
}
