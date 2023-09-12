import { Button } from "./components/ui/button";

export function App() {
  return (
    <>
      <div>
        <div className="px-6 py-2 flex items-center justify-between border b">
          <h1 className="text-xl font-bold">devops.ferraz</h1>

          <div className="flex items-center gap-3">
            <span className="text-sm text-zinc-500">
              Criando meu primeiro site com ShadcnUi
            </span>
            <Button variant={"default"}>Shadcn</Button>
          </div>
        </div>
      </div>
    </>
  );
}
