import { useMemo } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { HandCoins, ListTodo, SquarePen } from "lucide-react";
import { formatedTotal } from "@/src/helpers/formated-data";

type StatsCardsProps = {
  remindersCount: number;
  itemsCount: number;
  total: number;
};

export function StatsCards({
  remindersCount,
  itemsCount,
  total,
}: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:gap-6 sm:grid-cols-3  w-full sm:max-w-4xl  px-10">
      <Card className="p-4">
        <CardTitle className="text-gray-500 flex items-center gap-2 text-sm">
          <SquarePen size={18} /> Lembretes
        </CardTitle>
        <CardContent className="flex justify-center items-center font-bold text-xl">
          {remindersCount}
        </CardContent>
      </Card>
      <Card className="p-4">
        <CardTitle className="text-gray-500 flex items-center gap-2 text-sm">
          <ListTodo size={18} /> Itens da Lista
        </CardTitle>
        <CardContent className="flex justify-center items-center font-bold text-xl">
          {remindersCount}
        </CardContent>
      </Card>
      <Card className="p-4">
        <CardTitle className="text-gray-500 flex items-center gap-2 text-sm">
          <HandCoins size={18} /> Total Estimado
        </CardTitle>
        <CardContent className="flex justify-center items-center font-bold text-xl">
          {formatedTotal(total)}
        </CardContent>
      </Card>
    </div>
  );
}
