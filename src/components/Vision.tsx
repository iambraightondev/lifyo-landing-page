import { Eye } from 'lucide-react';

export default function Vision() {
  return (
    <section id="vision" className="py-20 pb-40 bg-gray-50"> 
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Título principal de la Visión */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <Eye className="w-8 h-8 text-emerald-500" /> 
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Nuestra Visión</h2>
        </div>

        <div className="relative">
          {/* Barra lateral de gradiente */}
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full"></div> 
          
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed pl-8 text-justify">
            En Lifyo estamos construyendo el futuro del acceso financiero para la generación joven y desatendida de Latinoamérica. 
            Imaginamos un mundo donde el potencial no dependa del historial crediticio, sino de la capacidad real de cada persona. 
            Queremos ser el punto de partida financiero que les permita construir su identidad crediticia y acceder a oportunidades que 
            el sistema tradicional les niega.
          </p>
        </div>
        
      </div>
    </section>
  );
}
