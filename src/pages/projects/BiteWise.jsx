import demo from "../../assets/bitewise-demo.mp4";
import ui1 from "../../assets/bitewise-ui-1.png";
import ui2 from "../../assets/bitewise-ui-2.png";
import ui3 from "../../assets/bitewise-ui-3.png";
import ui4 from "../../assets/bitewise-ui-4.png";
import ui5 from "../../assets/bitewise-ui-5.png";
import ui6 from "../../assets/bitewise-ui-6.png";

export default function BiteWise() {
  const images = [ui1, ui2, ui3, ui4, ui5, ui6];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">BiteWise</h1>
      <p className="mt-4 text-zinc-400 max-w-3xl">
        A web application designed to help users with complex or overlapping dietary restrictions confidently discover safe and inclusive meal options. 
        BiteWise combines multi-restriction recipe filtering, AI-powered assistance, and location-based restaurant recommendations 
        using the Edamam and Overpass APIs. Built with React, Node.js/Express, and MongoDB, the system supports secure user authentication (JWT), 
        personalized profiles, and recipe management. The platform emphasizes accessibility, cultural inclusivity, 
        and user-driven features like saving favorites, adding recipes, and receiving tailored meal suggestions.
      </p>
    
    <div className="mt-6 flex flex-wrap gap-2 text-xs">
    {[
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Edamam API",
        "Overpass API",
        "MongoDB",
    ].map((tag) => (
        <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-300"
        >
            {tag}
        </span>
        ))}
    </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold">Demo</h2>
        <video className="mt-4 w-full rounded-xl border border-white/10" src={demo} controls playsInline />
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-zinc-200">What I did</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-400 list-disc pl-5">
            <li>Integrated Edamam recipes + nutrition with filtering.</li>
            <li>Used Overpass to pull nearby location-based results from OpenStreetMap data.</li>
            <li>Stored saved results in MongoDB for persistence across sessions.</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold">Designing before Building</h2>
        <p className="mt-2 text-zinc-400 text-sm">Figma-based UI flows mapped to production-ready Tailwind components.
</p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`BiteWise screen ${i + 1}`}
              className="rounded-xl border border-white/10 hover:scale-[1.02] transition"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
