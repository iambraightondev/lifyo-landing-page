import { Quote } from 'lucide-react';

export default function FounderFit() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZTI5M2IiIGZpbGwtb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgydjMwem0tNiAwSDEwVjBoMjB2MzB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Founder-Market Fit</h2>
          <p className="text-xl text-slate-300">Por qué estamos uniquely positioned para resolver esto</p>
        </div>

        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <Quote className="w-16 h-16 text-emerald-400 mb-6 opacity-50" />

          <blockquote className="text-2xl md:text-3xl text-white leading-relaxed mb-8 font-light text-justify">
            "Como CEO de Lifyo, he vivido en carne propia las barreras del sistema financiero tradicional.
            Crecí viendo cómo mi familia y comunidad eran rechazados por bancos que nunca entendieron nuestra
            realidad. Esta no es solo una oportunidad de negocio para mí, es una misión personal. Cada línea
            de código que escribimos, cada decisión que tomamos, está impulsada por la determinación de crear
            el sistema financiero que yo hubiera querido tener cuando más lo necesitaba."
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src="/images/jhonatan.jpg"
                alt="Foto de Jhonatan, CEO de Lifyo"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <p className="text-xl font-semibold text-white">Jhonatan</p>
              <p className="text-slate-400">CEO & Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}