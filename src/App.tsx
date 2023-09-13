import { Button } from "./components/ui/button";
import { Github } from "lucide-react";
import { Separator } from "./components/ui/separator";

export function App() {
  return (
    <div>
      <div className="px-6 py-2 flex items-center justify-between border b">
        <h1 className="text-xl font-bold">devops.ferraz</h1>

        <div className="flex items-center gap-3">
          <span className="text-lg text-yellow-200">
            Criando meu primeiro site com ShadcnUi
          </span>

          <Separator orientation="vertical" />

          <Button>
            <Github className="w-4 h-4 mr-2" />
            Shadcn
          </Button>
        </div>
      </div>
    </div>
  );
}
