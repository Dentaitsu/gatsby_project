# Analyse: Gatsby Framework

## 1. Einleitung

Gatsby ist ein auf React basierendes Open-Source-Framework zur Erstellung statischer Websites. HTML-Seiten werden bereits zur Build-Zeit generiert (Static Site Generation, SSG) und über ein CDN ausgeliefert. Für die Datenabfrage setzt Gatsby auf eine eigene GraphQL-Datenschicht, die verschiedene Datenquellen (CMS, APIs, Dateisysteme) in eine einheitliche Abfrageschicht zusammenführt.

Dieser Bericht analysiert das Framework hinsichtlich Ökosystem, Performance, Geschäftsmodell, Skalierbarkeit sowie seiner aktuellen Marktposition.

---

## 2. Ökosystem

### 2.1 Technologie-Stack

Gatsby kombiniert drei zentrale Technologien:

- **React** – für das Rendering der UI-Komponenten (Frontend und Backend-Logik)
- **GraphQL** – als einheitliche Datenschicht zur Abfrage von Inhalten aus verschiedenen Quellen
- **Webpack** – für das Bundling und die Optimierung der Assets

React ist mit über 234'000 Sternen auf GitHub eines der meistverwendeten Frontend-Frameworks weltweit. Das spricht grundsätzlich für die technologische Basis, auf der Gatsby aufbaut.

### 2.2 Community und Entwicklung

Das Gatsby-Repository auf GitHub verzeichnet rund 4'000 Contributors und über 158 Releases in zehn Jahren Entwicklung. Der Master-Branch wird nach wie vor regelmässig aktualisiert, und im Januar 2026 erschien mit v5.16 das neueste Release, das React 19- und Node.js 24-Unterstützung brachte.

Allerdings ist die Aktivität deutlich zurückgegangen. Nach der Übernahme durch Netlify im Februar 2023 wurden grosse Teile des ursprünglichen Gatsby-Teams entlassen. Laut Community-Berichten ist nur noch ein einziger originaler Gatsby-Mitarbeiter aktiv. Es werden primär Bugfixes und Kompatibilitäts-Updates veröffentlicht, aber keine wesentlichen neuen Features mehr entwickelt.

### 2.3 CLI

Gatsby verfügt über eine eigene CLI mit den wichtigsten Befehlen:

| Befehl           | Funktion                                         |
| ---------------- | ------------------------------------------------ |
| `gatsby new`     | Neues Projekt erstellen                          |
| `gatsby develop` | Lokalen Entwicklungsserver starten               |
| `gatsby build`   | Produktions-Build generieren                     |
| `gatsby serve`   | Build lokal ausliefern (Vorschau vor Deployment) |
| `gatsby clean`   | Cache und public-Ordner leeren                   |

### 2.4 Migration

Für Entwickler mit React-Erfahrung ist der Einstieg niederschwellig, da Gatsby die gleichen Komponenten und CSS-Patterns verwendet. Die grösste Umstellung betrifft das Routing: Gatsby nutzt ein dateibasiertes Routing-System (Dateien im `src/pages/`-Verzeichnis werden automatisch zu Routen), was sich von klassischem React Router unterscheidet. Hinzu kommt die Einarbeitung in die GraphQL-Datenschicht, die für reine React-Entwickler neu ist.

---

## 3. Performance

Gatsby liefert aus Nutzersicht sehr schnelle Websites. Die wichtigsten Mechanismen dafür sind:

**Static Site Generation (SSG):** Seiten werden beim Build-Prozess komplett vorgerendert. Der Browser erhält fertiges HTML, ohne dass ein Server zur Laufzeit rechnen muss (kein SSR) und ohne dass der Client die Seite zuerst aufbauen muss (kein reines Client-Side Rendering). Das Resultat sind extrem kurze Time-to-First-Byte-Werte.

**Bild-Optimierung (gatsby-plugin-image):** Bilder werden automatisch skaliert, komprimiert und in moderne Formate wie WebP konvertiert. Durch Lazy Loading werden Bilder erst geladen, wenn sie in den sichtbaren Bereich scrollen, was die initiale Ladezeit massiv reduziert.

**Code Splitting und Prefetching:** Gatsby teilt den Code intelligent auf und lädt nur die Ressourcen, die für die aktuelle Seite notwendig sind. Links zu anderen Unterseiten werden im Hintergrund vorab geladen (Prefetching), sobald sie im Viewport erscheinen. Das ergibt eine nahezu verzögerungsfreie Navigation.

### Einschränkung

Die Build-Zeiten können bei grossen Websites (tausende Seiten, viele Bilder) erheblich ansteigen. Im Extremfall kann ein Build 30+ Minuten dauern. Incremental Builds, die dieses Problem in Gatsby Cloud lösten, wurden nach der Netlify-Übernahme nicht in Netlify portiert.

---

## 4. Geschäftsmodell und Lizenz

Gatsby steht unter der **MIT-Lizenz** und ist vollständig kostenlos nutzbar. Die Monetarisierung erfolgt indirekt über Netlify, das Gatsby im Februar 2023 übernommen hat.

Netlify verfolgt ein Freemium-Modell:

| Stufe      | Zielgruppe                     | Kosten       |
| ---------- | ------------------------------ | ------------ |
| Free       | Einzelpersonen, Hobby-Projekte | Kostenlos    |
| Pro        | Professionelle Entwickler      | Ab $19/Monat |
| Enterprise | Unternehmen mit hohem Traffic  | Individuell  |

Die kostenpflichtigen Stufen bieten höhere Bandbreite, Team-Funktionen, erweiterte Sicherheit und Priority-Support.

---

## 5. Skalierbarkeit

### 5.1 Deployment

Der produktive Build landet im `public/`-Verzeichnis des Projekts. Das sind reine statische Dateien (HTML, CSS, JS), die auf praktisch jedem Webserver oder CDN gehostet werden können. Es gibt kein Vendor Lock-in — man kann jederzeit den Hosting-Anbieter wechseln.

### 5.2 Managed Service vs. Self-Hosted

| Aspekt              | Managed (Netlify, Vercel)                   | Self-Hosted                            |
| ------------------- | ------------------------------------------- | -------------------------------------- |
| Skalierung          | Automatisch (CDN-basiert)                   | Manuell (Serverkapazitäten anpassen)   |
| Build-Pipeline      | Integriert (Git-Push → automatischer Build) | Eigenverantwortlich (CI/CD einrichten) |
| Wartungsaufwand     | Gering                                      | Hoch                                   |
| Kontrolle           | Eingeschränkt                               | Volle Kontrolle über Infrastruktur     |
| Kosten bei Wachstum | Steigend (nutzungsbasiert)                  | Hardware-Kosten, aber vorhersehbarer   |

---

## 6. Aktuelle Marktsituation (Stand März 2026)

### 6.1 Rückgang der Popularität

Gatsby hat in den letzten Jahren erheblich an Popularität verloren. Laut der State-of-JavaScript-Umfrage sank die Retention Rate (Anteil der Entwickler, die Gatsby nach Nutzung erneut wählen würden) von 89% im Jahr 2019 auf nur 38% im Jahr 2022. In der Community wird Gatsby zunehmend als „nicht mehr aktiv weiterentwickelt" wahrgenommen.

### 6.2 Ursachen

Die Hauptgründe für den Rückgang lassen sich wie folgt zusammenfassen:

1. **Gatsby Cloud als Wendepunkt:** Ab 2019 verlagerte Gatsby Inc. Ressourcen vom Open-Source-Framework auf den proprietären Cloud-Dienst. Wichtige Features wie Incremental Builds waren nur dort verfügbar, was die Nutzung auf anderen Plattformen erschwerte.

2. **Übernahme durch Netlify (2023):** Die meisten Gatsby-Kernentwickler wurden entlassen. Versprochene Feature-Portierungen (z.B. Incremental Builds) wurden nicht umgesetzt.

3. **GraphQL-Komplexität:** Die obligatorische GraphQL-Datenschicht schafft eine zusätzliche Abstraktionsebene, die für viele Projekte unnötig komplex ist. Externe Datenquellen müssen eigene Gatsby-Plugins pflegen, was eine Abhängigkeit erzeugt.

4. **Konkurrenz:** Next.js (flexibler, SSR + SSG + ISR), Astro (weniger JavaScript, schnellere Builds) und andere Frameworks haben Gatsby in Funktionsumfang und Developer Experience überholt.

### 6.3 Aktueller Stand

Das Framework wird noch minimal gepflegt: v5.16 (Januar 2026) brachte React 19- und Node.js 24-Kompatibilität. Für bestehende Projekte funktioniert Gatsby weiterhin, da die generierten statischen Dateien plattformunabhängig sind. Für neue Projekte wird Gatsby von der Mehrheit der Community jedoch nicht mehr empfohlen.

---

## 7. SWOT-Analyse

### Stärken

- Hervorragende Performance durch SSG
- Einheitliche GraphQL-Datenschicht für diverse Quellen
- Grosses Plugin-Ökosystem (2'500+ Plugins)
- Einfacher Einstieg für React-Entwickler
- MIT-Lizenz, kein Vendor Lock-in beim Deployment

### Schwächen

- Lange Build-Zeiten bei grossen Websites
- Obligatorische GraphQL-Datenschicht erhöht Komplexität
- Kaum noch aktive Weiterentwicklung
- Community schrumpft, viele Plugins nicht mehr gepflegt

### Chancen

- Bestehende grosse Codebasis könnte durch Community-Fork wiederbelebt werden
- Für kleine bis mittlere Content-Websites weiterhin eine solide Lösung
- React 19-Kompatibilität hält technische Relevanz aufrecht

### Risiken

- Netlify könnte Wartung ganz einstellen
- Plugin-Ökosystem veraltet zunehmend
- Migration auf Alternativen wird mit der Zeit aufwändiger
- Kein klarer Fahrplan für die Zukunft kommuniziert

---

## 8. Vergleich mit Alternativen

| Kriterium          | Gatsby             | Next.js         | Astro                |
| ------------------ | ------------------ | --------------- | -------------------- |
| Rendering          | SSG (+ SSR/DSG)    | SSR, SSG, ISR   | SSG (+ SSR)          |
| Datenschicht       | GraphQL (fest)     | Frei wählbar    | Frei wählbar         |
| Framework-Basis    | React              | React           | Framework-agnostisch |
| Build-Zeiten       | Langsam bei Grösse | Schneller (ISR) | Sehr schnell         |
| Aktive Entwicklung | Minimal            | Sehr aktiv      | Sehr aktiv           |
| Lernkurve          | Mittel (GraphQL)   | Niedrig–Mittel  | Niedrig              |
| Ideal für          | Content-Sites      | Alles           | Content-Sites, Blogs |

---

## 9. Fazit

Die Realität sieht jedoch so aus, dass Gatsby nach der Netlify-Übernahme nur noch minimal gewartet wird. Für bestehende Projekte ist das kurzfristig kein Problem, da die generierten statischen Dateien unabhängig vom Framework funktionieren. Für neue Projekte gibt es mit Next.js und Astro Alternativen, die aktiver entwickelt werden, flexibler sind und eine grössere Community hinter sich haben.

Wer heute ein neues Webprojekt auf Basis von React starten will, sollte Next.js in Betracht ziehen. Für rein statische Content-Websites ist Astro eine leichtgewichtige Alternative. Gatsby bleibt eine Option für Teams, die bereits investiert haben und deren Anforderungen sich mit dem bestehenden Feature-Set decken lassen.

---

## Quellen

- Gatsby GitHub Repository: https://github.com/gatsbyjs/gatsby
- Gatsby Dokumentation: https://www.gatsbyjs.com/docs/
- Gatsby CLI Referenz: https://www.gatsbyjs.com/docs/reference/gatsby-cli/
- Gatsby v5.16 Release Notes: https://www.gatsbyjs.com/docs/reference/release-notes/v5.16/
- Netlify Akquisition: https://www.netlify.com/press/netlify-acquires-gatsby
- Smashing Magazine – "The End Of My Gatsby Journey" (2024)
- Bejamas – "Gatsby is going down" (2025)
- State of JavaScript Survey (2019–2022)
