import Link from "next/link";
import { Home } from "lucide-react";

export function NotFound({
  title = "Página não encontrada",
  description = "A página que você está procurando não existe.",
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6">
      <div className="space-y-2">
        <h1 className="text-6xl font-bold text-zinc-600">404</h1>
        <h2 className="text-2xl font-semibold text-zinc-100">{title}</h2>
        <p className="text-zinc-400 max-w-md">{description}</p>
      </div>

      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
      >
        <Home className="w-4 h-4 mr-2" />
        Voltar ao Início
      </Link>
    </div>
  );
}
