import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { MapPin, Mountain, Building, Utensils, Trophy, Users } from "lucide-react";

export function Blagaj() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[400px]">
        <ImageWithFallback
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Blagaj_Ceilings.jpg/960px-Blagaj_Ceilings.jpg"
          alt="Blagaj tekija"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={32} className="text-yellow-400" />
              <h1 className="text-5xl md:text-6xl">Blagaj</h1>
            </div>
            <p className="text-xl">Mistični derviški samostan na izvoru Bune</p>
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
              <strong>Blagaj</strong> je mali grad udaljen svega 12 kilometara od Mostara, poznato po <strong>Blagajskoj tekiji</strong> - derviškom samostanu iz 16. stoljeća. Sa oko 2.500 stanovnika, Blagaj je jedno od
              najspektakularnijih turističkih mjesta u Hercegovini.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Tekija</strong> je izgrađena direktno ispod 200 metara visoke litice, pored izvora rijeke <strong>Bune</strong>.
              Voda izbija iz pećine stvarajući jedan od najmoćnijih <strong>kraških izvora</strong> u Evropi sa protokom
              od oko 43 m³/s.
            </p>
            <p className="text-lg text-gray-700">
              Historijski, Blagaj je bio sjedište hercegovačkih upravitelja, <strong>hercega</strong>, u srednjem vijeku,
              što je dalo ime cijeloj regiji Hercegovine. Ostaci tvrđave <strong>Stjepan-grada</strong> se i dalje mogu
              vidjeti iznad tekije.
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
                  Blagaj se nalazi u dolini rijeke <strong>Bune</strong>, koja izvire iz velikog kraškog izvora u podnožju
                  stijene. Voda je izuzetno čista i hladna, sa temperaturom oko <strong>10°C</strong> tokom cijele godine.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Rijeka Buna teče oko 9 km prije nego što se ulijeva u Neretvu. Njene kristalne
                  vode su dom brojnih vrsta riba, uključujući pastrmku i krkušu.
                </p>
                <p className="text-lg text-gray-700">
                  Mediteranska klima sa blagim zimama i toplim ljetima čini Blagaj idealnim za posjete
                  tokom cijele godine, mada je proljeće najljepše doba kada je priroda najpregnantnija.
                </p>
              </div>
            </div>
            <ImageWithFallback
              src="https://www.travelsewhere.net/wp-content/uploads/2017/10/DSC_0220-7.jpg"
              alt="River scenery"
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
                  <span><strong>Blagajska tekija</strong> - Derviški samostan iz 16. stoljeća</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Izvor Bune</strong> - Spektakularan kraški izvor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Stjepan-grad</strong> - Ostaci srednjovjekovne tvrđave</span>
                </li>
                
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Velagić kuća</strong> - Muzej tradicionalne arhitekture</span>
                </li>
              </ul>
              <div className="mt-6 flex justify-center">
                <img
                  src="https://s.inyourpocket.com/gallery/277466.jpg"
                  alt="Blagaj attractions"
                  className="w-full max-w-2xl h-[320px] rounded-3xl shadow-lg object-cover"
                />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl mb-4 text-yellow-600">Derviški red</h3>
              <p className="text-gray-700 mb-4">
                Tekija u Blagaju pripada <strong>bektašijskom derviškom redu</strong>, mističnoj grani islama.
                Zgrada je izgrađena oko <strong>1520. godine</strong> i služila je kao mjesto meditacije i
                duhovnog učenja.
              </p>
              <p className="text-gray-700">
                Posjetitelji mogu razgledati tekiju i naučiti o derviškim tradicijama. Interijer
                sadrži originalne elemente iz osmanskog perioda, uključujući kaligrafiju i
                tradicionalan namještaj.
              </p>
              <div className="mt-6 flex justify-center">
                <img
                  src="https://cdnuploads.aa.com.tr/uploads/Contents/2021/05/22/thumbs_b_c_a7c426bed77c9fec5a136a3febe8358a.jpg?v=105406"
                  alt="Derviški red in Blagaj"
                  className="w-full max-w-2xl h-[320px] rounded-3xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-yellow-600" size={32} />
            <h2 className="text-4xl text-slate-800">Kultura</h2>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-yellow-400">
            <p className="text-lg text-gray-700 mb-4">
              Blagaj je izuzetno važan za razumijevanje osmanske baštine u Bosni i Hercegovini. Tekija
              predstavlja rijedak primjer očuvane derviške arhitekture u regiji i privlači istraživače
              i turiste iz cijelog svijeta.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Tradicionalne kuće u Blagaju pokazuju karakterističnu hercegovačku arhitekturu sa <strong>kamenim zidovima</strong> i drvenim balkonima. Mnoge od ovih kuća su obnovljene i danas služe kao restorani
              gdje posjetitelji mogu probati lokalnu kuhinju.
            </p>
            <p className="text-lg text-gray-700">
              Svake godine, Blagaj privlači fotografe, umjetnike i filmske producente koji dolaze da
              snime jedinstvenu ljepotu tekije i izvora. Mnogobrojni filmovi i dokumentarci su snimljeni
              na ovom čarobnom mjestu. 
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
                Restorani duž rijeke Bune nude svježu pastrmku direktno iz rijeke. Pastrmka se
                tradicionalno priprema na žaru sa lukom i limunom, servirajući se uz svježe pecivo.
              </p>
              <p className="text-gray-700 mb-4">
                Hercegovačka kuhinja u Blagaju uključuje dolmu, japrak, musaku i razne mesne specijalitete.
                Lokalna vina, posebno Žilavka i Blatina, su idealan dodatak obroku.
              </p>
              <p className="text-gray-700">
                Domaća baklava, tulumbe i hurmašice su omiljeni deserti koje možete uživati uz tursku
                ili bosansku kahvu serviranu u tradicionalnom stilu.
              </p>
              <div className="mt-6 flex justify-center">
                <img
                  src="https://scontent.fsjj4-1.fna.fbcdn.net/v/t39.30808-6/482345021_1201492165311567_2733479243248372456_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_ohc=E_GyeJYyLrgQ7kNvwH6Mn4A&_nc_oc=Ado749CHCk_u3Cf__fDBRk5PyLCxs9hdko8TONVwtFrEpxxxGjt4yP4seW3Tjr8gBrk&_nc_zt=23&_nc_ht=scontent.fsjj4-1.fna&_nc_gid=WTo98GtkpPQ4BAp-X5NPbg&_nc_ss=7a389&oh=00_Af1zqSNI_YQMtUM4pH2Hi9FZV7psbxKQD_oDJsKMOX-mVg&oe=69E1909D"
                  alt="Gastronomija u Blagaju"
                  className="w-full max-w-2xl h-[320px] rounded-3xl shadow-lg object-cover"
                />
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="text-yellow-600" size={32} />
              <h2 className="text-3xl text-slate-800">Aktivnosti</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-400">
              <p className="text-gray-700 mb-4">
                <strong>Ronjenje u izvoru Bune</strong> privlači ljubitelje podvodnih istraživanja. Pećinski sistem
                ispod izvora je djelimično istražen, mada je ronjenje dozvoljeno samo iskusnim
                roniocima zbog hladnoće vode.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Planinarenje</strong> do tvrđave Stjepan-grad nudi spektakularne poglede na cijelu dolinu Bune
                i okolne planine. Staza je umjereno zahtjevna i traje oko sat vremena.
              </p>
              <p className="text-gray-700">
                <strong>Fotografisanje</strong> je najpopularnija aktivnost - tekija je jedan od
                najfotografisanijih mjesta u Bosni i Hercegovini. 
              </p>
              <div className="mt-6 flex justify-center">
                <img
                  src="https://www.hercegovina.info/img/repository/2014/09/image_640x396/ronioci_51969369.jpg"
                  alt="Fotografisanje u Blagaju"
                  className="w-full max-w-2xl h-[320px] rounded-3xl shadow-lg object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
