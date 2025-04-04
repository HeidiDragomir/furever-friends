
const ProjectIdea = () => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-4xl font-bold mb-6">Projektidé</h1>
      <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-semibold mb-3">Beskrivning av applikationen</h2>
        <p className="text-lg">FurEver Friends är en omfattande digital plattform som ska sammanföra djurägare, djurrelaterade företag och andra djurintresserade. Applikationen ska fungera som en allt-i-ett lösning för djurägare som idag måste navigera mellan flera olika plattformar för att hitta relevant information och tjänster.</p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-3">Hur kommer applikationen att fungera?</h2>
        <p className="text-lg mb-2">Applikationen kommer att vara tillgänglig som en responsiv webbplattform. Användare kommer att kunna skapa personliga profiler för sig själva och sina husdjur, där de kan dela information, bilder och erfarenheter.</p>
        <p className="text-lg">När en användare registrerar sig kommer de att ange grundläggande information om sig själva och sina husdjur, vilket möjliggör personaliserade rekommendationer och relevant innehåll baserat på husdjurstyp, ålder, geografisk plats och specifika behov.</p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-3">Funktioner och erbjudanden</h2>
        <p className="text-lg">FurEver Friends erbjuder en rad funktioner som täcker de mest efterfrågade behoven hos djurägare:</p>
        <ul className="list-disc pl-6 mt-2">
          <li className="text-lg"><span className="font-semibold">Interaktiv karta:</span> Hitta djurrelaterade tjänster i närheten, inklusive veterinärer, djurpensionat, hundrastgårdar och djurvänliga restauranger.</li>
          <li className="text-lg"><span className="font-semibold">Community-funktioner:</span> Skapa och delta i evenemang för djurägare, såsom promenader och träffar.</li>
          <li className="text-lg"><span className="font-semibold">Marknadsplats:</span> En sektion där användare kan skänka, byta eller sälja djurtillbehör.</li>
          <li className="text-lg"><span className="font-semibold">Adoptions- och fosterprogram:</span> Samarbete med djurhem för att förenkla adoptioner och förmedling av fosterfamiljer.</li>
          <li className="text-lg"><span className="font-semibold">Forum:</span> Ett aktivt forum uppdelat i olika kategorier för rådgivning, erfarenhetsutbyte och diskussioner.</li>
          <li className="text-lg"><span className="font-semibold">Kalenderfunktion:</span> Möjlighet att boka och hantera djurrelaterade tjänster och evenemang.</li>
          <li className="text-lg"><span className="font-semibold">Freemium-modell:</span> En gratis grundversion med en premiumtjänst som erbjuder utökade funktioner, såsom exklusiva rabatter och expertkonsultationer.</li>
          </ul>
          </div>

          <div>
        <h2 className="text-3xl font-semibold mb-3">Teknologier vi kommer att använda</h2>
        <p className="text-lg">För att bygga FurEver Friends använder vi moderna och pålitliga tekniska verktyg som gör appen lättanvänd, säker och snabb:</p>
        <ul className="list-disc pl-6 mt-2">
          <li className="text-lg">Användargränssnitt (frontend): Vi använder React vilket hjälper oss bygga tydliga och snygga sidor. Det gör att appen känns modern och enkel att använda.</li>
          <li className="text-lg">Server och funktioner bakom kulisserna (backend): Här använder vi ASP.NET, som är ett kraftfullt verktyg för att hantera allt det tekniska som inte syns men som får appen att fungera (som att hantera bokningar, skicka meddelanden och mycket mer).</li>
          <li className="text-lg">Databas: All information som användarkonton, karttjänster och foruminlägg sparas i databaser. Vi kommer att använda MySQL.</li>
          <li className="text-lg">Kartfunktioner: Vi använder Google Maps så användaren enkelt kan hitta närmaste veterinär, hundrastgård eller annan djurvänlig plats.</li>
          <li className="text-lg">Betalningar: Om användaren vill köpa något eller använda premiumfunktioner sker det säkert via Stripe, ett betalsystem som används av företag världen över.</li>
          </ul>
          </div>

          <div>
        <h2 className="text-3xl font-semibold mb-3">Projektbegränsningar</h2>
        <p className="text-lg">Inför Draknästet fokuserar vi på att utveckla och lansera en MVP (Minimum Viable Product) med grundläggande funktioner:</p>
        <ul className="list-disc pl-6 mt-2">
          <li className="text-lg">Interaktiv karta för djurrelaterade tjänster</li>
          <li className="text-lg">Community-funktioner för evenemangsplanering</li>
          <li className="text-lg">Marknadsplats för att byta och donera djurartiklar</li>
          <li className="text-lg">Grundläggande forum för rådgivning.</li>
          <li className="text-lg">Matchningstjänst för djurpassning</li>
          </ul>

          <p className="text-lg mt-2">Senare planerar vi att utöka funktionaliteten med:</p>
        <ul className="list-disc pl-6 mt-2">
          <li className="text-lg">Premiumtjänster och prenumerationsmodeller</li>
          <li className="text-lg">AI-driven rekommendationer för djurrelaterade tjänster</li>
          <li className="text-lg">Integration av veterinarärrådgivning via videokonsultation</li>
          </ul>
          </div>
        </div>
    </div>
  )
}

export default ProjectIdea