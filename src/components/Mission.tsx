import { Target } from 'lucide-react';

export default function Mission() {
  return (
    <section className="pt-20 pb-40 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Target className="w-8 h-8 text-emerald-500" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Nuestra Misión</h2>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-blue-500 rounded-full"></div>
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed pl-8 text-justify">
            En Lifyo, creemos que el acceso a servicios financieros de calidad es un derecho, no un privilegio.
            Nuestra misión es democratizar las finanzas mediante tecnología innovadora, creando soluciones que
            empoderan a la nueva generación a tomar control de su futuro financiero. Construimos puentes donde
            antes solo existían barreras, transformando la forma en que las personas acceden, gestionan y hacen
            crecer su patrimonio.
          </p>
        </div>
      </div>
    </section>
  );
}
