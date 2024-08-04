import Switch from "@/components/ui/switch";
import Hint from "@/components/util/hint";
import { cn } from "@/lib/utils";
import { CircleXIcon } from "lucide-react";
import { ReactNode } from "react";

function SwitchBlock() {
  return (
    <ul className="w-full space-y-3">
      <SwitchRow
        title="Прокси"
        tooltip="Проксирование веб-сайтов, используя указанные прокси-сервера"
        value={true}
        available
      />
      <SwitchRow
        title="GoodbyeDPI"
        tooltip={
          <>
            Изменение пакетов для обхода DPI-оборудования. Требует
            установленного приложения{" "}
            <span className="font-bold">GoodbyeDPI</span>. (
            <a href="#" className="text-blue-500 underline">
              Инструкция
            </a>
            )
          </>
        }
      />
    </ul>
  );
}

function SwitchRow(props: {
  title: string;
  tooltip: string | ReactNode;
  available?: boolean;
  value?: boolean;
}) {
  const toggleSwitch = <Switch checked={props.value} />;
  const unavailableIcon = <CircleXIcon className="text-red-400" />;

  return (
    <li
      className={cn(
        "flex justify-between",
        !props.available && "text-muted-foreground"
      )}
    >
      <div>
        {props.title} <Hint tooltip={props.tooltip} className="inline" />
      </div>
      {props.available ? toggleSwitch : unavailableIcon}
    </li>
  );
}

export default function ScreenMain() {
  return (
    <div className="flex flex-col items-center gap-4">
      <SwitchBlock />
    </div>
  );
}
