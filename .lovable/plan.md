

# JRM Business Development - Predstavitvena spletna stran

## Pregled projekta
Moderna, minimalistična, mobile-first B2B predstavitvena stran za JRM Business Development - slovensko podjetje za strateški poslovni razvoj v proizvodni industriji.

---

## Tehnična arhitektura

### Tehnologije
- **React + Vite + TypeScript** (Lovable stack)
- **TailwindCSS** za styling
- **react-i18next** za 4 jezike (SL, EN, DE, HR)
- **react-router-dom** za navigacijo
- **react-helmet-async** za SEO meta tage
- **EmailJS** za kontaktni obrazec (brez backend-a)

### Dizajn sistem
- **Ozadje**: Temno skoraj črno (#0B0B0F)
- **Akcent**: Zlata (#C8A24A)
- **Tekst**: Bela + zlata (naslovi)
- **Tipografija**: Inter (sans-serif), uppercase naslovi
- **Layout**: Max-width 1180px, veliko belega prostora
- **Kartice**: Subtilen zlat/siv border, rahla senca

---

## Struktura strani (5 + Home)

### 1. Home (/)
**Hero sekcija:**
- Naslov: "JRM Business Development"
- Podnaslov: "Strateški komercialni partner za industrijske in proizvodne verige v EU"
- Statement: "Ne posrednik. Ne agent. Temveč podaljšek vaše ekipe..."
- 2x CTA gumba → /contact
- Slika placeholder z dark overlay

**One-stop sourcing partner (8 kartic):**
- Plastics, Electronics, CNC Metals, Cable Harnesses
- Stamped Metals, Rubber, Engineered Foams, Construction

**Comprehensive support (6 ikon + opisi):**
- Project Management, Supplier Sourcing, Cost Optimization
- Logistics & Distribution, Quality Assurance, Technical Consulting

### 2. Podjetje (/company)
- "Kdo smo" - 3 odstavki o podjetju
- "Številke in dejstva" - statistika (20+ partnerjev, 80+ RFQ, ISO standardi...)

### 3. Storitve (/services)
4 kartice z naslovi in 3 bulleti:
- Business Development & Sourcing
- Supplier Sourcing & Qualification
- RFQ, CBD & pogajanja
- Zagon serijske proizvodnje

### 4. Tehnologije (/technologies)
Grid tagov/seznam tehnologij:
- Plastični brizgani izdelki, CNC obdelava, štancani kovinski deli
- Kabelski snopi, elektronski moduli, inženirske pene...

### 5. Industrije (/industries)
5 kartic:
- Avtomobilska industrija & mobilnost
- Industrijska avtomatizacija
- Elektronika in EMS
- Medicinska oprema
- Gradbeni sistemi

### 6. Kontakt (/contact)
- Naslov: "Raziščimo, ali obstaja sinergija."
- **EmailJS obrazec**: Ime, Podjetje, E-mail, Telefon, Sporočilo
- Checkbox: Strinjanje z zasebnostjo
- Toast sporočila (success/error)
- Direktni kontakt placeholder

---

## Navigacija

### Header
- Logo levo (/logo.svg placeholder)
- Desktop: Podjetje, Storitve, Tehnologije, Industrije, Kontakt
- Jezikovni switcher: SL | EN | DE | HR
- Mobile: Hamburger → Sheet/Drawer meni

### Footer
- "JRM Business Development d.o.o."
- "Strategic Commercial Partner for EU Manufacturing"
- Linki: Privacy, Sitemap
- Kontakt placeholder

---

## Internacionalizacija (i18n)

### 4 jeziki
- Slovenščina (SL) - privzeto
- Angleščina (EN)
- Nemščina (DE)
- Hrvaščina (HR)

### Struktura
- `/messages/sl.json`, `en.json`, `de.json`, `hr.json`
- URL format: `/sl/contact`, `/en/contact`...
- Jezikovni preklopnik v headerju

---

## SEO & Performance

### Meta podatki
- Naslov in opis za vsako stran
- Open Graph tags + og:image placeholder
- robots.txt + sitemap

### Optimizacija
- Lazy loading za slike
- Optimiziran font (Inter)
- Minimalen JS (brez animacij)
- Dostopnost: kontrast, fokus stanja, aria-labels

### 404 stran
- Minimalna z linkom nazaj domov

---

## Komponente

1. **Layout** - Header + Footer wrapper
2. **Header** - Navigacija + jezik switcher + mobile meni
3. **Footer** - Info + linki
4. **LanguageSwitcher** - 4-jezični preklopnik
5. **Section** - Wrapper za sekcije strani
6. **Card** - Kartica za storitve/industrije
7. **CategoryCard** - Kartica za kategorije (sourcing)
8. **IconFeature** - Ikona + opis (support sekcija)
9. **ContactForm** - EmailJS obrazec z validacijo
10. **SEO** - Meta tagi komponenta

---

## Struktura datotek

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── ui/ (obstoječe shadcn)
│   ├── LanguageSwitcher.tsx
│   ├── Section.tsx
│   ├── Card.tsx
│   ├── CategoryCard.tsx
│   ├── IconFeature.tsx
│   ├── ContactForm.tsx
│   └── SEO.tsx
├── pages/
│   ├── Home.tsx
│   ├── Company.tsx
│   ├── Services.tsx
│   ├── Technologies.tsx
│   ├── Industries.tsx
│   └── Contact.tsx
├── i18n/
│   ├── config.ts
│   └── messages/
│       ├── sl.json
│       ├── en.json
│       ├── de.json
│       └── hr.json
└── lib/
    └── emailjs.ts
```

---

## Naslednji koraki po implementaciji

1. Zamenjava placeholder slik z vašimi
2. Dodajanje EmailJS ključev
3. Pregled in prilagoditev prevodov
4. Testiranje na mobilnih napravah
5. SEO optimizacija besedil

