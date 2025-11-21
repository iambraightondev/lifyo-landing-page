export default function FoundersMessage() {

  const videoUrl = "https://lifyo-assets-static.s3.us-east-1.amazonaws.com/founders-video.mp4";

  return (
    <section id="founders-message" className="w-full bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Un mensaje de los fundadores
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          En poco más de dos minutos te contamos qué es Lifyo, por qué lo estamos construyendo
          y cómo cambia la forma de pagar en Latinoamérica.
        </p>

        {/* Video Container */}
        <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <video
            controls
            poster="/images/video-poster.jpg"
            className="w-full h-auto"
          >
            {/* CORRECCIÓN AQUÍ: Usamos la URL de S3 */}
            <source src={videoUrl} type="video/mp4" />
            Tu navegador no soporta reproducción de video.
          </video>
        </div>

        {/* Optional Quote */}
        <p className="text-gray-700 mt-8 italic">
          “Construimos Lifyo porque el crédito en LATAM debe ser transparente, simple y seguro.”
          <br />
          <span className="font-semibold">— Braighton & Jhonatan, Co-fundadores</span>
        </p>
      </div>
    </section>
  );
}