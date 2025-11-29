import ScourgeAguility from "../../components/scourge-agility/page";
import ScourgeIntel from "../../components/scourge-intel/page";
import ScourgeStrength from "../../components/scourge-strength/page";
import SentinelAguility from "../../components/sentinel-aguility/page";
import SentinelIntel from "../../components/sentinel-intel/page";
import SentinelStrength from "../../components/sentinel-strength/page";


export default function Home() {
  return (
    <div dir="ltr" className="flex flex-col p-[4px]">

      <div className="flex flex-wrap h-[180px]  border-[2px]">
        <SentinelStrength />
      </div>

      <div className="flex flex-wrap h-[180px]  border-[2px]">
        <SentinelAguility />
      </div>

      <div className="flex flex-wrap h-[180px]  border-[2px]">
        <SentinelIntel />
      </div>

      <div className="flex flex-wrap h-[180px]  border-[2px]">
        <ScourgeStrength />
      </div>

      <div className="flex flex-wrap h-[180px]  border-[2px]">
        <ScourgeAguility />
      </div>

      <div className="flex flex-wrap h-[180px]  border-[2px]">
        <ScourgeIntel />
      </div>

    
    </div>
  );
}
