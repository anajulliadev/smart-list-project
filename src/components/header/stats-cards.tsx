"use client";

import { useMemo } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { HandCoins, ListTodo, SquarePen } from "lucide-react";
import { formatedTotal } from "@/src/helpers/formated-data";
import { useListStore } from "@/src/store/list-store";

export function StatsCards() {
  const remindersCount = useListStore((s) => s.reminders.length);
  const items = useListStore((s) => s.items);
  const itemsCount = useListStore((s) => s.items.length);

  const total = useMemo(
    () =>
      items.reduce(
        (acc, it) => acc + (it.unityPrice ?? 0) * (it.quantity ?? 0),
        0,
      ),

    [items],
  );

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
          {itemsCount}
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
