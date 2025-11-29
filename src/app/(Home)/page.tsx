import AncientOfWonders from "@/src/components/items/Ancient-of-Wonders/page";
import AncientWeaponry from "@/src/components/items/ancient-weaponry/page";
import ArcaneSanctum from "@/src/components/items/arcane-sanctum/page";
import BeggarTodd from "@/src/components/items/beggar-todd/page";
import BlackMarket from "@/src/components/items/black-market/page";
import CacheoftheQuelthelan from "@/src/components/items/Cache-of-the-Quelthelan/page";
import EnchantedArtifacts from "@/src/components/items/enchanted-artifacts/page";
import GatewayRelics from "@/src/components/items/gateway-relics/page";
import GrylaTheAccessorizer from "@/src/components/items/gryla-the-accessorizer/page";
import LeragasTheVile from "@/src/components/items/laregas-the-vile/page";
import ProtecTorate from "@/src/components/items/protec-torate/page";
import SupportiveVestments from "@/src/components/items/supportive-vestments/page";
import TrophyDealer from "@/src/components/items/trophy-dealer/page";
import WeaponsDealer from "@/src/components/items/weapons-dealer/page";
import ScourgeAguility from "@/src/components/scourge-agility/page";
import ScourgeIntel from "@/src/components/scourge-intel/page";
import ScourgeStrength from "@/src/components/scourge-strength/page";
import SentinelAguility from "@/src/components/sentinel-aguility/page";
import SentinelIntel from "@/src/components/sentinel-intel/page";
import SentinelStrength from "@/src/components/sentinel-strength/page";


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

      <div className="flex flex-wrap h-[110px]  border-[2px]">
        <GatewayRelics />
      </div>

      <div className="flex flex-wrap h-[107px]  border-[2px]">
        <SupportiveVestments />
      </div>

      <div className="flex flex-wrap h-[105px]  border-[2px]">
        <ArcaneSanctum />
      </div>

      <div className="flex flex-wrap h-[107px]  border-[2px]">
        <ProtecTorate />
      </div>

      <div className="flex flex-wrap h-[106px]  border-[2px]">
        <EnchantedArtifacts />
      </div>

      <div className="flex flex-wrap h-[107px]  border-[2px]">
        <AncientWeaponry />
      </div>

      <div className="flex flex-wrap h-[105px]  border-[2px]">
        <GrylaTheAccessorizer />
      </div>

      <div className="flex flex-wrap h-[105px]  border-[2px]">
        <WeaponsDealer />
      </div>

      <div className="flex flex-wrap h-[105px]  border-[2px]">
        <CacheoftheQuelthelan />
      </div>

      <div className="flex flex-wrap h-[66px]  border-[2px]">
        <AncientOfWonders />
      </div>

      <div className="flex flex-wrap h-[65px]  border-[2px]">
        <BlackMarket />
      </div>

      <div className="flex flex-wrap h-[120px]  border-[2px]">
        <TrophyDealer />
      </div>

      <div className="flex flex-wrap h-[108px]  border-[2px]">
        <BeggarTodd />
      </div>

      <div className="flex flex-wrap h-[107px]  border-[2px]">
        <LeragasTheVile />
      </div>
    </div>
  );
}
