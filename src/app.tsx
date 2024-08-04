import PageHeader from "@/components/layout/page-header";
import PageFooter from "./components/layout/page-footer";
import ScreenMain from "./screens/main";

export function App() {
  return (
    <section className="w-96 p-6 pb-1 flex flex-col gap-6 border">
      <PageHeader />
      <ScreenMain />
      <PageFooter />
    </section>
  );
}
