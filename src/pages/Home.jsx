import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";

export default function Home() {
  const projects = [
    { name: "BiteWise", to: "/projects/bitewise", desc: "An inclusive food discovery app that empowers users with complex dietary needs to  safe, confident, and culturally aware meal choices." },
    { name: "Zeuty", to: "/projects/zeuty", desc: "User Inferface for Zeuty" },
    { name: "Untitled", to: "/projects/untitled", desc: "Coming soon" },
  ];

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-2 text-zinc-400">Click a project to learn more.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">{p.desc}</p>
              <div className="mt-4 text-sky-400 text-sm">View →</div>
            </Link>
          ))}
        </div>
      </section>

      <Skills />
      <Contact />
    </>
  );
}
