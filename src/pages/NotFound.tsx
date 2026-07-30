import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
      <span className="font-mono text-8xl font-light text-[#a84432]/20 tracking-tighter mb-6">404</span>
      <h1 className="font-serif text-3xl md:text-4xl font-light text-[#1a1a1a] mb-4">
        Página no encontrada
      </h1>
      <p className="text-[#555] text-sm mb-8 max-w-md">
        La página que buscás no existe o fue movida.
      </p>
      <Link
        to="/"
        className="font-mono text-xs uppercase tracking-widest text-[#f9f7f2] bg-[#a84432] hover:bg-[#a84432]/90 px-6 py-2.5 rounded-sm transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
