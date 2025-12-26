import demo from "../assets/bitewise-demo.mp4";
import ui1 from "../assets/bitewise-ui-1.png";
import ui2 from "../assets/bitewise-ui-2.png";
import ui3 from "../assets/bitewise-ui-3.png";
import ui4 from "../assets/bitewise-ui-4.png";
import ui5 from "../assets/bitewise-ui-5.png";
import ui6 from "../assets/bitewise-ui-6.png";


export default function FeaturedProject() {
  return (
    <section id="bitewise" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="mt-2 text-zinc-400">
            Projects integrating real APIs, persistent data, and scalable frontend architecture.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl font-semibold">BiteWise</h3>
            <span className="text-xs text-zinc-400">React • Tailwind • MongoDB</span>
          </div>

          <p className="mt-4 text-zinc-400">
            An inclusive food discovery app that empowers users with complex dietary needs to 
            make safe, confident, and culturally aware meal choices.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            {["Edamam API", "Overpass API", "MongoDB", "React.js", "Tailwind"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>

          <video
            className="mt-6 w-full rounded-xl border border-white/10"
            src={demo}
            controls
            playsInline
            preload="metadata"
          />   
          <div className="mt-6 flex gap-4 text-sm">
            <a className="text-sky-400 hover:underline" href="#" target="_blank" rel="noopener">
              Live Demo
            </a>
            <a className="text-sky-400 hover:underline" href="#" target="_blank" rel="noopener">
              GitHub
            </a>
          </div>
          <div className="mt-6">
            <h5 className="text-sm font-semibold text-zinc-200">What I did</h5>
            <ul className="mt-2 space-y-2 text-sm text-zinc-400 list-disc pl-5">
              <li>Integrated Edamam recipes + nutrition with filtering.</li>
              <li>Used Overpass to pull nearby location-based results from OpenStreetMap data.</li>
              <li>Stored saved results in MongoDB for persistence across sessions.</li>
            </ul>
          </div> 
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h4 className="font-semibold">Designing before Building</h4>
          <p className="mt-2 text-zinc-400 text-sm">
            Figma-based UI flows mapped to production-ready Tailwind components.
          </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[ui1, ui2, ui3, ui4, ui5, ui6].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`BiteWise UI ${i + 1}`}
              className="rounded-xl border border-white/10 hover:scale-[1.02] transition"
            />
          ))}
        </div>

        </div>
      </div>
    </section>
  );
}
