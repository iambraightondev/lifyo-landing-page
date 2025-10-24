import { Users, Linkedin } from 'lucide-react'; // 👈 Importamos el ícono de LinkedIn

export default function Team() {
  const team = [
    {
      name: 'Jhonatan Ramírez',
      role: 'CEO & Founder',
      image: 'images/jhonatan.jpg',
      linkedin: 'https://www.linkedin.com/in/jhonatan-ramírez-761184121/',
      description:
        'Visionario apasionado por democratizar el acceso financiero. Experto en estrategia y crecimiento.',
    },
    {
      name: 'Braighton Paico',
      role: 'CTO & Co-Founder',
      image: 'images/braighton.jpg',
      linkedin: 'https://www.linkedin.com/in/braighton-paico/',
      description:
        'Arquitecto tecnológico con pasión por construir sistemas escalables e innovadores.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-8 h-8 text-emerald-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Equipo Fundador
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Un equipo de visionarios comprometidos con transformar el acceso financiero en América Latina.
          </p>
        </div>

        {/* Tarjetas del equipo */}
        <div className="grid md:grid-cols-2 gap-12 justify-center">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl"
            >
              <div className="w-28 h-28 mb-6 overflow-hidden rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {member.name}
              </h3>
              <p className="text-emerald-600 font-semibold mb-3">{member.role}</p>
              
              {/* COMPONENTE DE LINKEDIN AÑADIDO */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 transition-colors mb-4 inline-flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">Conectar</span>
              </a>
              {/* FIN DEL COMPONENTE DE LINKEDIN */}
              
              <p className="text-slate-600 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}