import { ShoppingCart, Trash2 } from "lucide-react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { formatedTotal } from "@/src/helpers/formated-data";
import { Input } from "../ui/input";

type mockListProps = {
  id: number;
  text: string;
  unityPrice?: number;
  quantity?: number;
  totalPrice?: number;
};

const mockList: mockListProps[] = [
  {
    id: 1,
    text: "Comprar leite",
    unityPrice: 4.5,
    quantity: 2,
  },
  {
    id: 2,
    text: "Comprar pão",
    unityPrice: 3.0,
    quantity: 1,
  },
  {
    id: 3,
    text: "Comprar ovos",
    unityPrice: 12.0,
    quantity: 1,
  },
];

export function ShoppingListPanel() {
  return (
    <Card>
      {/* titulo e o input com o botao de mais */}
      <CardTitle className="flex gap-3 font-bold text-cyan-700 px-4">
        <ShoppingCart /> Lista de Compras{" "}
      </CardTitle>
      <CardContent>
        <ul>
          {mockList.map((item) => {
            const total = (item.unityPrice ?? 0) * (item.quantity ?? 0);

            return (
              <li key={item.id} className="border-b py-4">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-sm text-gray-600">
                      Item {item.id}
                    </p>
                    <p className="font-bold py-2">{item.text}</p>
                  </div>
                  <div className="flex items-center ">
                    <Button variant={"destructive"}>
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
                      defaultValue={item.quantity ?? 0}
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-sm text-gray-500">Preço Unitário</p>

                    <Input
                      type="number"
                      min={1}
                      step={1}
                      defaultValue={item.unityPrice ?? 0}
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
