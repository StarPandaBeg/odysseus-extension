import { render } from "preact";
import { App } from "./app.tsx";

import "unfonts.css";
import "./index.css";

render(<App />, document.getElementById("app")!);
