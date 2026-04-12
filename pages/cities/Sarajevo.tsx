import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { MapPin, Mountain, Building, Utensils, Trophy, Users } from "lucide-react";

export function Sarajevo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-[400px]">
        <ImageWithFallback
          src="https://forbes.n1info.ba/wp-content/uploads/2024/10/sarajevo100-scaled.jpg"
          alt="Sarajevo panorama"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={32} className="text-yellow-400" />
              <h1 className="text-5xl md:text-6xl">Sarajevo</h1>
            </div>
            <p className="text-xl">Srce Bosne i Hercegovine - Gdje se susreću civilizacije</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* General Info */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Building className="text-blue-600" size={32} />
            <h2 className="text-4xl text-slate-800">Opće informacije</h2>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Sarajevo</strong> je glavni grad i najveći grad Bosne i Hercegovine sa preko 275.000 stanovnika
              u gradu i više od 550.000 u metropolitanskom području. Grad je poznat kao "Jerusalem Evrope"
              zbog svog vjerskog diverziteta i kulturne raznolikosti.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Osnovan u 15. stoljeću tokom osmanske vladavine, Sarajevo je od tada bio značajan centar
              trgovine i kulture. Grad je bio domaćin <strong>Zimskih olimpijskih igara 1984. godine</strong>, što je
              označilo vrhunac njegovog razvoja i međunarodnog priznanja.
            </p>
            <p className="text-lg text-gray-700">
              Danas je Sarajevo živahna metropola koja spaja tradiciju i modernost. Stara čaršija <strong>Baščaršija</strong> odiše osmanskim šarmom, dok moderni dijelovi grada pokazuju evropski duh.
              Grad je također poznat po svojoj otpornosti i kao simbol multietničkog suživota.
            </p>
          </div>
        </section>

        {/* Geography */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Mountain className="text-yellow-600" size={32} />
                <h2 className="text-4xl text-slate-800">Geografija</h2>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-yellow-400">
                <p className="text-lg text-gray-700 mb-4">
                  Sarajevo se nalazi u srcu Bosne i Hercegovine, u dolini rijeke <strong>Miljacke</strong>, okruženo
                  Dinarskim planinskim lancem. Grad se proteže na nadmorskoj visini od oko 500-700 metara.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Okružen planinema <strong>Bjelašnica</strong>, <strong>Igman</strong>, <strong>Jahorina</strong> i <strong>Trebević</strong>, Sarajevo nudi spektakularne
                  prirodne pejzaže. Ove planine su bile domaćini olimpijskih takmičenja 1984. godine i
                  danas su popularne destinacije za skijanje i planinarenje.
                </p>
                <p className="text-lg text-gray-700">
                  Kontinentalna klima sa utjecajem planinske klime čini Sarajevo gradom sa hladnim zimama
                  sa snijegom i toplim ljetima, idealno za cjelogodišnje aktivnosti na otvorenom.
                </p>
              </div>
            </div>
            <ImageWithFallback
              src="https://cdn.britannica.com/01/137401-050-C2F0EEDA/Sarajevo-Bos-Her.jpg"
              alt="Planine oko Sarajeva"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </section>

        {/* Tourism */}
        <section className="mb-16 bg-blue-50 p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-blue-600" size={32} />
            <h2 className="text-4xl text-slate-800">Turizam</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl mb-4 text-blue-700">Glavne atrakcije</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Baščaršija</strong> - Stara osmanska čaršija sa tradicionalnim zanatskim radnjama</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Vijećnica</strong> - Historijska gradska vijećnica u austro-ugarskom stilu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Sebilj</strong> - Česma i simbol Sarajeva na Baščaršiji</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Gazi Husrev-begova džamija</strong> - Najznačajnija osmanska džamija</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Latinska ćuprija</strong> - Mjesto atentata koji je pokrenuo Prvi svjetski rat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Tunel spasa</strong> - Muzej posvećen opsadi Sarajeva 1992-1995</span>
                </li>
              </ul>
            </div>
            <ImageWithFallback
              src="https://adria.fun/wp-content/uploads/2023/07/20230716_1402564-min.jpg"
              alt="Baščaršija"
              className="w-full h-[350px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </section>

        {/* Culture */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-yellow-600" size={32} />
            <h2 className="text-4xl text-slate-800">Kultura</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ImageWithFallback
              src="https://visitbih.ba/wp-content/uploads/2018/05/sarajevo_vjerski_objekti.jpg"
              alt="Sarajevska arhitektura"
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-400 mb-6">
                <h3 className="text-2xl mb-4 text-slate-800">Vjerska raznolikost</h3>
                <p className="text-gray-700 mb-3">
                  Sarajevo je jedinstveno po tome što se u starom dijelu grada nalaze džamije, katoličke
                  i pravoslavne crkve, te sinagoge - sve u blizini jedna druge. 
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                <h3 className="text-2xl mb-4 text-slate-800">Kulturni događaji</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Sarajevo Film Festival</strong> je jedan od najvažnijih filmskih festivala u jugoistočnoj Evropi,
                  održava se svake godine u augustu. Grad je također domaćin brojnih muzičkih festivala,
                  pozorišnih predstava i umjetničkih izložbi tokom cijele godine.
                </p>
                <p className="text-gray-700">
                  <strong>Ramazanske noći</strong> tokom ramazana stvaraju čarobnu atmosferu sa tradicionalnom muzikom
                  i hranom koja privlači i lokalno stanovništvo i turiste.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Food & Sports Combined */}
        <div className="space-y-16">
          {/* Food */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Utensils className="text-blue-600" size={32} />
              <h2 className="text-3xl text-slate-800">Gastronomija</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                <p className="text-gray-700 mb-4">
                  Sarajevska kuhinja je spoj istočnjačkih i západnih kulinarskih tradicija. <strong>Ćevapi</strong>, <strong>burek</strong> i <strong>Begova čorba</strong> su samo neka od poznatih jela.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Bosanska kahva</strong> se služi u tradicionalnim kafanama gdje je ritual
                  pijenja kahve jednako važan kao i sam napitak.
                </p>
                <p className="text-gray-700">
                  Ne propustite bosansku <strong>baklavu</strong>, tufahije i lokalne slastice koje možete pronaći
                  u brojnim slastičarnama širom grada.
                </p>
              </div>
              <ImageWithFallback
                src="https://delishglobe.com/wp-content/uploads/2025/08/Cevapi-Grilled-Minced-Meat-Sausages-500x500.png"
                alt="Sarajevska tradicionalna hrana - ćevapi"
                className="w-full h-[300px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </section>

          {/* Sports */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="text-yellow-600" size={32} />
              <h2 className="text-3xl text-slate-800">Sport</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <ImageWithFallback
                src="https://bosnainfo.ba/wp-content/uploads/2022/10/Screenshot_1-26.png"
                alt="FK Sarajevo - gradski fudbalski klub"
                className="w-full h-[300px] object-cover rounded-lg shadow-xl"
              />
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-400">
                <p className="text-gray-700 mb-4">
                  Fudbal je najpopularniji sport, sa <strong>FK Sarajevo</strong> i <strong>FK Željezničar</strong> kao glavnim klubovima.
                  Košarkaški klub <strong>Bosna</strong> je također historijski značajan.
                </p>
                <p className="text-gray-700">
                  Planine oko Sarajeva nude odlične mogućnosti za <strong>skijanje</strong>, <strong>snowboarding</strong>, <strong>planinarenje</strong> i <strong>mountain biking</strong> tokom cijele godine. Olimpijska brdsko-skijaška staza na Bjelašnici i Igmanu, kao i skakaonice na Malom polju, i dalje se koriste.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
