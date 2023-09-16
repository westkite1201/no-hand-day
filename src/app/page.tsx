import useDarkMode from "@hooks/queries/useDarkMode";
import Home from "@views/home";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Home />
    </main>
  );
}
