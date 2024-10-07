import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Controle de Estacionamento</h1>
      <nav className="flex flex-col sm:flex-row gap-6">
        <Link
          href="/entrada"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Registrar Entrada
        </Link>
        <Link
          href="/listar"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Listar Entradas
        </Link>
      </nav>
    </div>
  );
}
