import { Briefcase, Mail, ExternalLink, Rocket } from 'lucide-react';

export default function JoinUs() {
  return (
    <section id="join" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="w-8 h-8 text-emerald-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Únete a Lifyo</h2>
          </div>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Estamos buscando talento de clase mundial que comparta nuestra visión de democratizar el acceso
            financiero. Si te apasiona resolver problemas complejos y crear impacto real, queremos conocerte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a
            href="https://www.linkedin.com/jobs/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6 text-emerald-600" />
              </div>
              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">COO & Co-Founder</h3>
            <p className="text-slate-600 leading-relaxed">
              Lidera las operaciones de una fintech en crecimiento. Equity significativo y compensación competitiva.
            </p>
          </a>

          <a
            href="https://www.linkedin.com/jobs/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-500 transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Abogado Fintech</h3>
            <p className="text-slate-600 leading-relaxed">
              Experto en regulación financiera para guiar nuestra expansión legal y compliance.
            </p>
          </a>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-8">
          <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Rocket className="w-8 h-8 text-emerald-400" />
            Rol de Co-Fundador: Una Oportunidad Única
          </h3>
          <div className="space-y-4 text-lg text-slate-200 leading-relaxed">
            <p>
              Buscamos un COO excepcional que no solo gestione operaciones, sino que se convierta en un verdadero
              co-fundador y socio estratégico. Esta persona trabajará codo a codo con el CEO y CTO para definir
              la dirección de la empresa.
            </p>
            <p>
              <span className="font-semibold text-white">El Desafío:</span> Construir desde cero la infraestructura
              operacional de una fintech que aspira a impactar millones de vidas. Liderar equipos, optimizar procesos,
              y escalar operaciones mientras mantenemos nuestra cultura de excelencia e innovación.
            </p>
            <p>
              <span className="font-semibold text-white">Compensación:</span> Equity significativo como co-fundador,
              salario competitivo, y la oportunidad de construir algo verdaderamente transformador. No es solo un trabajo,
              es la oportunidad de ser parte de algo que cambiará el panorama financiero de América Latina.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center">
          <Mail className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-slate-900 mb-2">¿Interesado en otro rol?</h3>
          <p className="text-slate-600 mb-4 text-lg">
            Siempre estamos abiertos a conversar con talento excepcional
          </p>
          <a
            href="mailto:carreras@lifyo.co"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-lg transition-colors"
          >
            carreras@lifyo.co
          </a>
        </div>
      </div>
    </section>
  );
}
