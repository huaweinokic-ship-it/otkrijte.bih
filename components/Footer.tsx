import { MapPin, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-auto border-t-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">O Bosni i Hercegovini</h3>
            <p className="text-gray-300">
              Zemlja gdje se Istok susreće sa Zapadom, gdje se drevna historija miješa sa prirodnim ljepotama,
              i gdje svaki kutak priča jedinstvenu priču.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Brzi linkovi</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <MapPin size={16} />
                <Link to="/destinations">Sve destinacije</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <MapPin size={16} />
                <Link to="/city/sarajevo">Sarajevo</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <MapPin size={16} />
                <Link to="/city/mostar">Mostar</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <MapPin size={16} />
                <Link to="/city/bihac">Bihać</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Globe size={16} />
                <Link to="/discover">Otkrijte više</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Eksterni resursi</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Saznajte više na Wikipediji →
                </a>
              </li>
              <li>
                <a
                  href="https://whc.unesco.org/en/statesparties/ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  UNESCO svjetska baština →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p className="mb-2">&copy; 2026 Otkrijte Bosnu i Hercegovinu. Promotivna platforma koja slavi našu prekrasnu zemlju.</p>
          <p className="text-sm text-yellow-400">
            Autori: Jasmina Mešković, Kanita Nokić, Ajna Šeta
          </p>
        </div>
      </div>
    </footer>
  );
}