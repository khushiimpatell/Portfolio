import z1 from "../../assets/zeuty-ui-1.png";
import z2 from "../../assets/zeuty-ui-2.png";
import z3 from "../../assets/zeuty-ui-3.png";

export default function Zeuty() {
  const images = [z1, z2, z3];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">Zeuty</h1>
      <p className="mt-4 text-zinc-400 max-w-3xl">
        Brief description of Zeuty (what it is + what you built).
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`Zeuty screen ${i + 1}`} className="rounded-xl border border-white/10" />
        ))}
      </div>
    </main>
  );
}
