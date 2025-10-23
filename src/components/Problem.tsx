import { AlertCircle } from 'lucide-react';

export default function Problem() {
  return (
    <section id="problem" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-12">
          <AlertCircle className="w-8 h-8 text-blue-500" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">El Problema</h2>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-200">
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-6 text-justify">
            Millones de personas en América Latina son excluidas del sistema financiero tradicional debido a
            requisitos burocráticos obsoletos, falta de historial crediticio, o simplemente por no encajar en
            los perfiles rígidos de las instituciones convencionales.
          </p>
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed text-justify">
            Esta exclusión perpetúa ciclos de desigualdad, limita oportunidades de crecimiento y deja a millones
            sin las herramientas necesarias para construir un futuro financiero sólido. La nueva generación
            necesita soluciones diseñadas para su realidad, no adaptaciones de sistemas del siglo pasado.
          </p>
        </div>
      </div>
    </section>
  );
}
