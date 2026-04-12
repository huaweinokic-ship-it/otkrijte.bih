import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useState } from "react";
import { Send, Calendar, Users, Coffee } from "lucide-react";

export function Discover() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Hvala ${formData.name}! Uskoro ćemo Vas kontaktirati.`);
    setFormData({ name: "", email: "", interests: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 border-b-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4">Otkrijte više</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Planirajte svoje putovanje i saznajte o iskustvima koja vas čekaju
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Cultural Experiences */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl mb-6 text-slate-800">Kulturna iskustva</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Coffee className="text-blue-600 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h3 className="text-2xl mb-2 text-slate-700">Kultura kahve</h3>
                    <p className="text-gray-700">
                      Bosanska kahva je više od običnog pića - to je društvena institucija. Za razliku od espressa
                      ili turske kahve, bosanska kahva se priprema u posebnom loncu zvanom <strong>džezva</strong> i služi
                      sa <strong>rahat lokumom</strong> i čašom vode. Ritual pijenja kahve je o uzimanju vremena, razgovoru
                      i povezivanju sa drugima. Lokalci kažu "kahvu treba piti polako, kao da je piješ očima."
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Calendar className="text-yellow-600 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h3 className="text-2xl mb-2 text-slate-700">Festivali i događaji</h3>
                    <p className="text-gray-700">
                      Tokom cijele godine, Bosna i Hercegovina ugošćava brojne kulturne događaje i festivale.
                      Od <strong>Sarajevo Film Festivala</strong>, jednog od najvažnijih filmskih festivala u jugoistočnoj
                      Evropi, do tradicionalnih folklornih događaja koji prikazuju stoljetne običaje, muziku i ples. <strong>Baščaršijske noći</strong> u Sarajevu tokom ramazanastvaraju čarobnu atmosferu sa tradicionalnom
                      muzikom, hranom i zanatima koji ispunjavaju staru čaršiju.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Users className="text-blue-600 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h3 className="text-2xl mb-2 text-slate-700">Lokalna gostoljubivost</h3>
                    <p className="text-gray-700">
                      Ljudi Bosne i Hercegovine su poznati po svojoj toploj gostoljubivosti i velikodušnosti.
                      Ne čudite se ako vas lokalci pozovu na kahvu ili ponude upute čak i kada niste pitali.
                      Ova iskrena gostoprimljivost potiče iz duboko ukorijenjene kulturne tradicije dočeka
                      stranaca i tretiranja gostiju sa najvećim poštovanjem. "Gost je Božji dar" je
                      uobičajena izreka koja odražava ovaj stav.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <ImageWithFallback
                src="https://www.tasteatlas.com/images/ingredients/2fb7d198c430474d86b57a8984e3c29c.jpg"
                alt="Baščaršija"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-2xl mb-4 text-slate-800">Jeste li znali?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bosna i Hercegovina ima <strong>tri službena jezika</strong> </li>
                  <li>• Zemlja je dom jednoj od posljednjih preostalih <strong>prašuma</strong> Evrope</li>
                  <li>• Sarajevo ima najdužu <strong>opsadu</strong> u modernoj ratnoj historiji ali je izronilo kao živahan, multikulturalni grad</li>
                  <li>• Čuvena <strong>Sarajevska hagada</strong>, jedna od najstarijih jevrejskih rukopisa, čuva se ovdje</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-blue-600">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Send className="mx-auto mb-4 text-blue-600" size={48} />
              <h2 className="text-4xl mb-4 text-slate-800">Kontaktirajte nas</h2>
              <p className="text-lg text-gray-700">
                Imate pitanja o posjeti Bosni i Hercegovini? Želite podijeliti svoja iskustva?
                Rado ćemo čuti od vas!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Vaše ime</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Unesite vaše ime"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email adresa</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="vas@email.com"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="interests">Šta vas najviše interesuje?</Label>
                <Input
                  id="interests"
                  name="interests"
                  type="text"
                  value={formData.interests}
                  onChange={handleChange}
                  placeholder="npr. priroda, historija, kultura, avantura"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Vaša poruka</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Recite nam šta biste željeli znati..."
                  rows={6}
                  className="mt-2"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
              >
                Pošalji poruku
              </Button>
            </form>
          </div>
        </section>

        {/* Additional Info */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl mb-6 text-slate-800">Spremni za istraživanje?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Bosna i Hercegovina čeka sa otvorenim rukama i bezbroj priča za ispričati. Od
            odzvanjajućeg poziva na molitvu u drevnim džamijama do zvona historijskih crkava, od
            žubora vodopada do tihog šapta planinskih vjetrova - svaki trenutak ovdje je
            poziv da otkrijete nešto izuzetno.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ovo nije samo destinacija; to je iskustvo koje ostaje s vama dugo nakon što
            ste se vratili kući. Bilo da tražite avanturu u prirodi, uranjanje u historiju,
            ili jednostavno toplu šolju kahve sa prijateljskim lokalcima, pronaći ćete svoj savršeni trenutak ovdje.
          </p>
        </section>
      </div>
    </div>
  );
}
