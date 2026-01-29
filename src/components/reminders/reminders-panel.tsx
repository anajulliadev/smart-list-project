import { ListTodo, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type mockListProps = {
  id: number;
  text: string;
};

const mockList: mockListProps[] = [
  { id: 1, text: "Comprar leite" },
  { id: 2, text: "Comprar pão" },
  { id: 3, text: "Comprar ovos" },
];

export function RemindersPanel() {
  return (
    <Card>
      {/* titulo e o input com o botao de mais */}
      <CardTitle className="flex gap-3 font-bold text-cyan-700 px-4">
        <ListTodo /> Lembretes de Produtos{" "}
      </CardTitle>
      <CardContent className="flex gap-3">
        <Input placeholder="Digite um lembrete de item aqui" />
        <Button>
          <Plus />
        </Button>
      </CardContent>
      {/* lista de lembretes */}
      <CardContent>
        <ul>
          {mockList.map((item) => (
            <li key={item.id} className="border-b py-2">
              <div className="flex justify-between flex-col sm:flex-row">
                <div>
                  <p className="font-medium text-sm text-gray-600">
                    Item {item.id}
                  </p>
                  <p className="font-bold py-2">{item.text}</p>
                </div>
                <div className="flex items-center gap-2 justify-end ">
                  <Button
                    variant="outline"
                    className="text-cyan-700 dark:text-cyan-400"
                  >
                    <ShoppingCart /> Adicionar
                  </Button>
                  <Button variant={"destructive"}>
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
