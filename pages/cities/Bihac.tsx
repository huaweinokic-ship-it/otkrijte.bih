import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { MapPin, Mountain, Building, Utensils, Users } from "lucide-react";

export function Bihac() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[400px]">
        <ImageWithFallback
          src="https://images.trvl-media.com/place/6130376/309fcb13-4d4f-457c-9442-18dab98bdf6e.jpg" 
          alt="Una river"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={32} className="text-yellow-400" />
              <h1 className="text-5xl md:text-6xl">Bihać</h1>
            </div>
            <p className="text-xl">Grad na Uni - Prirodni raj Bosne</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Building className="text-blue-600" size={32} />
            <h2 className="text-4xl text-slate-800">Opće informacije</h2>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Bihać</strong> je grad na sjeverozapadu Bosne i Hercegovine sa oko 60.000 stanovnika, administrativni
              centar Unsko-sanskog kantona. Grad se nalazi na obali rijeke <strong>Une</strong>, poznate po svojoj
              kristalno čistoj vodi i spektaklarnim vodopadima.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Historijski, Bihać je bio važna <strong>srednjovjekovna tvrđava</strong>i trgovački centar. Danas je poznat
              kao centar ekološkog turizma i avanturističkih sportova u Bosni i Hercegovini.
            </p>
            <p className="text-lg text-gray-700">
              <strong>Nacionalni park Una</strong>, koji okružuje grad, je dom jednog od najljepših prirodnih pejzaža
              u Evropi sa vodopadima, kanjinama i bogatom bioraznolikošću.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Mountain className="text-yellow-600" size={32} />
                <h2 className="text-4xl text-slate-800">Geografija</h2>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-yellow-400">
                <p className="text-lg text-gray-700 mb-4">
                  Bihać leži okružen planinama <strong>Plješevica</strong> i <strong>Grmeč</strong>. Rijeka Una,
                  duga 212 km, protiče kroz grad stvarajući brojne vodopade i brzaće.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Vodopad Štrbački buk</strong>, visok 24 metra, i <strong>vodopad Martin brod</strong> su samo neke od prirodnih
                  atrakcija u blizini grada. Una je također bogata ribom, posebno pastrmkom i lipljenom.
                </p>
                <p className="text-lg text-gray-700">
                  Umjerena kontinentalna klima sa utjecajem planinske klime donosi topla ljeta i hladne
                  zime, sa prolječem i jeseni kao najljepšim godišnjim dobima za posjetu.
                </p>
              </div>
            </div>
            <ImageWithFallback
              src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s78b2eb61ea7ad941/image/ia3847bade3dd4746/version/1461504571/image.jpg" 
              alt="Waterfall"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </section>

        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-blue-600" size={32} />
            <h2 className="text-4xl text-slate-800">Turizam</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl mb-4 text-blue-700">Glavne atrakcije</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Nacionalni park Una</strong> - Zaštićeno područje sa vodopadima</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Štrbački buk</strong> - Spektakularan vodopad na Uni</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Ostrožac kula</strong> - Srednjovjekovna tvrđava iz 16. stoljeća</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Fethija džamija</strong> - Historijska džamija u centru grada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Otoka</strong> - Uređeni otoci na Uni idealni za piknik</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl mb-4 text-yellow-600">Avanturizam</h3>
              <p className="text-gray-700 mb-4">
                Bihać je poznat kao epicentar <strong>raftinga</strong> u regiji. Rijeka Una nudi različite nivoe
                težine za sve od početnika do iskusnih raftera.
              </p>
              <p className="text-gray-700">
                <strong>Kajaking, kanuiranje, ribolov, planinarenje i kampovanje</strong> su samo neke od aktivnosti
                koje posjetioci mogu uživati u netaknutoj prirodi Nacionalnog parka Una.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ImageWithFallback
              src="https://banjaluka.net/wp-content/uploads/2016/04/Martin-Brod.jpg"
              alt="Martin Brod"
              className="w-full h-64 object-cover rounded-lg shadow-xl"
            />
            <ImageWithFallback
              src="https://www.putokaz.me/images/REPORTAZE/PRIRODA/10__Vodopad_%C5%A0trba%C4%8Dki_buk__Nacionalni_park_Una_BIH/Vodopad_%C5%A0trba%C4%8Dki_buk__Nacionalni_park_Una_BIH2.jpg"
              alt="Vodopad Štrbački buk"
              className="w-full h-64 object-cover rounded-lg shadow-xl"
            />
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-yellow-600" size={32} />
              <h2 className="text-4xl text-slate-800">Kultura</h2>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-yellow-400">
              <p className="text-lg text-gray-700 mb-4">
                Bihać ima bogatu historiju koja se ogleda u njegovoj arhitekturi. Stari grad, <strong>Kapetan-kula</strong>, datira iz 13. stoljeća i bio je važna odbrambena tačka tokom osmanskog perioda.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Una Regatta</strong>, međunarodno takmičenje u raftingu, održava se svake godine privlačeći
                timove iz cijele Evrope. Festival predstavlja spoj sporta, muzike i lokalne kulture.
              </p>
              <p className="text-lg text-gray-700">
                Grad takođe održava brojne kulturne manifestacije tokom ljeta, uključujući koncerte,
                pozorišne predstave i izložbe lokalne umjetnosti i zanata.
              </p>
            </div>
          </section>

          <div className="flex flex-col gap-8">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Utensils className="text-blue-600" size={32} />
                <h2 className="text-3xl text-slate-800">Gastronomija</h2>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                <p className="text-gray-700 mb-4">
                  Bihaćka kuhinja se oslanja na lokalne sastojke. Riba iz Une, posebno pastrmka i lipljen,
                  priprema se na žaru.
                </p>
                <p className="text-gray-700 mb-4">
                  Divljač iz okolnih šuma, uključujući srnetinu, je popularna zajedno sa tradicionalnim mesnim specijalitetima kao što su sudžuk i paštete.
                </p>
                <p className="text-gray-700">
                  <strong>Domaća rakija od šljiva i jabuka</strong> je omiljena među lokalnim stanovništvom i posjetiocima. 
                </p>
              </div>
            </section>

            <ImageWithFallback
              src="https://wonderfulbosnia.com/wp-content/uploads/2020/02/Kapetanova-Kula-Bihac-Bosna-i-Hercegovina-2-960x640.jpg"
              alt="Kapetanova Kula Bihac"
              className="w-full h-64 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
