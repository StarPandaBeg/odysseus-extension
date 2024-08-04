import { cn } from "@/lib/utils";
import { LayoutGridIcon } from "lucide-react";
import { useState } from "preact/hooks";
import { Button } from "../ui/button";

export default function PageHeader() {
  const [menuOpened, setMenuOpened] = useState(false);

  const animationEndCallback = (e: AnimationEvent) => {
    if (menuOpened) return;
    // @ts-ignore
    e.target.classList.add("hidden");
  };

  return (
    <header className="flex flex-col gap-2">
      <div className="flex justify-between">
        <Button className="bg-yellow-600">Проксируется (3/0/0/0)</Button>
        <Button
          variant="ghost"
          buttonSize="icon"
          className={cn(menuOpened && "bg-secondary")}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <LayoutGridIcon
            className={cn("transition", menuOpened && "rotate-45")}
          />
        </Button>
      </div>
      <ul
        className={cn(
          "my-2 flex justify-center gap-2 flex-wrap",
          menuOpened && "animate-in fade-in",
          !menuOpened && "animate-out fade-out"
        )}
        onAnimationEnd={animationEndCallback}
      >
        <li className="p-2 py-1 bg-secondary rounded border border-black">
          Статус
        </li>
        <li className="p-2 py-1 bg-secondary rounded">Исключения</li>
        <li className="p-2 py-1 bg-secondary rounded">Прокси</li>
        <li className="p-2 py-1 bg-secondary rounded">DPI</li>
      </ul>
    </header>
  );
}
