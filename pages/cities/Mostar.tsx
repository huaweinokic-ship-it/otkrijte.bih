import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { MapPin, Mountain, Building, Utensils, Trophy, Users } from "lucide-react";

export function Mostar() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-[400px]">
        <ImageWithFallback
          src="https://media.cntraveller.com/photos/650c037b9a4941357e144469/4:3/w_1884,h_1413,c_limit/Mostar,%20Bosnia%20and%20Herzegovina-GettyImages-909655800.jpeg"
          alt="Stari most Mostar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={32} className="text-yellow-400" />
              <h1 className="text-5xl md:text-6xl">Mostar</h1>
            </div>
            <p className="text-xl">Grad Starog mosta - Biser Hercegovine</p>
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
            <strong>Mostar</strong> je peti po veličini grad u Bosni i Hercegovini sa preko 113.000 stanovnika.
              Smješten na rijeci <strong>Neretvi</strong>, grad je administrativni centar Hercegovačko-neretvanskog kantona
              i kulturno središte <strong>Hercegovine</strong>.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Ime grada potiče od <strong>"mostara"</strong>, čuvara mosta, koji su nekada nadzirali drveni most preko Neretve.
              Današnji Stari most, izgrađen <strong>1566. godine</strong>, je najpoznatija znamenitost i UNESCO-ova svjetska baština.
            </p>
            <p className="text-lg text-gray-700">
              Most je uništen tokom rata 1993. godine, ali je rekonstruisan i ponovo otvoren 2004. godine,
              postajući simbol pomirenja i multietničkog suživota. Danas je Mostar jedan od najposjećenijih
              gradova u zemlji.
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
                  Mostar leži u dolini rijeke Neretve, okružen planinskim lancima <strong>Velež</strong>, <strong>Čvrsnica</strong> i <strong>Prenj</strong>.
                  Grad se nalazi na nadmorskoj visini od oko 60 metara, što mu daje blagu mediteransku klimu.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Neretva, smaragdno zelena rijeka, protiče kroz središte grada stvarajući spektakularne
                  prirodne pejzaže. Kanjon Neretve u blizini grada je popularna destinacija za rafting i
                  avanturističke sportove.
                </p>
                <p className="text-lg text-gray-700">
                  Topla ljeta i blage zime čine Mostar idealnim za posjete tokom cijele godine, posebno
                  u proljeće i jesen kada su temperature najprijatnije.
                </p>
              </div>
            </div>
            <ImageWithFallback
              src="https://www.perceptivetravel.com/issues/0618/photos/bosnia-mostar-from-above.jpg"
              alt="Neretva kanjon"
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
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-4 text-blue-700">Glavne atrakcije</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span><strong>Stari most</strong> - UNESCO svjetska baština iz 16. stoljeća</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span><strong>Kujundžiluk</strong> - Stara čaršija sa zanatskim radnjama</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span><strong>Koski Mehmed-pašina džamija</strong> - Sa pogledom na Stari most</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span><strong>Karađoz-begova džamija</strong> - Najstarija džamija u Mostaru</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl mb-4 text-yellow-600">Skakanje sa Starog mosta</h3>
                <p className="text-gray-700 mb-4">
                  Tradicija skakanja sa Starog mosta datira od <strong>1664</strong>. godine. Hrabri lokalni skakači
                  se bacaju sa visine od <strong>24 metra</strong> u ledenu vodu Neretve, demonstrirajući hrabrost i
                  spretnost.
                </p>
                <p className="text-gray-700 mb-4">
                  Svakog ljeta održava se <strong>RedBull Cliffdiving prvenstvo</strong> u skokovima sa Starog mosta,
                  privlačeći takmičare i gledatelje iz cijelog svijeta.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <img
                  src="https://www.mostar.ba/storage/2022/08/red-bull-skokovi2.jpg"
                  alt="Mostar cliff diving"
                  className="w-full max-w-[460px] h-[235px] mx-auto rounded-3xl shadow-lg object-cover"
                />
              </div>
              <div>
                <img
                  src="https://visitbih.ba/wp-content/uploads/2017/07/aa_picture_20130727_369237_high-scaled.jpg"
                  alt="Skakači sa Starog mosta"
                  className="w-full max-w-[460px] h-[235px] mx-auto rounded-3xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-yellow-600" size={32} />
            <h2 className="text-4xl text-slate-800">Kultura</h2>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-yellow-400">
            <p className="text-lg text-gray-700 mb-4">
              Mostar je poznat po spoju istočne i zapadne kulture. Osmanska arhitektura starog grada
              kontrastrira sa austro-ugarskim zgradama u zapadnom dijelu, stvarajući jedinstvenu
              atmosferu.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Grad je domaćin brojnih kulturnih događaja, uključujući <strong>Mostarska liska</strong> (festival sevdalinke), Mostar Summer Fest, 
             Festival gitare i Jazz Festival koji privlače umjetnike i posjetitelje iz cijelog regionacije.
            </p>
            <p className="text-lg text-gray-700">
              Tradicionalni zanati kao što su <strong>bakarstvo</strong>, <strong>kožarstvo</strong> i <strong>izrada ćilima</strong> i dalje se prakticiraju
              u Kujundžiluku, gdje turisti mogu kupiti autentične ručno izrađene suvenire.
            </p>
            <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-6">
              <img
                src="https://www.earthtrekkers.com/wp-content/uploads/2017/07/Old-Town-Mostar-Street.jpg.optimal.jpg"
                alt="Mostar old town street"
                className="w-full md:w-1/2 max-w-[520px] h-[320px] rounded-3xl shadow-lg object-cover"
              />
              <img
                src="https://mostarsummerfest.com/wp-content/uploads/2025/07/2-2.png"
                alt="Mostar summer festival"
                className="w-full md:w-1/2 max-w-[520px] h-[320px] rounded-3xl shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* Food & Sports */}
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Utensils className="text-blue-600" size={32} />
              <h2 className="text-3xl text-slate-800">Gastronomija</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <p className="text-gray-700 mb-4">
                Mostarska kuhinja kombinuje mediteranske i orijentalne utjecaje.
              </p>
              <p className="text-gray-700 mb-4">
                Hercegovačka vina, posebno <strong>Žilavka</strong> i <strong>Blatina</strong>, su prepoznatljiva po svijetu.
                Vinogradi u okolini Mostara proizvode vrhunska vina već stoljećima.
              </p>
              <p className="text-gray-700">
                <strong>Slatko od smokava</strong>, baklava i rahat lokum su obavezni deserti koje možete
                uživati uz tradicionalnu bosansku kahvu.
              </p>
              <div className="mt-6 flex justify-center">
                <img
                  src="https://scontent.fsjj4-1.fna.fbcdn.net/v/t39.30808-6/511264239_24156681654021197_869942959589292410_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0327a3&_nc_ohc=sU1BuS1Al8kQ7kNvwE8zsNp&_nc_oc=AdodhRp1MG4b1_8yF6y8BdyO12bSbEDBbVXuHcKM9s4O_G2-Zd-T75O6hhloNKxd_3Y&_nc_zt=23&_nc_ht=scontent.fsjj4-1.fna&_nc_gid=JI4sMVcsZSGFrM81K5Azxg&_nc_ss=7a389&oh=00_Af3x-7gJEYr_IUKGvZzkNKf7KbqbzS0ZZkERK8F8fc1Rtg&oe=69E16CB7"
                  alt="Mostar gastronomy"
                  className="w-full max-w-2xl h-[320px] rounded-3xl shadow-lg object-cover"
                />
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="text-yellow-600" size={32} />
              <h2 className="text-3xl text-slate-800">Sport</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-400">
              <p className="text-gray-700 mb-4">
                Fudbalski klub <strong>Velež Mostar</strong> je jedan od najuspješnijih klubova u historiji bosanskohercegovačkog
                fudbala. Gradski stadion "Vrapčići" redovno ugošćava fudbalske utakmice.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Rafting na Neretvi</strong> je popularna sportska aktivnost, sa rutama kroz spektakularne
                kanjone koji nude uzbudljiva iskustva za avanturiste.
              </p>
              <p className="text-gray-700">
                <strong>Penjanje</strong>, <strong>paraglajding</strong> i <strong>mountain biking</strong> su sve popularniji sportovi zahvaljujući
                okolnim planinama i raznovrsnom terenu.
              </p>
              <div className="mt-6 flex justify-center">
                <img
                  src="https://grandriver.ba/wp-content/uploads/2020/06/Rafting-65-scaled.jpg"
                  alt="Mostar rafting"
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
