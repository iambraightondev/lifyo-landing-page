import { CreditCard, Zap, TrendingUp, Handshake } from 'lucide-react';

export default function TheSolution() {
  return (
    <section id="solution" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Título y Slogan de la Solución */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <CreditCard className="w-8 h-8 text-emerald-500" />
            La Tarjeta Universal Inteligente
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Redefinimos el crédito con <strong>flexibilidad</strong> y <strong>accesibilidad</strong>. Una sola tarjeta diseñada para la
            realidad de la nueva generación.
          </p>
        </div>

        {/* Mockup del Producto (Imagen real) */}
        <div className="flex justify-center mb-16">
          <img
            src="/images/lifyocard.png"
            alt="Mockup de la Tarjeta Universal Inteligente Lifyo"
            className="w-full max-w-md h-auto rounded-xl shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          />
        </div>

        {/* Características Clave */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* 1. Flexibilidad BNPL */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-emerald-500 transition hover:shadow-xl">
            <Zap className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">Poder BNPL Integrado</h3>
            <p className="text-slate-600 text-justify">
              Convertimos cualquier compra en <strong>planes de pagos fraccionados</strong> (BNPL) en el punto de venta o post-compra.
              Esto no solo aumenta la capacidad de gasto del usuario, sino que genera <strong>múltiples flujos de ingresos</strong> y 
              un <strong>alto engagement</strong>.
            </p>
          </div>
          
          {/* 2. Construcción de Historial */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500 transition hover:shadow-xl">
            <TrendingUp className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">Acceso y Escalabilidad</h3>
            <p className="text-slate-600 text-justify">
              Diseñada para jóvenes <strong>sin historial crediticio</strong>. Utilizamos un modelo de <strong>riesgo alternativo</strong> que 
              permite la inclusión de nuestra base de usuarios, creando un camino escalable hacia productos financieros de mayor valor.
            </p>
          </div>
          
          {/* 3. Universalidad */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-slate-500 transition hover:shadow-xl">
            <Handshake className="w-8 h-8 text-slate-500 mb-4" />
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">Aceptación Universal</h3>
            <p className="text-slate-600 text-justify">
              A diferencia de las soluciones de crédito específicas, nuestra tarjeta es <strong>universalmente aceptada</strong> (Visa/Mastercard). 
              Esto elimina la fricción de adopción y nos permite competir directamente con el crédito bancario tradicional.
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
}