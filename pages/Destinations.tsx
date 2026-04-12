import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MapPin, Heart } from "lucide-react";

export function Destinations() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 border-b-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4">Istražite naše destinacije</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Od historijskih gradova do prirodnih čuda, otkrijte raznoliku ljepotu Bosne i Hercegovine
          </p>
        </div>
      </div>

      {/* Destinations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mostar */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ImageWithFallback
              src="https://funkytours.com/wp-content/uploads/2020/05/Mostar-old-bridge-during-the-sunset.jpg"
              alt="Stari most u Mostaru"
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-blue-600" size={24} />
                <h2 className="text-4xl text-slate-800">Mostar</h2>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Mostar je poznat po svom ikoničnom <strong>Starom mostu</strong>, remek-djelu osmanske inženjerije
                koji graciozno premošćuje smaragdnu rijeku <strong>Neretvu</strong>. Ovo UNESCO mjesto svjetske baštine
                nije samo most već simbol otpornosti i jedinstva, obnovljen nakon uništenja
                tokom 1990-ih godina.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Prošetajte kaldrmisanim ulicama starog grada, gdje tradicionalne zanatske radnje
                prodaju ručno izrađeno bakarno posuđe i ćilime. Gledajte hrabre <strong>skakače</strong> kako skaču
                sa mosta visokog 24 metra u hladnu rijeku ispod, tradicija koja datira stoljećima
                unazad.
              </p>
              <div className="flex items-start gap-2 text-gray-600">
                <Heart className="text-red-500 mt-1" size={20} />
                <p>
                  Grad prekrasno spaja istočne i zapadne utjecaje, vidljive u njegovoj arhitekturi,
                  kuhinji i kulturnim tradicijama.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sarajevo */}
        <div className="mb-20 bg-white p-8 rounded-lg shadow-md border-l-4 border-yellow-400">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-blue-600" size={24} />
                <h2 className="text-4xl text-slate-800">Sarajevo</h2>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Glavni grad Bosne i Hercegovine, Sarajevo, se često naziva "Jerusalemom Europe" zbog
                svoje raznolike vjerske baštine. Historijska <strong>Baščaršija</strong>, koja datira iz 15. stoljeća,
                ostaje kulturno i trgovačko srce grada.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Prošetajte <strong>Ferhadijom</strong>, ulicom gdje se džamije, katoličke i pravoslavne crkve, i sinagoge
                nalaze na pješačkoj udaljenosti jedne od drugih. Gradska arhitektura iz osmanskog perioda
                se besprijekorno spaja sa austro-ugarskim zgradama, stvarajući jedinstvenu evropsko-
                orijentalnu atmosferu.
              </p>
              <p className="text-lg text-gray-700">
                Sarajevo je bio domaćin <strong>Zimskih olimpijskih igara 1984. godine</strong> i okružen je planinama koje
                nude odlično skijanje zimi i planinarenje ljeti. Kultura kahve u gradu je legendarna—
                uzimanje vremena da uživate u pravilno pripravljenoj bosanskoj kahvi nije samo navika već
                cijenjen ritual.
              </p>
            </div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1570831709673-03320e9d734f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYXJhamV2byUyMG9sZCUyMHRvd258ZW58MXx8fHwxNzcxNjczNjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Sarajevski pejzaž"
              className="w-full h-[400px] object-cover rounded-lg shadow-xl order-1 md:order-2"
            />
          </div>
        </div>

        {/* Kravica Waterfalls */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ImageWithFallback
              src="https://cdn-imgix.headout.com/media/images/bc35d25c59f46a987468f5dc7b1b5591-27975-trogir-from-trogir---full-day-tour-to-kravica-waterfall--mostar-and-po-itelj-08.JPG"
              alt="Vodopad Kravica"
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-blue-600" size={24} />
                <h2 className="text-4xl text-slate-800">Vodopad Kravica</h2>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Smješten na rijeci Trebižat, <strong>Kravica</strong> je jedno od najspektakularnijih prirodnih čuda
                u Bosni i Hercegovini. Kaskadni vodopad formira zadivljujuću sedrastu barijeru visoku
                <strong>25 metara</strong>, stvarajući prirodni amfiteatar vode koji pada okružen bujnim zelenilom.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Tokom ljetnih mjeseci, smaragdni bazen u podnožju vodopada postaje popularno mjesto za
                kupanje gdje posjetioci mogu se rashladiti u kristalno čistoj vodi. Područje oko vodopada
                je savršeno za piknik i šetnje prirodom kroz okolne šume.
              </p>
              <div className="flex items-start gap-2 text-gray-600">
                <Heart className="text-red-500 mt-1" size={20} />
                <p>
                  Najbolje posjetiti u proljeće kada je protok vode na vrhuncu, stvarajući gromoglasnu
                  buku i spektakularan prikaz moći prirode.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mountains */}
        <div className="bg-slate-800 text-white p-8 rounded-lg shadow-md border-t-4 border-yellow-400">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-yellow-400" size={24} />
                <h2 className="text-4xl"><strong>Dinaridi</strong></h2>
              </div>
              <p className="text-lg mb-4">
                Bosna i Hercegovina je blagoslovljena veličanstvenim planinskim lancima koji nude
                cjelogodišnje aktivnosti na otvorenom. <strong>Dinaridi</strong> se protežu kroz zemlju, pružajući
                netaknute krajeve za planinarenje, skijanje i alpinizam.
              </p>
              <p className="text-lg mb-4">
                Planine poput <strong>Jahorine</strong>, <strong>Bjelašnice</strong> i <strong>Vlašića</strong> nude skijališta svjetske klase
                zimi i slikovite planinske staze ljeti. Netaknuta priroda, tradicionalna
                planinska sela i zadivljujući pogledi čine ova područja savršenim za one
                koji traže avanturu i mir.
              </p>
              <p className="text-lg">
                Planine su također dom raznovrsne divlje faune, uključujući mrke medvjede, vukove
                i brojne vrste ptica, što ih čini rajem za ljubitelje prirode i fotografe.
              </p>
            </div>
            <ImageWithFallback
              src="https://garaza.me/drd/wp-content/uploads/2022/07/Zastita-biodiverziteta-Nacionalni-park-Paklenica-copy.jpg"
              className="w-full h-[400px] object-cover rounded-lg shadow-xl order-1 md:order-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}