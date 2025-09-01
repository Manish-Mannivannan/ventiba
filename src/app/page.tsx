import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <main className="w-full max-w-5xl mx-auto p-8 sm:p-20 space-y-24">
        {/* HERO */}
        <section className="text-center flex flex-col gap-6 scroll-mt-24" id="hjem">
          <div className="flex justify-center">
            <Image
              src="/ventiba-logo.png"
              alt="VentiBA logo"
              width={80}
              height={80}
            />
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            VENTI  &#183;  Bygg & Anlegg <br></br>
          </h1>
          <h2 className="text-4xl"> Din ventilasjonspartner</h2>
          <p className="text-lg sm:text-xl text-slate-300">
            Vi hjelper deg med ventilasjon, kanalrens, kjøkkenavtrekk og service i Akershus fylke.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="#bestill"
              className="px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-600 font-semibold"
            >
              Kontakt oss i dag
            </a>
            <a
              href="#tjenester"
              className="px-6 py-3 rounded-full border border-slate-500 font-semibold hover:bg-slate-700"
            >
              Våre tjenester
            </a>
          </div>
        </section>

        {/* DIVERSE TJENESTER */}
        <section id="tjenester" className="text-center scroll-mt-24">
          <h2 className="text-3xl font-bold mb-4">Tjenester</h2>
          <p className="text-slate-300 mb-10">
            VentiBA leverer komplette løsninger innen ventilasjon.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-xl font-semibold">Balansert ventilasjon</h3>
              <p className="text-slate-400">Effektiv ventilasjon tilpasset din bolig.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-xl font-semibold">Kanalrens</h3>
              <p className="text-slate-400">Rens og vedlikehold for et sunt inneklima.</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-xl font-semibold">Service & befaring</h3>
              <p className="text-slate-400">Rask og pålitelig serviceavtale.</p>
            </div>
          </div>
        </section>

        {/* BESTILLINGSSKJEMA */}
        <section id="bestill" className="max-w-xl mx-auto text-left scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 text-center">Bestill en tjeneste</h2>
          <form className="flex flex-col gap-4 bg-slate-900 p-6 rounded-2xl border border-slate-700">
            <label className="flex flex-col">
              Navn
              <input
                type="text"
                className="mt-1 p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none"
                required
              />
            </label>
            <label className="flex flex-col">
              E-post
              <input
                type="email"
                className="mt-1 p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none"
                required
              />
            </label>
            <label className="flex flex-col">
              Velg tjeneste
              <select className="mt-1 p-3 rounded-lg bg-slate-800 border border-slate-700">
                <option>Balansert ventilasjon</option>
                <option>Kanalrens</option>
                <option>Service & befaring</option>
              </select>
            </label>
            <label className="flex flex-col">
              Beskrivelse
              <textarea
                className="mt-1 p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none"
                rows={4}
              />
            </label>
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-600 font-semibold mt-4"
            >
              Send bestilling
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
