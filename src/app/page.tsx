import Services from "@/components/services";
import About from "@/components/about";

export default function Home() {
  return (
    <section className="flex flex-col gap-12">
      <Services />
      <About />
    </section>
  );
}
