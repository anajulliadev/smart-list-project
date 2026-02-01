import { ShoppingCart } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Separator } from "../ui/separator";
import { StatsCards } from "./stats-cards";

export default function Header() {
  return (
    <div className="flex flex-col gap-4 items-center my-10">
      {/* mode-togger */}
      <ModeToggle />
      {/* logo */}
      <div className="bg-cyan-600 w-fit text-white dark:text-black px-4 py-6 flex items-center flex-col rounded-xl">
        <ShoppingCart size={24} />
        <p className="font-medium pt-2">Smart List</p>
      </div>
      <div>
        <p className="font-medium">Sua lista de compras rápida e prática</p>
      </div>
      {/* cards de estatisticas basicas */}
      <StatsCards itemsCount={2} total={2} remindersCount={2} />
      <Separator className="max-w-5xl" />
    </div>
  );
}
