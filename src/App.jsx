import { useState } from "react";  
import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero"; 
import Intro from "./components/Intro"; 
import Stats from "./components/Stats"; 
import Features from "./components/Features"; 
import Footer from "./components/Footer"; 
import Contribute from "./components/Contribute";

function App() { const [stars, setStars] = useState(0); const [downloads, setDownloads] = useState(0); const [issues, setIssues] = useState(5); const [contributors, setContributors] = useState(0);

function handleStar() { setStars(stars + 1); }

function handleDownload() { setDownloads(downloads + 1); }

function handleReport() { setIssues(issues + 1); }

function handleReset() { setStars(0); setDownloads(0); setIssues(5); }

function handleGitHub() { setContributors(contributors + 1); }

function handleClear() { setContributors(0); }

return ( <div className="flex min-h-screen flex-col bg-[#FFF9F2] text-[#800020]"> <Navbar />

  <Hero
    stars={stars}
    downloads={downloads}
    issues={issues}
    handleStar={handleStar}
    handleDownload={handleDownload}
    handleReport={handleReport}
    handleReset={handleReset}
  />

  <Stats
    stars={stars}
    downloads={downloads}
    issues={issues}
  />

  <Intro author="Prince Kenn Sorita" />

  <Features />

  <Footer />

  <Contribute
    issues={issues}
    contributors={contributors}
    handleGitHub={handleGitHub}
    handleClear={handleClear}
  />


</div>


); }

export default App;