import { create } from "zustand";
import { Reminder, ShoppingItem } from "../types/shopping";
import { persist, createJSONStorage } from "zustand/middleware";

type ListState = {
  reminders: Reminder[];
  items: ShoppingItem[];
  addReminder: (text: string) => void;
  removeReminder: (id: number) => void;

  removeItem: (id: number) => void;
  updateItem: (id: number, data: Partial<ShoppingItem>) => void;

  addItemFromReminder: (reminderId: number) => void;
};

export const useListStore = create<ListState>()(
  persist(
    (set, get) => ({
      //set -> atualiza estado
      //get -> pega estado atual

      //funcoes
      reminders: [],
      items: [],

      addReminder(text: string) {
        const id = Date.now();
        set((state) => ({ reminders: [...state.reminders, { id, text }] }));
      },

      removeReminder(id: number) {
        set((state) => ({
          reminders: state.reminders.filter((item) => item.id !== id),
        }));
      },

      removeItem(id: number) {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      updateItem(id: number, data: Partial<ShoppingItem>) {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, ...data } : item,
          ),
        }));
      },

      addItemFromReminder(reminderId: number) {
        const reminder = get().reminders.find((r) => r.id === reminderId);
        if (!reminder) return;
        const newItem: ShoppingItem = {
          id: Date.now(),
          text: reminder.text,
          quantity: 1,
        };
        set((state) => ({
          items: [...state.items, newItem],
          reminders: state.reminders.filter((r) => r.id !== reminderId),
        }));
      },
    }),
    //nome e onde vai salvar
    {
      name: "list-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
