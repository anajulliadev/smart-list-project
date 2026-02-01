"use client";

import { ListTodo, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { useListStore } from "@/src/store/list-store";

export function RemindersPanel() {
  const [text, setText] = useState("");
  const reminders = useListStore((s) => s.reminders);
  const addReminder = useListStore((s) => s.addReminder);
  const removeReminder = useListStore((s) => s.removeReminder);
  const addItemFromReminder = useListStore((s) => s.addItemFromReminder);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    addReminder(value);
    setText("");
  };

  return (
    <Card>
      {/* titulo e o input com o botao de mais */}
      <CardTitle className="flex gap-3 font-bold text-cyan-700 px-4">
        <ListTodo /> Lembretes de Produtos{" "}
      </CardTitle>
      <CardContent className="flex gap-3">
        <form onSubmit={handleSubmit} className=" flex gap-2 w-full">
          <Input
            placeholder="Digite um lembrete de item aqui"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button type="submit">
            <Plus />
          </Button>
        </form>
      </CardContent>
      {/* lista de lembretes */}
      <CardContent>
        <ul>
          {reminders.map((item, index) => (
            <li key={item.id} className="border-b py-2">
              <div className="flex justify-between flex-col sm:flex-row">
                <div>
                  <p className="font-medium text-sm text-gray-600">
                    Item {index + 1}
                  </p>
                  <p className="font-bold py-2">{item.text}</p>
                </div>
                <div className="flex items-center gap-2 justify-end ">
                  <Button
                    variant="outline"
                    className="text-cyan-700 dark:text-cyan-400"
                    onClick={(e) => addItemFromReminder(item.id)}
                  >
                    <ShoppingCart /> Adicionar
                  </Button>
                  <Button
                    variant={"destructive"}
                    onClick={() => removeReminder(item.id)}
                  >
                    <Trash2 />
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
