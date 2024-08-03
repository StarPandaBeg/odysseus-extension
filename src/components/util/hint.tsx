import { cn } from "@/lib/utils";
import { HelpCircleIcon } from "lucide-react";
import Tooltip, { TooltipProps } from "../ui/tooltip";

export interface HintProps extends TooltipProps {}

export default function Hint({ className, ...props }: HintProps) {
  return (
    <Tooltip className={cn("cursor-help", className)} title="Помощь" {...props}>
      <HelpCircleIcon className="inline size-4" />
    </Tooltip>
  );
}
