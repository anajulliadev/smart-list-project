export type ShoppingItem = {
  id: number;
  text: string;
  unityPrice?: number;
  quantity?: number;
  checked?: boolean;
};

export type Reminder = {
  id: number;
  text: string;
};
