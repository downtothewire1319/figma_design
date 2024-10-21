import Hero from "./section/Hero";
import CoreTracks from "./section/CoreTracks";
import SpecializedTracks from "./section/SpecializedTracks";
import Outcome from "./section/Outcome";

export default function Home() {
  return (
    <>
      <main>


        {/* hero section */}
        <Hero />
        <CoreTracks/>
        <SpecializedTracks/>
        <Outcome/>
      </main>
    </>
  );
}
