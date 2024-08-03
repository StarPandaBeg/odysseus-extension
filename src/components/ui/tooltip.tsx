import { cn } from "@/lib/utils";
import {
  createRef,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from "react";

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  tooltip: string | ReactNode;
}

export default function Tooltip({ tooltip, children, ...props }: TooltipProps) {
  const [active, setActive] = useState(false);
  const ref = createRef<HTMLDivElement>();

  const mouseOverCallback = () => {
    const node = ref.current;
    const nodeParent = node?.parentElement;
    if (!nodeParent) return;

    const pos = nodeParent.getBoundingClientRect();

    node.style.top = `${pos.top - pos.height - 8}px`;
    node.style.left = `${pos.left + pos.width / 2 - node.offsetWidth / 2}px`;
    if (!active) setActive(true);
  };
  const mouseOutCallback = () => {
    if (active) setActive(false);
  };

  useEffect(() => {
    const node = ref.current;
    const nodeParent = node?.parentElement;
    if (!nodeParent) return;

    nodeParent.addEventListener("mouseenter", mouseOverCallback);
    nodeParent.addEventListener("mouseleave", mouseOutCallback);
    return () => {
      nodeParent.removeEventListener("mouseleave", mouseOutCallback);
      nodeParent.removeEventListener("mouseenter", mouseOverCallback);
    };
  });

  return (
    <div {...props}>
      {children}
      <div
        ref={ref}
        className={cn(
          "z-50 absolute overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2",
          !active && "hidden"
        )}
      >
        {tooltip}
      </div>
    </div>
  );
}
