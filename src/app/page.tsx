"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* ═══════════ NAVBAR ═══════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--navbar-bg)] h-16">
        <div className="max-w-[1200px] mx-auto h-full px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#hjem" className="text-white font-[var(--font-dm-sans)] text-lg font-bold tracking-wide">
            VENTIBA
          </a>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-8">
            {["HJEM", "TJENESTER", "KONTAKT"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-white/70 hover:text-white text-sm font-medium tracking-[0.05em] uppercase transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#kontakt"
            className="hidden md:flex items-center gap-1 text-white/70 hover:text-white text-sm font-medium tracking-[0.05em] transition-colors duration-200"
          >
            // KONTAKT OSS
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button className="md:hidden text-white" aria-label="Meny">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ═══════════ HERO ═══════════ */}
      <section
        id="hjem"
        className="pt-32 pb-20 md:pb-32 px-6"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-8">
          {/* Left — Text */}
          <div className="flex-1 md:max-w-[60%] space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-8 h-[2px] bg-gradient-to-r from-blue to-red" />
              <span className="text-sm font-medium text-text-secondary tracking-wide uppercase">
                Ventilasjon · Bygg & Anlegg
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] text-[var(--text-primary)]">
              Din ventilasjons
              <span className="block">
                partner i{" "}
                <span className="text-blue">Akershus</span>
              </span>
            </h1>

            <p className="text-lg text-text-secondary max-w-lg leading-relaxed">
              Vi leverer skreddersydde løsninger innen ventilasjon, kanalrens og 
              service — for et sunnere inneklima i din bolig eller bedrift.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#kontakt"
                className="px-8 py-3.5 rounded-xl bg-blue text-white font-semibold text-sm hover:bg-blue-hover transition-colors duration-200 shadow-lg shadow-blue/20"
              >
                Kontakt oss i dag
              </a>
              <a
                href="#tjenester"
                className="px-8 py-3.5 rounded-xl border border-border text-[var(--text-primary)] font-semibold text-sm hover:border-blue hover:text-blue transition-colors duration-200"
              >
                Våre tjenester
              </a>
            </div>
          </div>

          {/* Right — 3D / Visual placeholder */}
          <div className="flex-1 md:max-w-[40%] flex items-center justify-center">
            <div className="w-full aspect-square max-w-[400px] rounded-3xl bg-surface border border-border flex items-center justify-center">
              <div className="text-center space-y-3 px-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue/10 to-red/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V15m0 0l-2.25 1.313M3 16.5v2.25M21 16.5v2.25" />
                  </svg>
                </div>
                <p className="text-sm text-text-secondary font-medium">3D-modell / video her</p>
                <p className="text-xs text-text-secondary/60">Spline eller React Three Fiber</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TJENESTER ═══════════ */}
      <section id="tjenester" className="py-24 md:py-32 px-6 bg-surface">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="inline-block w-8 h-[2px] bg-gradient-to-r from-blue to-red" />
              <span className="text-sm font-medium text-text-secondary tracking-wide uppercase">
                Hva vi tilbyr
              </span>
              <span className="inline-block w-8 h-[2px] bg-gradient-to-l from-blue to-red" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              Våre tjenester
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {/* Card: Balansert ventilasjon */}
            <div className="group bg-white rounded-xl border border-border p-8 hover:border-blue/30 hover:shadow-lg hover:shadow-blue/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center mb-5 group-hover:bg-blue/15 transition-colors duration-300">
                <svg className="w-6 h-6 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">
                Balansert ventilasjon
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Effektiv ventilasjon tilpasset din bolig for optimalt inneklima.
              </p>
            </div>

            {/* Card: Kanalrens */}
            <div className="group bg-white rounded-xl border border-border p-8 hover:border-blue/30 hover:shadow-lg hover:shadow-blue/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-red/10 flex items-center justify-center mb-5 group-hover:bg-red/15 transition-colors duration-300">
                <svg className="w-6 h-6 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">
                Kanalrens
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Profesjonell rens og vedlikehold for et sunt inneklima.
              </p>
            </div>

            {/* Card: Service & befaring */}
            <div className="group bg-white rounded-xl border border-border p-8 hover:border-blue/30 hover:shadow-lg hover:shadow-blue/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center mb-5 group-hover:bg-blue/15 transition-colors duration-300">
                <svg className="w-6 h-6 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.58-3.228a.75.75 0 010-1.298l5.58-3.229a.75.75 0 01.75 0l5.58 3.229a.75.75 0 010 1.298l-5.58 3.228a.75.75 0 01-.75 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.84 11.943l-1.59.918a.75.75 0 000 1.298l5.58 3.228a.75.75 0 00.75 0l5.58-3.229a.75.75 0 000-1.297l-1.59-.918" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">
                Service & befaring
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Rask og pålitelig service med gratis befaring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ KONTAKT / FORM ═══════════ */}
      <section id="kontakt" className="py-24 md:py-32 px-6">
        <div className="max-w-[560px] mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="inline-block w-8 h-[2px] bg-gradient-to-r from-blue to-red" />
              <span className="text-sm font-medium text-text-secondary tracking-wide uppercase">
                Ta kontakt
              </span>
              <span className="inline-block w-8 h-[2px] bg-gradient-to-l from-blue to-red" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              Send oss en forespørsel
            </h2>
            <p className="text-text-secondary">
              Fyll ut skjemaet, så tar vi kontakt innen 24 timer.
            </p>
          </div>

          <form className="bg-surface rounded-2xl border border-border p-8 space-y-5">
            <label className="block">
              <span className="text-sm font-medium text-[var(--text-primary)] mb-1.5 block">Navn</span>
              <input
                type="text"
                required
                placeholder="Ditt fulle navn"
                className="w-full px-4 py-3 rounded-xl bg-white border border-border text-[var(--text-primary)] placeholder:text-text-secondary/40 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all duration-200"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-[var(--text-primary)] mb-1.5 block">E-post</span>
              <input
                type="email"
                required
                placeholder="din@epost.no"
                className="w-full px-4 py-3 rounded-xl bg-white border border-border text-[var(--text-primary)] placeholder:text-text-secondary/40 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all duration-200"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-[var(--text-primary)] mb-1.5 block">Velg tjeneste</span>
              <select className="w-full px-4 py-3 rounded-xl bg-white border border-border text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all duration-200 appearance-none">
                <option>Balansert ventilasjon</option>
                <option>Kanalrens</option>
                <option>Service & befaring</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-[var(--text-primary)] mb-1.5 block">Beskrivelse</span>
              <textarea
                rows={4}
                placeholder="Beskriv kort hva du trenger hjelp med..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-border text-[var(--text-primary)] placeholder:text-text-secondary/40 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all duration-200 resize-none"
              />
            </label>

            <button
              type="submit"
              className="w-full px-8 py-3.5 rounded-xl bg-blue text-white font-semibold text-sm hover:bg-blue-hover transition-colors duration-200 shadow-lg shadow-blue/20 mt-2"
            >
              Send forespørsel
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
