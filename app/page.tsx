import Squares from "@/components/Squarebackground";

export default function Home() {
  return (
    <main>
      <div>
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#222"
        />
        <h1>Hello World</h1>
      </div>
    </main>
  );
}
