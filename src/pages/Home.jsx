import Hero from "../components/Hero";
import Projects from "../components/Projects";


export default function Home() {
  return (
    <div className="container flex flex-col mx-auto items-center justify-center px-4 py-20">
        <Hero />
        <Projects />
    </div>
  )
}
