import { useId } from "preact/hooks";
import { HTMLAttributes } from "react";
import "./switch.css";

export interface SwitchProps extends HTMLAttributes<HTMLInputElement> {}

export default function Switch(props: SwitchProps) {
  const switchId = useId();

  return (
    <div className="switch w-12">
      <input type="checkbox" id={switchId} class="sr-only" {...props} />
      <label
        htmlFor={switchId}
        className="block relative w-12 h-5 bg-input border-primary rounded-lg cursor-pointer"
      >
        <svg
          class="switch__switch-on"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 130.2 130.2"
        >
          <polyline
            class="switch__path"
            points="100.2,40.2 51.5,88.8 29.8,67.5"
          ></polyline>
        </svg>
        <svg
          class="switch__switch-off"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 130.2 130.2"
        >
          <line
            class="switch__path"
            x1="34.4"
            y1="34.4"
            x2="95.8"
            y2="95.8"
          ></line>
          <line
            class="switch__path"
            x1="95.8"
            y1="34.4"
            x2="34.4"
            y2="95.8"
          ></line>
        </svg>
      </label>
    </div>
  );
}
