
const BusinessPlan = () => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-4xl font-bold mb-6">Affärsplan</h1>
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-semibold mb-3">Sammanfattning</h2>
          <p className="text-lg">FurEver Friends är en digital plattform som samlar djurägare, djurrelaterade företag, volontärer och potentiella djurägare på en och samma plats. Idén uppstod ur en personlig upplevelse av att information om djurrelaterade tjänster är utspridd över flera plattformar eller helt saknas, vilket gör det tidskrävande och krångligt för djurägare att hitta relevanta tjänster, sociala aktiviteter och rådgivning.</p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-3">Problemet som löses</h2>
          <p className="text-lg">Plattformen adresserar problemet med utspridd och svåråtkomlig information om djurrelaterade tjänster genom att skapa en centraliserad digital hubb där användare kan:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-lg">Hitta lokala tjänster via kartfunktioner</li>
            <li className="text-lg">Delta i sociala aktiviteter med andra djurägare</li>
            <li className="text-lg">Få rådgivning och kunskapsutbyte via forum</li>
            <li className="text-lg">Få tillgång till premiumtjänster för fördjupad rådgivning</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-3">Affärsmodell</h2>
          <p className="text-lg">FurEver Friends använder en freemium-modell där intäkter genereras genom:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-lg">Premiummedlemskap med avancerade funktioner</li>
            <li className="text-lg">Samarbeten med djurrelaterade företag</li>
            <li className="text-lg">Riktad annonsering från djurrelaterade företag</li>
          </ul>
          <p className="mt-4 text-lg">Plattformen har en låg kostnadsprofil då teamet arbetar för delägarskap och verksamheten drivs utan fasta lokalkostnader, vilket ger en fördelaktig avkastning på investeringen.</p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-3">Målgrupp</h2>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-lg">Djurägare som söker relevant information och gemenskap</li>
            <li className="text-lg">Djurrelaterade företag (veterinärer, pensionat, butiker) som vill nå kunder</li>
            <li className="text-lg">Volontärer och djurhem som organiserar adoption</li>
            <li className="text-lg">Potentiella djurägare som söker information innan köp/adoption</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-3">Organisation och team</h2>
          <p className="text-lg">Teamet bakom FurEver Friends består av:</p>
          <ul className="list-disc pl-6 mt-2">
            <li className="text-lg">Marinela-Adelheid Dragomir (VD, grundare)</li>
            <li className="text-lg">Pär Andersson (CTO)</li>
            <li className="text-lg">Mariana Sava (Marknadsföringschef)</li>
            <li className="text-lg">2-3 utvecklare (rekrytering pågår)</li>
          </ul>
        </div>

        <div>
          <p className="text-lg">FurEver Friends strävar efter att bli den ledande digitala plattformen för djurägare genom att erbjuda en centraliserad och interaktiv lösning som förenklar vardagen, stärker gemenskapen och bidrar till ett mer ansvarsfullt djurägande. Genom kontinuerlig utveckling och användarcentrerad innovation siktar plattformen på att skapa en trygg och engagerande gemenskap för alla djurälskare.</p>
        </div>
      </div>
    </div>
  )
}

export default BusinessPlan