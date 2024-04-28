import Navbar from "../components/Navbar";
import { orbitron, exo2 } from "./fonts";
import "./globals.css";

export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
  description: "Only the best indie games, reviewed for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="bg-orange-50 px-4 py-2 flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="py-3 flex-1">{children}</main>
        <footer className="text-center text-xs border-t py-3 text-slate-500">
          Game data and images courtesy of{" "}
          <a
            className="text-orange-800 hover:underline"
            href="https://rawg.io/"
            target="_blank"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
