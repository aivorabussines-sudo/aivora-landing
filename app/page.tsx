import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* NAV */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight">AIVORA</h1>
        <a
          href="#prices"
          className="px-5 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
        >
          Ver planes
        </a>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Mientras no respondes, <br />
          <span className="text-red-500">otro negocio sí.</span>
        </h2>

        <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto">
          AIVORA responde, filtra y agenda clientes en WhatsApp 24/7.
          Sin descanso. Sin errores. Sin perder dinero.
        </p>

        <div className="mt-12 flex justify-center gap-4">
          <a
            href="#prices"
            className="px-8 py-4 rounded-xl bg-blue-600 text-lg font-semibold hover:bg-blue-700 transition"
          >
            Activar AIVORA
          </a>
          <a
            href="#how"
            className="px-8 py-4 rounded-xl border border-white/20 text-lg font-semibold hover:bg-white/5 transition"
          >
            Ver cómo funciona
          </a>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="border-t border-white/10 py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center">
            El problema no es WhatsApp.
            <br />
            <span className="text-red-500">Es no responder a tiempo.</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Mensajes sin contestar por horas",
              "Responder lo mismo todos los días",
              "Interrupciones constantes",
              "Clientes que se van con la competencia",
            ].map((item) => (
              <div
                key={item}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section id="how" className="border-t border-white/10 py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">
            La solución: un empleado digital
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            AIVORA atiende clientes, responde preguntas y agenda citas como
            si fuera parte de tu equipo.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Responde al instante", "0 segundos de espera."],
              ["Vende mientras duermes", "Tu negocio nunca se detiene."],
              ["Sin errores humanos", "Siempre da la información correcta."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <h4 className="text-xl font-semibold mb-3">{title}</h4>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="prices" className="border-t border-white/10 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16">
            Elige dejar de perder clientes
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {/* PLAN BASICO */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h4 className="text-xl font-bold mb-2 text-blue-400">
                Plan Básico
              </h4>
              <p className="text-gray-400 mb-6">
                WhatsApp automático 24/7
              </p>

              <div className="text-4xl font-extrabold mb-4">$1,100/mo</div>
              <p className="text-gray-400 mb-6">+$2,250 activación</p>

              <a
                href="https://buy.stripe.com/bJefZh4V0c1d8ewdX67N603"
                target="_blank"
                className="block text-center px-6 py-4 rounded-xl bg-blue-600 font-semibold hover:bg-blue-700 transition"
              >
                Activar Plan Básico
              </a>
            </div>

            {/* PLAN AVANZADO */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-b from-purple-600/20 to-black border border-purple-500">
              <span className="absolute top-4 right-4 text-xs bg-purple-600 px-3 py-1 rounded-full">
                Recomendado
              </span>

              <h4 className="text-xl font-bold mb-2 text-purple-400">
                Plan Avanzado
              </h4>
              <p className="text-gray-300 mb-6">
                WhatsApp + llamadas + agenda
              </p>

              <div className="text-4xl font-extrabold mb-4">$4,000/mo</div>
              <p className="text-gray-400 mb-6">+$7,600 activación</p>

              <a
                href="https://buy.stripe.com/28E4gz0EK6GT0M4dX67N604"
                target="_blank"
                className="block text-center px-6 py-4 rounded-xl bg-purple-600 font-semibold hover:bg-purple-700 transition"
              >
                Activar Plan Avanzado
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-white/10 py-32 text-center">
        <h3 className="text-4xl font-bold mb-6">
          No lo pienses más.
        </h3>
        <p className="text-gray-400 mb-10">
          Cada día sin AIVORA es dinero regalado.
        </p>
        <a
          href="#prices"
          className="px-10 py-5 rounded-xl bg-white text-black font-semibold text-lg hover:bg-gray-200 transition"
        >
          Empezar ahora
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AIVORA. Todos los derechos reservados.
      </footer>
    </main>
  );
}



