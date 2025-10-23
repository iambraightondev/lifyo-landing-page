import { Linkedin } from 'lucide-react';

export default function CallToAction() {
  return (
    
    <section id="cta" className="py-24 bg-gray-50"> 
      <div className="max-w-4xl mx-auto px-0 text-center">
        
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl">
          
          {/* Título principal del CTA */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 leading-tight">
            ¡Estamos construyendo el futuro del crédito para jóvenes en LatAm!
          </h2>
          
          {/* Primer mensaje: Lista de Espera */}
          <p className="text-xl text-slate-200 mb-10 max-w-3xl mx-auto font-medium"> 
            Próximamente podrás unirte a nuestra <strong>lista de espera</strong> para validar nuestro 
            Producto-Mercado (PMF) y ser de los primeros en experimentar Lifyo.
          </p>
          
          {/* Segundo mensaje: Síguenos */}
          <p className="text-lg text-slate-200 mb-10 max-w-3xl mx-auto"> 
            Sigue nuestro progreso en redes sociales para estar al tanto de las novedades.
          </p>

          {/* Botón de LinkedIn */}
          <div className="flex justify-center">
            <a 
              href="https://www.linkedin.com/company/lifyo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-emerald-500 text-slate-900 font-bold text-base rounded-full shadow-xl transition duration-300 transform hover:scale-105 hover:bg-emerald-400"
            >
              <Linkedin className="w-5 h-5" />
              Síguenos en LinkedIn
            </a>
          </div>

        </div>
        
      </div>
    </section>
  );
}
