import Link from 'next/link'
export default function Home() {
    return (
        <main>
            {/* HEADER */}
            <header className="container" style={{ padding: '20px 20px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '800' }}>AIVORA</h2>
            </header>
            {/* 1. HERO (Urgency) */}
            <section className="container hero" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
                <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.1' }}>
                    Mientras no respondes, <br />
                    <span style={{ color: '#ef4444' }}>otro negocio sí.</span>
                </h1>
                <div className="subtitle" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '2rem' }}>
                    Tu WhatsApp puede vender por ti las 24 horas.
                </div>
                <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem' }}>
                    Clientes no contestados = <span className="highlight-box" style={{ background: '#ef4444' }}>DINERO PERDIDO</span>
                </p>
                <a href="#prices" className="cta-button" style={{ maxWidth: '300px' }}>
                    Activar AIVORA hoy
                </a>
            </section>
            {/* 2. PROBLEMA (Pain) */}
            <section className="section section-problem">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="section-title">El problema real</h2>
                    <ul className="problem-list">
                        <li>Mensajes que se quedan sin contestar por horas.</li>
                        <li>Siempre respondes las mismas preguntas una y otra vez.</li>
                        <li>Interrupciones constantes en tu día a día.</li>
                        <li><strong>Clientes que se van con la competencia porque no respondiste rápido.</strong></li>
                    </ul>
                    <p style={{ textAlign: 'center', fontSize: '1.4rem', color: '#fff', marginTop: '2rem', fontWeight: 'bold' }}>
                        No responder al instante es imperdonable hoy.
                    </p>
                </div>
            </section>
            {/* 3. SOLUCIÓN (AIVORA) */}
            <section className="section">
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h2 className="section-title">La Solución: AIVORA</h2>
                    <p style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1rem' }}>
                        Es como tener a alguien trabajando 24/7 para ti.
                    </p>
                    <div className="card-grid" style={{ marginTop: '3rem' }}>
                        <div className="card">
                            <h3>Responde al instante</h3>
                            <p>0 segundos de espera. El cliente recibe atención inmediata.</p>
                        </div>
                        <div className="card">
                            <h3>Vende mientras duermes</h3>
                            <p>Tu negocio sigue facturando y atendiendo aunque tú descanses.</p>
                        </div>
                        <div className="card">
                            <h3>No se equivoca</h3>
                            <p>Siempre da la información correcta, sin errores humanos, sin mal humor.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* 4. QUÉ HACE (Funciones claras) */}
            <section className="section" style={{ background: '#111' }}>
                <div className="container">
                    <h2 className="section-title">¿Qué hace exactamente?</h2>
                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <ul className="feature-list" style={{ fontSize: '1.1rem' }}>
                            <li><strong>Contesta mensajes</strong> automáticamente en segundos.</li>
                            <li><strong>Detecta la intención</strong> del cliente para responder lo correcto.</li>
                            <li><strong>Toma datos</strong> importantes (Nombre, Teléfono, Interés).</li>
                            <li><strong>Filtra clientes</strong> reales de los que solo preguntan.</li>
                            <li><strong>Agenda citas</strong> y confirma horarios.</li>
                            <li><strong>Puede pasar a un humano</strong> cuando la venta está lista para cerrar.</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* 5. LAS DOS VERSIONES (Comparison) */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Dos versiones potentes</h2>
                    <div className="versus-grid">
                        {/* PLAN 1 INFO */}
                        <div>
                            <h3 style={{ color: '#3b82f6', fontSize: '1.8rem', marginBottom: '1rem' }}>Plan 1: WhatsApp Automático</h3>
                            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}><strong>Ideal para pymes y profesionales.</strong></p>
                            <ul className="feature-list">
                                <li>Responde mensajes 24/7.</li>
                                <li>Contesta precios, ubicación y horarios.</li>
                                <li>Toma datos y filtra curiosos.</li>
                                <li>Apoya a tu equipo actual para quitarles carga.</li>
                            </ul>
                            <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#a3a3a3' }}>"Esto soluciona el 80% de mis problemas de atención."</p>
                        </div>
                        {/* PLAN 2 INFO */}
                        <div>
                            <h3 style={{ color: '#8b5cf6', fontSize: '1.8rem', marginBottom: '1rem' }}>Plan 2: Avanzado (Total)</h3>
                            <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}><strong>Para negocios que quieren dominar.</strong></p>
                            <ul className="feature-list">
                                <li><strong>Todo lo del Plan 1</strong> + LLAMADAS.</li>
                                <li>Contesta el teléfono como un humano real.</li>
                                <li>Agenda citas verbalmente en tiempo real.</li>
                                <li>Maneja toda la recepción sin intervención humana.</li>
                            </ul>
                            <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#a3a3a3' }}>"Esto es otro nivel. Me hace competir con los grandes."</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* 6. BENEFICIOS (Results) */}
            <section className="section" style={{ background: '#111' }}>
                <div className="container">
                    <h2 className="section-title">Deja de perder dinero</h2>
                    <div className="card-grid">
                        <div className="card">
                            <h3>Recupera Clientes</h3>
                            <p>Ese cliente que te escribió a las 10 PM y no respondiste... AIVORA sí lo atiende y lo cierra.</p>
                        </div>
                        <div className="card">
                            <h3>Libertad para ti</h3>
                            <p>Deja de vivir pegado al celular. Dedícate a operar tu negocio o a descansar.</p>
                        </div>
                        <div className="card">
                            <h3>Imagen Superior</h3>
                            <p>Dar respuesta inmediata te posiciona por encima de toda tu competencia local.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* 7. PRECIOS (The Offer) */}
            <section className="section" id="prices">
                <div className="container">
                    <h2 className="section-title">Elige dejar de perder clientes</h2>
                    <div className="versus-grid" style={{ alignItems: 'start' }}>
                        {/* CARD PLAN 1 */}
                        <div className="plan-card">
                            <div className="plan-title" style={{ color: '#3b82f6' }}>Plan Básico</div>
                            <div className="plan-desc">
                                WhatsApp automático 24/7. Ideal para empezar a automatizar.
                            </div>
                            <div className="pricing-header">
                                <div className="price-row">
                                    <span className="price-label">Pago Único (Activación)</span>
                                    <span className="price-value">$2,250</span>
                                </div>
                                <div className="price-row">
                                    <span className="price-label">Mensualidad</span>
                                    <span className="price-value">$1,100</span>
                                </div>
                            </div>
                            <a href="https://buy.stripe.com/bJefZh4V0c1d8ewdX67N603" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ background: '#3b82f6' }}>
                                Activar Plan Básico
                            </a>
                            <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', opacity: 0.7 }}>
                                Menos de lo que pierdes en una semana.
                            </p>
                        </div>
                        {/* CARD PLAN 2 */}
                        <div className="plan-card advanced">
                            <div style={{
                                position: 'absolute', top: 0, right: 0,
                                background: '#8b5cf6', color: 'white',
                                padding: '0.3rem 1rem', borderBottomLeftRadius: '12px', fontWeight: 'bold'
                            }}>RECOMENDADO</div>
                            <div className="plan-title" style={{ color: '#8b5cf6' }}>Plan Avanzado</div>
                            <div className="plan-desc">
                                Automatización Total: WhatsApp + Llamadas de Voz + Agenda. Reemplaza recepción.
                            </div>
                            <div className="pricing-header">
                                <div className="price-row">
                                    <span className="price-label">Pago Único (Activación)</span>
                                    <span className="price-value" style={{ color: '#8b5cf6' }}>$7,600</span>
                                </div>
                                <div className="price-row">
                                    <span className="price-label">Mensualidad</span>
                                    <span className="price-value" style={{ color: '#8b5cf6' }}>$4,000</span>
                                </div>
                            </div>
                            <a href="https://buy.stripe.com/28E4gz0EK6GT0M4dX67N604" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ background: '#8b5cf6' }}>
                                Activar Plan Avanzado
                            </a>
                            <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', opacity: 0.7 }}>
                                Mucho más barato que un sueldo de recepcionista.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* 8. CLOSING (Final Push) */}
            <section className="section" style={{ textAlign: 'center', borderBottom: 'none', padding: '100px 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>No lo pienses más.</h2>
                    <p style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '2.5rem' }}>
                        Cada día que pasa sin AIVORA, son clientes que regalas a tu competencia.<br />
                        Es una decisión obvia.
                    </p>
                    <a href="#prices" className="cta-button" style={{ padding: '1.2rem 3rem', fontSize: '1.3rem' }}>
                        Empezar Ahora Mismo
                    </a>
                </div>
            </section>
            <footer>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} AIVORA. Todos los derechos reservados.</p>
                </div>
            </footer>
        </main>
    )
}



