import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { MapPin, Mountain, Building, Utensils, Trophy, Users } from "lucide-react";

export function Jajce() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[400px]">
        <ImageWithFallback
          src="https://scontent.fsjj4-1.fna.fbcdn.net/v/t39.30808-6/486615834_1064817509004147_3719477278037020037_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=2a1932&_nc_ohc=oH1mUz3z3EUQ7kNvwFSYCfZ&_nc_oc=AdrA1zBN2TTNWQE6b0J1VLY-JlejdVZo9Fxh2B8sbyB_svKYja3bXPVE2i-PNCoZHo4&_nc_zt=23&_nc_ht=scontent.fsjj4-1.fna&_nc_gid=dihyIUVYTHj8ENQjINgPOQ&_nc_ss=7a389&oh=00_Af1TLxXT2vbuw4MRqgAbRe64jql7_vjyFwYpNEeLrcrKnQ&oe=69E1775C"
          alt="Jajce vodopad"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={32} className="text-yellow-400" />
              <h1 className="text-5xl md:text-6xl">Jajce</h1>
            </div>
            <p className="text-xl">Grad vodopada i kraljeva</p>
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
              <strong>Jajce</strong> je historijski grad u centralnoj Bosni sa oko 27.000 stanovnika. Poznat je po
              spektakularnom <strong>vodopadu</strong> u centru grada gdje se rijeke <strong>Pliva</strong> i <strong>Vrbas</strong> spajaju. Ovo je
              jedinstven primjer grada sa vodopadom u samom središtu.
            </p>
            <p className="text-lg text-gray-700 mb-4 mt-6">
              Grad ima izuzetno bogatu historiju - bio je glavni grad <strong>bosanskog kraljevstva</strong> u 14. i
              15. stoljeću. Posljednji bosanski kralj, <strong>Stjepan Tomašević</strong>, krunisan je u Jajcu 1461. godine.
            </p>
            <p className="text-lg text-gray-700">
              Tokom Drugog svjetskog rata, Jajce je bio mjesto gdje je održano <strong>Drugo zasjedanje AVNOJ-a</strong>
              1943. godine, što je bila ključna tačka u formiranju moderne <strong>Jugoslavije</strong>. Grad je <strong>UNESCO</strong> kandidat za svjetsku baštinu.
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
                  Jajce se nalazi na mjestu gdje se rijeka Pliva uliva u Vrbas, stvarajući <strong>vodopad</strong> visok 21 metar. Grad je smješten na brdu iznad rijeke, pružajući spektakularne poglede.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Plivska jezera</strong>, kaskada prirodnih jezera uzvodno od grada, su popularna turistička
                  destinacija. Tradicionalne vodenice na Plivi su očuvane i danas služe kao muzej na
                  otvorenom.
                </p>
                <p className="text-lg text-gray-700">
                  Okolne šume i planine čine Jajce idealnim mjestom za ljubitelje prirode i outdoor
                  aktivnosti. Klima je umjereno kontinentalna sa svježim ljetima i snježnim zimama.
                </p>
              </div>
            </div>
            <ImageWithFallback
              src="https://www.million-bh.com/assets/img/destination/Jajce2.jpeg"
              alt="Medieval fortress"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </section>

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
                  <span><strong>Vodopad na Plivi</strong> - 21 metar visok vodopad u centru grada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Tvrđava Jajce</strong> - Srednjovjekovna tvrđava sa kulama</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Katakomba</strong> - Podzemna crkva iz 15. stoljeća</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Plivska jezera</strong> - Niz prirodnih jezera i vodenica</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Muzej AVNOJ-a</strong> - Historijski muzej u zgradi AVNOJ-a</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Medvjeđa pećina</strong> - Turistički uređena špiljа</span>
                </li>
              </ul>
              <div className="mt-6 flex justify-center">
                <img
                  src="https://visitjajce.ba/wp-content/uploads/2022/06/Visit-Jajce-ponuda-2.jpg"
                  alt="Visit Jajce attraction"
                  className="w-full max-w-2xl h-auto rounded-3xl shadow-lg object-cover"
                />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl mb-4 text-yellow-600">Vodenice na Plivi</h3>
              <p className="text-gray-700 mb-4">
                Tradicionalne <strong>vodenice</strong> na Plivskim jezerima su jedinstvena atrakcija. Ovih nekoliko
                očuvanih drvenih vodenica koristi se još od 14. stoljeća za mljevenje žita.
              </p>
              <p className="text-gray-700 mb-4">
                Danas su vodenice zaštićeni spomenici i turistička atrakcija, nudeći uvid u tradicionalne
                načine života i tehnologiju iz prošlosti.
              </p>
              <div className="mt-6 flex justify-center">
                <img
                  src="https://kathi-daniela.com/wp-content/uploads/2024/11/jajce-sehenswuerdigkeiten-10.jpg"
                  alt="Pliva watermills in Jajce"
                  className="w-full max-w-2xl h-auto rounded-3xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-yellow-600" size={32} />
            <h2 className="text-4xl text-slate-800">Kultura i historija</h2>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-yellow-400">
            <p className="text-lg text-gray-700 mb-4">
              Jajce je bio glavni grad <strong>bosanskog kraljevstva</strong> pod kraljem <strong>Tvrtkom II</strong> i <strong>Stjepanom Tomaševićem</strong>.
              Grad je pao pod osmansku vlast 1528. godine nakon dugotrajne opsade.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Tijekom austro-ugarske vladavine, Jajce je bio važan industrijski centar. Prva <strong>hidroelektrana</strong> u Evropi izgrađena je na Plivi <strong>1899. godine</strong>, samo tri dana nakon one u Niagari.
            </p>
            <p className="text-lg text-gray-700">
              Festival <strong>"Dani Jajca"</strong> se održava svake godine, slaveći lokalnu historiju, kulturu i tradiciju
              kroz koncerte, izložbe i historijske rekonstrukcije.
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Utensils className="text-blue-600" size={32} />
              <h2 className="text-3xl text-slate-800">Gastronomija</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <p className="text-gray-700 mb-4">
                Kuhinja Jajca kombinuje planinske i kontinentalne utjecaje. <strong>Pastrmka iz Plive i Vrbasa</strong> je lokalni specijalitet, često pripremana sa domaćim biljem.
              </p>
              <p className="text-gray-700 mb-4">
                Tradicionalni mesni specijaliteti uključuju sudžukice, kobasice i pečenje. Kiseli kupus
                i domaći sirevi su neizostavni dio lokalne kuhinje.
              </p>
              <p className="text-gray-700">
                Priprema se tradicionalna rakija, a lokalni mljekari proizvode
                vrhunski sir i kajmak.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="text-yellow-600" size={32} />
              <h2 className="text-3xl text-slate-800">Sport</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-400">
              <p className="text-gray-700 mb-4">
                Ribolov na Plivi i Vrbasu je popularna aktivnost. Rijeke su bogate pastrmkom i drugim
                vrstama riba, privlačeći ribolovce iz cijele regije.
              </p>
              <p className="text-gray-700 mb-4">
                Planinarenje i biciklizam su popularni zahvaljujući okolnim šumama i planinama. Putevi
                kroz prirodu nude očaravajuće poglede na vodopade i jezera.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
