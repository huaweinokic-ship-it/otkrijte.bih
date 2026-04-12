import { Mail } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Hvala što ste se pretplatili sa: ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.squarespace-cdn.com/content/v1/58f6738ac534a5c049f97f54/1496501873647-V69PC4XHBUGIKKKPOHQH/image-asset.jpeg"
          alt="Stari most u Mostaru"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-6">Dobrodošli u Bosnu i Hercegovinu</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Gdje drevni mostovi povezuju kulture, gdje planine susreću doline,
            i gdje svaki trenutak postaje dragocjeno sjećanje
          </p>
          <Link to="/destinations">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 shadow-lg border-2 border-yellow-400">
              Istražite destinacije
            </Button>
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6 text-slate-800">Zemlja bogate baštine</h2>
            <p className="text-lg text-gray-700 mb-4">
              Bosna i Hercegovina je država na Balkanskom poluotoku u jugoistočnoj Europi.
              Njena unutrašnjost je dom srednjovjekovnim selima, rijekama i jezerima, te kršnim Dinaridima.
              Nacionalna prijestolnica Sarajevo ima dobro očuvanu staru četvrt, Baščaršiju, sa znamenitostima
              poput džamije Gazi Husrev-bega iz 16. stoljeća.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Zemlja je poznata po svom prirodnom okruženju i kulturnoj baštini oblikovanoj od strane nekoliko
              civilizacija. Od osmanske arhitekture do austro-ugarskih utjecaja, svaki grad priča različitu
              priču zadržavajući toplu gostoljubivost po kojoj je Bosna i Hercegovina poznata.
            </p>
            <p className="text-lg text-gray-700">
              Bilo da vas privlače historijska mjesta, avanture na otvorenom ili kulturna iskustva,
              ova prekrasna zemlja nudi nešto jedinstveno za svakog putnika. Njeni raznovrsni krajolici
              se kreću od smaragdnih voda rijeke Neretve do snijegom pokrivenih vrhova savršenih za
              zimske sportove.
            </p>
          </div>
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1570831709673-03320e9d734f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYXJhamV2byUyMG9sZCUyMHRvd258ZW58MXx8fHwxNzcxNjczNjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Sarajevska stara čaršija"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Why Visit Section */}
      <section className="bg-blue-50 py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 opacity-20 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300 opacity-20 rounded-full translate-x-20 translate-y-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl text-center mb-12 text-slate-800">Zašto otkriti Bosnu i Hercegovinu?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <h3 className="text-2xl mb-4 text-blue-700">Prirodna čuda</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Zadivljujući vodopadi i netaknute rijeke</li>
                <li>• Veličanstveni planinski lanci savršeni za planinarenje</li>
                <li>• Raznovrsna flora i fauna u nacionalnim parkovima</li>
                <li>• Kristalno čista jezera i netaknuta divljina</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-400">
              <h3 className="text-2xl mb-4 text-yellow-600">Kulturno bogatstvo</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• UNESCO mjesta svjetske baštine</li>
                <li>• Osmanska i austro-ugarska arhitektura</li>
                <li>• Tradicionalni zanati i lokalne zanatlije</li>
                <li>• Živahni festivali i proslave</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <h3 className="text-2xl mb-4 text-blue-700">Autentična iskustva</h3>
              <p className="text-gray-700 mb-4">
                Doživite iskrenu gostoljubivost i tradicionalnu bosansku kulturu kahve. Otkrijte lokalnu
                kuhinju koja spaja mediteranske i orijentalne utjecaje, stvarajući jedinstvene okuse
                koje nećete naći nigdje drugdje.
              </p>
              <p className="text-gray-700">
                Prošetajte kroz stoljetne čaršije, posjetite restorane u vlasništvu porodica koji služe
                recepte prenesene kroz generacije, i povežite se sa lokalnim ljudima koji su ponosni što
                dijele svoju baštinu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white border-4 border-yellow-400 shadow-xl">
          <div className="text-center mb-8">
            <Mail className="mx-auto mb-4" size={48} />
            <h2 className="text-3xl mb-4">Ostanite povezani</h2>
            <p className="text-lg">
              Pretplatite se da primite priče, putničke uvide i novosti o Bosni i Hercegovini
            </p>
          </div>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Vaša email adresa"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white text-gray-900"
              />
              <Button type="submit" className="bg-slate-900 hover:bg-slate-800">
                Pretplati se
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}