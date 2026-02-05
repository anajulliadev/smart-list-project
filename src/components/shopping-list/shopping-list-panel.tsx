"use client";

import { ShoppingCart, Trash2 } from "lucide-react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { formatedTotal } from "@/src/helpers/formated-data";
import { Input } from "../ui/input";
import { useListStore } from "@/src/store/list-store";
import { Checkbox } from "@/components/ui/checkbox";

export function ShoppingListPanel() {
  const items = useListStore((s) => s.items);
  const removeItem = useListStore((s) => s.removeItem);
  const updateItem = useListStore((s) => s.updateItem);
  const checkedItem = useListStore((s) => s.checkedItem);

  return (
    <Card>
      {/* titulo e o input com o botao de mais */}
      <CardTitle className="flex gap-3 font-bold text-cyan-700 px-4">
        <ShoppingCart /> Lista de Compras{" "}
      </CardTitle>
      <CardContent>
        <ul>
          {items.map((item, index) => {
            const total = (item.unityPrice ?? 0) * (item.quantity ?? 0);

            return (
              <li key={item.id} className="border-b py-4">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-sm text-gray-600">
                      Item {index + 1}
                    </p>
                    <p className="font-bold py-2">{item.text}</p>
                  </div>
                  <div className="flex items-center ">
                    <div className="mr-2 p-2 border rounded-md">
                      <Checkbox
                        checked={item.checked}
                        onClick={() => checkedItem(item.id)}
                      />
                    </div>

                    <Button
                      variant={"destructive"}
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center flex-col sm:flex-row gap-2">
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Quantidade</p>

                    <Input
                      type="number"
                      min={1}
                      step={1}
                      value={item.quantity ?? 1}
                      onChange={(e) =>
                        updateItem(item.id, {
                          quantity: Math.max(
                            1,
                            parseInt(e.target.value || "1", 10),
                          ),
                        })
                      }
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Preço Unitário</p>

                    <Input
                      type="number"
                      min={0}
                      step={0.01}
                      value={item.unityPrice ?? 0}
                      onChange={(e) =>
                        updateItem(item.id, {
                          unityPrice: Math.max(
                            0,
                            parseFloat(e.target.value ?? "0"),
                          ),
                        })
                      }
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Preço Total</p>
                    <Button variant={"secondary"} className="w-full">
                      {formatedTotal(total)}
                    </Button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
