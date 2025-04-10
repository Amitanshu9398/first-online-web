import GooeyNav from "@/components/navbar";
import Squares from "@/components/Squarebackground";

export default function Home() {
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];
  return (
    <main className="relative h-screen w-full">
      <nav style={{ position: "relative" }}>
        <GooeyNav
          items={items}
          animationTime={600}
          pCount={15}
          minDistance={20}
          maxDistance={42}
          maxRotate={75}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          timeVariance={300}
        />
      </nav>
      <div className="absolute top-0 left-0 w-full h-full z-[-10]">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#353E43"
          hoverFillColor="#222"
        />
      </div>

      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-white text-4xl">Hello World</h1>
      </div>

      <div className="h-screen w-full bg-zinc-950"></div>
    </main>
  );
}
