# Kravlista för app

6. **När app besöks i webbläsaren ska din prototyp renderas med React** - löst

7. **React-trädet som renderas som ska bestå av minst 5st komponenter som du skrivit själv och som finns med i källkoden. (alla komponenter behöver inte renderas samtidigt)**

    I appen finns 5 nya komponenter: *LoginForm*, *SignupForm*, *Button*, *FormInput*, *Card*.

    Alla komponenter ligger i *components*-mappen och används i olika delar av applikationen.
    
    I *Button*-komponenten har jag tänkt bygga vidare med stöd för flera varianter av knappar där de ska kunna skilja sig åt med hjälp av till exempel en *variant*- eller *design*-prop för att styra utseendet.

8. **Dina React komponenter är skrivna med JSX syntaxen.**

    Även om jag använder TypeScript istället för JavaScript, kommer filerna fortfarande att innehålla JSX-kod. Det betyder att jag kan skriva mina React-komponenter med samma JSX-syntax, men med fördelen av TypeScripts typkontroll.

9. **Minst två av dina komponenter ska hantera ett "event" i Javascript, exempelvis från användaren.**

    I *LoginForm* och *SignupForm* hanterar jag användarens input via formulär och jag använder *handleSubmit* för att hantera när formuläret skickas:
    * i *LoginForm* --> hanterar när användaren försöker logga in och kontrollerar om uppgifterna matchar de som finns i *localStorage*.
    * i *SignupForm* --> hanterar när användaren skapar ett konto och sparar informationen i *localStorage*.

    Jag har även användarinteraktioner i *Header*, där använder *handleLogout* event för att hantera när användaren klickar på "Logga ut"-knappen.

10. **Minst två av dina komponenter ska använda sig av state för att rendera tillståndsbaserad information. (i.e. "conditional rendering")**

    * I App-komponenten använder jag *useState* för att hålla reda på om användaren är inloggad eller inte (*isLoggedIn*). Detta påverkar rendering av olika rutter. 
    
    * *isLoggedIn* styr om användaren får se länkar för att logga in/registrera sig eller om de istället ser en "Logga ut"-knapp.

    * I *LoginForm* och *SignupForm* hanterar jag användarens input i form av state (*data*) och använder denna data för att rendera felmeddelanden via *toast.error* om informationen inte är korrekt eller fullständig.

11. **En av dina komponenter använder sig av en Lifecycle metod eller hook för att påverka en annan komponents tillstånd. Render räknas inte som en lifecycle metod.**

    Jag använder en React-hook (*useState*) i App-komponenten för att hantera om en användare är inloggad eller inte (*isLoggedIn*). Det här tillståndet skickas vidare som props till bland annat *Header*, där jag visar en "Logga ut"-knapp om användaren är inloggad. När användaren loggar in via *LoginForm* uppdateras *isLoggedIn* med *setIsLoggedIn*, vilket påverkar andra komponenter som då ändrar sitt innehåll beroende på tillståndet.

12. **Via en av komponenterna ska användaren kunna spara information i LocalStorage.**

13. **Informationen i LocalStorage används vid renderingen av React-trädet.**

    Jag sparar användarens information (*namn*, *e-post* och *lösenord*) i *localStorage* när ett konto skapas. Vid inloggning hämtas denna information från *localStorage* och jämförs med det användaren fyller i. Om uppgifterna stämmer loggas användaren in och *isLoggedIn* sätts till true. Detta påverkar renderingen av React-trädet. Till exempel visas då en "Logga ut"-knapp i stället för "Logga in" och "Registrera". Informationen i *localStorage* används alltså aktivt för att styra hur komponenter visas.

14. **I app används egen css, eller ett bibliotek för att ge dina komponenter stil och form**

    Jag har valt att använda Tailwind CSS för att styla min applikation eftersom jag tycker att det är ett enkelt och effektivt verktyg. Jag är dessutom redan van vid att arbeta med Tailwind vilket gör utvecklingen smidigare och snabbare för mig.

15. **I app används egen css för att ge dina komponenter rörelser**

    Jag har använt egen CSS för att skapa rörelse i komponenten *Card*. Genom att använda *transform* och *transition* har jag gjort så att kortet vänds när användaren klickar på det. Det ger en interaktiv och dynamisk känsla till komponenten.