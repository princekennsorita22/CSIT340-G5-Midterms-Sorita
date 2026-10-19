import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Stats from "./components/Stats";
import Features from "./components/Features";


function App() {
  const [stars, setStars] = useState(0);
  const [downloads, setDownloads] = useState(0);
  const [issues, setIssues] = useState(5);

  function handleStar() {
    setStars(stars + 1);
  }

  function handleDownload() {
    setDownloads(downloads + 1);
  }

  function handleReport() {
    setIssues(issues + 1);
  }

  function handleReset() {
    setStars(0);
    setDownloads(0);
    setIssues(5);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FFF9F2] text-[#800020]">
      <Navbar />

      <Hero
        stars={stars}
        downloads={downloads}
        issues={issues}
        handleStar={handleStar}
        handleDownload={handleDownload}
        handleReport={handleReport}
        handleReset={handleReset}
      />

      <Stats />

      <Intro author="Prince Kenn Sorita" />

      <Features />

      <footer className="mt-auto bg-[#F3E6D5] px-20 py-6 text-center text-xl">
        <p>Maroon UI is free and open source.</p>
      </footer>
    </div>
  );
}

export default App;