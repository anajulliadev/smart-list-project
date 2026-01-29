import Header from "../components/header/header";
import { RemindersPanel } from "../components/reminders/reminders-panel";
import { ShoppingListPanel } from "../components/shopping-list/shopping-list-panel";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 sm:max-w-4xl  px-10 mx-auto mb-10">
        <RemindersPanel />
        <ShoppingListPanel />
      </div>
    </div>
  );
}
