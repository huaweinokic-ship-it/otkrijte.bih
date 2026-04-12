import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { MapPin, Mountain, Building, Utensils, Trophy, Users } from "lucide-react";

export function Neum() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[400px]">
        <ImageWithFallback
          src="https://visitneum.com/wp-content/uploads/2025/07/neum-3.jpg"
          alt="Neum coast"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={32} className="text-yellow-400" />
              <h1 className="text-5xl md:text-6xl">Neum</h1>
            </div>
            <p className="text-xl">Jedini bosanskohercegovački pristup Jadranu</p>
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
              <strong>Neum</strong> je jedini grad u Bosni i Hercegovini sa izlazom na <strong>Jadransko more</strong>. Sa oko 4.900
              stanovnika, ovaj mali primorski grad privlači hiljade turista tokom ljetnih mjeseci
              koji dolaze uživati u suncu, moru i mediteranskoj atmosferi.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Grad se proteže duž <strong>24.5 km</strong> obale i predstavlja jedinih 20 kilometara bosanskohercegovačke
              morske granice. Neum razdvaja južni dio Hrvatske, Dubrovnik, od ostatka zemlje, stvarajući
              jedinstvenu geopolitičku situaciju.
            </p>
            <p className="text-lg text-gray-700">
              Historijski, Neum je bio dio <strong>Dubrovačke Republike</strong>, a kasnije Osmanskog carstva. Godine
              1699., Dubrovnik je ustupio ovaj teritorij Osmanlijama kako bi stvorio zaštitni pojas
              između sebe i Mletačke Republike. Ovaj dogovor je i danas vidljiv u granicama BiH.
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
                  Neum se nalazi u zaljevu između poluostrva <strong>Klek</strong> i rt <strong>Neum</strong>. Zaštićena pozicija u
                  zaljevu stvara idealne uslove za kupanje sa toplim i mirnim morem.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  More je čisto i bistro, sa temperaturom vode koja dostiže <strong>26°C</strong> tokom ljeta. Šljunkovite
                  i betonske plaže su opremljene ležaljkama i suncobranima, nudeći komfor i udobnost.
                </p>
                <p className="text-lg text-gray-700">
                  Mediteranska klima sa vrućim ljetima i blagim zimama čini Neum idealnim za ljetovanje.
                  Prosječno više od <strong>250 sunčanih dana</strong> godišnje donosi sigurno vrijeme za odmor.
                </p>
              </div>
            </div>
            <ImageWithFallback
              src="https://www.neum-bih.com/uploads/0000/1/2021/04/06/neum1.jpg"
              alt="Adriatic coast"
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
              <h3 className="text-2xl mb-4 text-blue-700">Plaže i aktivnosti</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Gradska plaža</strong> - Glavna plaža sa svim sadržajima</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Ronjenje</strong> - Istraživanje podmorskog svijeta Jadrana</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Nautički turizam</strong> - Marina za jahte i brodove</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Izleti brodom</strong> - Do obližnjih otoka i uvala</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span><strong>Ribolov</strong> - Sportski i rekreativni ribolov</span>
                </li>
              </ul>
              <div className="mt-6 flex justify-center">
                <img
                  src="https://itinari-images.s3.eu-west-1.amazonaws.com/activity/images/original/613b0392-39db-49cf-8add-8f2a248de431-istock-829611042.jpg"
                  alt="Neum beach activities"
                  className="w-full max-w-2xl h-[320px] rounded-3xl shadow-lg object-cover"
                />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl mb-4 text-yellow-600">Smještaj i hoteli</h3>
              <p className="text-gray-700 mb-4">
                Neum nudi raznovrsne opcije smještaja od modernih hotela sa četiri zvjezdice do
                privatnih apartmana i pansiona. Većina smještaja je smještena direktno uz more sa
                prelijepim pogledom na Jadran.
              </p>
             
              <p className="text-gray-700">
                Hoteli nude all-inclusive pakete, spa centre, bazene i druge sadržaje koji čine
                Neum atraktivnom destinacijom za porodični odmor.
              </p>
               <div className="mt-6 flex justify-center">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5f0741c1e4ac9c3b05c9964e/13209324-52cf-492e-b8e7-15dfd61c92d4/Neum+-+shutterstock_1165425604.jpg"
                  alt="Neum accommodation"
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
              Iako je mali grad, Neum ima <strong>bogatu kulturnu scenu</strong> tokom ljetnih mjeseci. Šetnica duž
              obale oživljava noćima sa uličnim performansima, koncertima i kulturnim događajima.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Tradicionalni <strong>hercegovački običaji i kultura</strong> su i dalje prisutni u Neumu. Lokalno
              stanovništvo održava tradicije kroz folkorne skupine i kulturna društva.
            </p>
            <p className="text-lg text-gray-700">
              Neum je također važan <strong>trgovački centar</strong> - mnogi turisti iz susjedne Hrvatske dolaze
              zbog povoljnijih cijena goriva, duhana i alkoholnih pića. 
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
                <strong>Neumska gastronomija</strong> je mediteranska sa jakim utjecajem dalmatinske kuhinje. Svježa riba
                i plodovi mora su osnova menija u restoranima duž obale.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Lignje na žaru, crni rižoto, brudet i pečena riba sa blitvom i krumpirom</strong> su tradicionalna
                jela. Škampi, jastog i hobotnice su dostupni u sezonama. 
              </p>
              <p className="text-gray-700">
                Lokalna vina iz Hercegovine savršeno se slažu sa svježim
                plodovima mora. Rakija od smokava i travarica su popularni digestivi.
              </p>
              <div className="mt-6 flex justify-center">
                <img
                  src="https://media-cdn.tripadvisor.com/media/daodao/photo-o/13/76/dc/6d/photo2jpg.jpg"
                  alt="Neum gastronomy"
                  className="w-full max-w-2xl h-[320px] rounded-3xl shadow-lg object-cover"
                />
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="text-yellow-600" size={32} />
              <h2 className="text-3xl text-slate-800">Sport i rekreacija</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-400">
              <p className="text-gray-700 mb-4">
                Vodeni sportovi su najpopularniji u Neumu. <strong>Jet ski</strong>, <strong>parasailing</strong>, <strong>banana boat</strong> i <strong>paddle boarding</strong> su dostupni na glavnim plažama tokom sezone.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Ronjenje i snorkeling</strong> nude priliku da istražite podmorski svijet Jadrana sa njegovom
                bogatom florom i faunom. Nekoliko ronilačkih klubova nudi kurseve i vođene ture.
              </p>
              <p className="text-gray-700">
                Planinarenje u okolnim planinama nudi alternativu plažama. Staze vode kroz mediteransku
                vegetaciju sa prelijepim pogledima na more i otoke.
              </p>
              <div className="mt-6 flex justify-center">
                <img
                  src="https://scontent.fsjj4-1.fna.fbcdn.net/v/t39.30808-6/468542078_1347056789996333_2896682569241035367_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=06a7ca&_nc_ohc=9kLXnbTzt-IQ7kNvwFiSmji&_nc_oc=AdpLpIJKWqAT7E-3rsCewlj84j6IBzLhz7JVWtCxBeKZCmwWeY02BAmS-QfuwgTzhz8&_nc_zt=23&_nc_ht=scontent.fsjj4-1.fna&_nc_gid=sdZVDLgokUd5px5KXS-2kQ&_nc_ss=7a389&oh=00_Af0ax3Vd-OnN8pEh4ZH18xKkFJs5JO3meCrJc4YEihANbA&oe=69E1726D"
                  alt="Neum water sports"
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
