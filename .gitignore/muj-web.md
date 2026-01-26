# Osobní stránka - Hero sekce | Paso za krokem průvodce

## Cíl
Vytvoříme první část osobní webové stránky s moderním designem:
- **Header** s logem a navigačním menu
- **Hero sekce** s textem a fotografií maskovanou pomocí SVG
- Bude to responzivní a bude vypadat profesionálně

Inspirace: [Obrázek zadání - Marlon Web Designer]
![alt text](image.png)

---

## Krok 1: CSS proměnné a barevné schéma

Začneme s **CSS custom properties** (proměnné), které budeme používat v celé stránce.

### Proč proměnné?
- Snadno změníš barvy, když se ti budou zdát jiné
- Konzistence v celém designu
- Méně psaní kódu

### Nástroj na barvy
Vyber si svou barevnou paletu na: **[Coolors.co](https://coolors.co)** nebo **[Color Hunt](https://colorhunt.co)**

Doporučené barvy:
- Primární (modrá): např. `#2563EB` nebo `#3B82F6`
- Tmavá (text): `#1F2937` nebo `#000000`
- Světlá (pozadí): `#F3F4F6` nebo `#FFFFFF`
- Akcent: podle tvého výběru

### CSS - Soubor style.css
Vytvoř ve složce projektu soubor `style.css` a vlož do něj tento základní setup:

```css
:root {
  /* Barvy */
  --primary-color: #3B82F6;        /* Hlavní modrá - zvolil/a sis na Coolors */
  --dark-text: #1F2937;            /* Tmavý text */
  --light-bg: #F9FAFB;             /* Světlé pozadí */
  --white: #FFFFFF;                /* Bílá */
  
  /* Fonty */
  --font-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-size-base: 16px;
  
  /* Rozestupy */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
}
```

**Tvůj úkol:**
- [ ] Vyber si barevnou paletu na Coolors.co
- [ ] Nahraď barvy ve `:root` svými barvami
- [ ] Přidej vlastní `--font-main` - viz. Google Fonts (krok níže)

### Google Fonts
1. Jdi na [Google Fonts](https://fonts.google.com)
2. Hledej moderní font (např. "Poppins", "Inter", "Outfit")
3. Klikni "Select" a pak kopeír odkaz
4. Přidej do hlavičky HTML: `<link href="..." rel="stylesheet">`
5. Vlož do CSS: `--font-main: 'Tvůj Font', sans-serif;`

---

## Krok 2: Základní HTML struktura a reset

Vytvoř v projektu soubor s názvem `index.html` a vlož do něj tento kód:

```html
<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tvoje jména | Web Designer</title>
  
  <!-- Google Fonts - ⬇️ NAHRAĎ VLASTNÍM FONTEM -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Header bude tady -->
  
  <!-- Hero sekce bude tady -->
  
  <script src="script.js"></script>
</body>
</html>
```

**Tvůj úkol:**
- [ ] Vytvoř soubory: `index.html`, `style.css`, `script.js`
- [ ] Vlož výše uvedený HTML kód
- [ ] Nahraď Google Fonts odkazem na tvůj vybraný font

---

## Krok 3: HTML struktura headeru a menu

Otevři `index.html` a do `<body>` vlož sekci **header** (tento kód vlož hned za otevírací tag `<body>`):

```html
<header class="header">
  <div class="container">
    <div class="header-content">
      
      <!-- Logo / Jméno -->
      <a href="#home" class="logo">Marlon</a>
      
      <!-- Navigační menu -->
      <nav class="nav">
        <a href="#home" class="nav-link active">Home</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#skills" class="nav-link">Skills</a>
        <a href="#works" class="nav-link">Works</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>
      
    </div>
  </div>
</header>
```

**Co se děje:**
- `<header>` - hlavičková sekce
- `.logo` - tvoje jméno / logo
- `.nav` - navigační menu
- `href="#home"` - odkaz na sekce (budeme se skrolovat pomocí `#` - anchor links)

**Tvůj úkol:**
- [ ] Nahraď "Marlon" svým jménem
- [ ] Změň menu položky na své (nebo nech jak je)
- [ ] Přidej HTML do hlavičky před hero sekcí

---

## Krok 4: Stylování headeru a menu

Otevři soubor `style.css` a přidej do něj (pod předchozí kód) tyto styly:

```css
/* Reset a základy */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-main);
  color: var(--dark-text);
  background-color: var(--light-bg);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

/* Header */
.header {
  background-color: var(--white);
  padding: var(--spacing-md) 0;
  position: sticky;
  top: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo */
.logo {
  font-size: 24px;
  font-weight: 700;
  color: var(--dark-text);
  text-decoration: none;
  /* Tvůj nápad: Přidej vlastní barvu, font-style nebo i ikonu */
}

/* Menu */
.nav {
  display: flex;
  gap: var(--spacing-lg);
}

.nav-link {
  text-decoration: none;
  color: var(--dark-text);
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--primary-color);
}

/* Aktivní link - modřát dolní čára */
.nav-link.active {
  color: var(--primary-color);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--primary-color);
}
```

**Co se děje:**
- `.header` má `position: sticky;` - zůstane nahoře při skrolování
- `.nav` používá **flexbox** - menu vedle sebe
- `.nav-link.active::after` - tvoří modrou čáru pod aktivním odkazu (pomocí `::after` pseudo-prvku)

**Tvůj úkol:**
- [ ] Vlož CSS do `style.css`
- [ ] **Experimentuj:** Změň barvu `.logo`, přidej větší `padding` do headeru, zmeň velikost fontu
- [ ] Otevři si DevTools (F12) a zkus měnit barvy přímo v prohlížeči

---

## Krok 5: HTML struktura hero sekce

V souboru `index.html` vlož pod uzavírací tag `</header>` tuto novou sekci:

```html
<section class="hero" id="home">
  <div class="container">
    <div class="hero-content">
      
      <!-- Levá strana - text -->
      <div class="hero-text">
        <h1>
          Hi,<br>
          I'm <span class="highlight">Marlon</span><br>
          Web Designer
        </h1>
        
        <p>Creative and passionate about building beautiful digital experiences.</p>
        
        <a href="#contact" class="btn btn-primary">Contact</a>
      </div>
      
      <!-- Pravá strana - fotka -->
      <div class="hero-image">
        <svg class="image-mask" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <!-- SVG maska bude tady - vytvoříme v kroku 6 -->
          <defs>
            <clipPath id="circleMask">
              <circle cx="200" cy="200" r="180" />
            </clipPath>
          </defs>
          <image href="tvoje-fotka.jpg" width="400" height="400" clip-path="url(#circleMask)" />
        </svg>
      </div>
      
    </div>
  </div>
</section>
```

**Co se děje:**
- `id="home"` - na toto se odkazujeme v menu (`href="#home"`)
- `.hero-text` - levá strana s textem
- `<span class="highlight">` - zvýraznění slova "Marlon"
- `clip-path="url(#circleMask)"` - **kruhová maska** pro fotku (SVG)
- `.hero-image` - pravá strana s fotografií

**Tvůj úkol:**
- [ ] Vyber si fotografii sebe (nebo placeholder)
- [ ] Vytvoř složku `images` a ulož tam fotku
- [ ] Nahraď `tvoje-fotka.jpg` cestou k tvé fotce
- [ ] Změň text v `<h1>` na své jméno
- [ ] Přidej vlastní podpis/popis v `<p>`

---

## Krok 6: Stylování hero sekce a SVG maska

Do souboru `style.css` přidej na konec další styly pro Hero sekci:

```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: var(--spacing-xl) 0;
  background-color: var(--light-bg);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
}

/* Text sekce */
.hero-text h1 {
  font-size: 56px;          /* Tvůj nápad: Změň velikost */
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--spacing-lg);
  color: var(--dark-text);
}

.hero-text h1 .highlight {
  color: var(--primary-color);  /* Modrá barva */
}

.hero-text p {
  font-size: 18px;
  color: #6B7280;           /* Tmavě šedá */
  margin-bottom: var(--spacing-lg);
  max-width: 400px;
}

/* Tlačítko */
.btn {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background-color: var(--primary-color);
  color: var(--white);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
}

/* Fotka - SVG */
.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-mask {
  width: 100%;
  max-width: 400px;
  height: auto;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));
}

.image-mask image {
  width: 100%;
  height: 100%;
}
```

**Co se děje:**
- `grid-template-columns: 1fr 1fr;` - **2 sloupce** stejné šíře (text + fotka)
- `min-height: 100vh;` - hero zabere **minimálně celou výšku okna**
- `.highlight` - modrá barva na slova v nadpisu
- `.btn-primary:hover` - tlačítko se zvedne a má stín

**Tvůj úkol:**
- [ ] Vlož CSS do `style.css`
- [ ] **Experimentuj:** Změň font-size h1, změ padding tlačítka, změň barvu `.highlight`
- [ ] Zkus smazat `grid-template-columns: 1fr 1fr;` a nahraď `flex` - co se stane?

---

## Krok 7: SVG maska pro fotografii (volitelný detail)

SVG maska tvoří **kruhový tvar** kolem fotky. Máš dvě možnosti:

### Možnost A: Jednoduchá kruhová maska (už máš!)
Maska kterou máš v HTML (`circleMask`) je jednoduchý kruh. Pokud to stačí - super!

```html
<clipPath id="circleMask">
  <circle cx="200" cy="200" r="180" />
</clipPath>
```

- `cx="200" cy="200"` - střed kruhu (200x200 je střed čtverce 400x400)
- `r="180"` - poloměr kruhu

### Možnost B: Organický tvar (Blob)
Chceš moderní "tekutý" tvar? Použijeme generátor **[Blobmaker.app](https://www.blobmaker.app/)**.

1. Jdi na stránku a vygeneruj si tvar, který se ti líbí.
2. Klikni na ikonu **kódu `</>`** (Copy SVG) a zkopíruj kód.
3. Kód z Blobmakeru vypadá nějak takto:
   ```html
   <svg viewBox="0 0 200 200" xmlns="...">
     <path fill="#FF0066" d="M50.8,-61..." transform="translate(100 100)" />
   </svg>
   ```
4. **Jak to vložit do tvého HTML (`index.html`):**
   - Najdi svůj `<svg class="image-mask" ...>`
   - Změň `viewBox` na hodnotu z Blobmakeru (často `0 0 200 200`)
   - Uvnitř `<clipPath>` vymaž `<circle>` a vlož tam `<path ... />` z Blobmakeru.

Výsledek v kódu:
```html
<svg class="image-mask" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="circleMask">
      <!-- Path zkopírovaný z Blobmakeru: -->
      <path d="M50.8,-61.3C..." transform="translate(100 100)" />
    </clipPath>
  </defs>
  <!-- Fotka musí mít nastavenou velikost, aby pokryla celý tvar -->
  <image href="tvoje-fotka.jpg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#circleMask)" />
</svg>
```

### Možnost C: Pouze CSS border-radius
Pokud nechceš SVG - můžeš i jednoduše:
```css
.hero-image img {
  border-radius: 50%;  /* Ideální kruh */
  /* nebo */
  border-radius: 30%; /* Zaoblenec */
}
```

**Tvůj úkol:**
- [ ] Otevři si SVG Editor a zkus změnit tvar masky (hvězda, čtvercový zaoblenec, etc.)
- [ ] Nebo zůstaň u kruhu a pracuj na ostatním

---

## Krok 8: Responsive design (mobil)

Stránka musí vypadat dobře i na mobilu! Přidej **media query**:

```css
/* Tablet a menší */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;  /* Jeden sloupec místo dvou */
    gap: var(--spacing-md);
  }
  
  .hero-text h1 {
    font-size: 40px;  /* Menší nadpis */
  }
  
  .nav {
    gap: var(--spacing-md);  /* Menší mezery v menu */
  }
  
  .hero-text p {
    font-size: 16px;
  }
}

/* Mobil */
@media (max-width: 480px) {
  .logo {
    font-size: 20px;
  }
  
  .hero-text h1 {
    font-size: 32px;
  }
  
  .nav {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}
```

**Jak to testovat:**
- F12 → DevTools → klikni na mobil ikonu (📱) → vyber si rozlišení
- Nebo otevři na mobilu (lokální IP adresa)

**Tvůj úkol:**
- [ ] Přidej media queries
- [ ] Otevři DevTools a otestuj na různých rozlišeních
- [ ] Vylaď font-sizes tak aby to vypadalo dobře

---

## Krok 9: JavaScript - smooth scroll a aktivní menu

Vytvoř ve složce projektu soubor `script.js` (pokud ho ještě nemáš) a vlož do něj tuto funkcionalitu:

```javascript
// Hladký scroll na # odkazy
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Zvýraznění aktivního menu položky při scrollu
window.addEventListener('scroll', () => {
  const links = document.querySelectorAll('.nav-link');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    const section = document.querySelector(href);
    
    if (section) {
      const rect = section.getBoundingClientRect();
      
      // Pokud je sekce viditelná - přidej .active
      if (rect.top <= 100 && rect.bottom >= 100) {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
});
```

**Co se děje:**
- Při kliknutí na `#home` se stránka **hladce skroluje** na sekci
- Při scrollování se automaticky zvýrazní v menu správný odkaz
- `scrollIntoView()` - integrovaná metoda prohlížeče pro smooth scroll

**Tvůj úkol:**
- [ ] Vlož JavaScript do `script.js`
- [ ] Otestuj: Klikni na menu -> hladký scroll?
- [ ] Scrolluj ručně -> změní se aktivní link v menu?

---

## Krok 10: Finální doladění a experimenty

Teď už máš základní strukturu! Zkus si s tím pohrát:

### Nápady na vylepšení:

**1. Animace při načtení**
```css
.hero-text {
  animation: slideInLeft 0.8s ease;
}

.hero-image {
  animation: slideInRight 0.8s ease;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

**2. Gradient na pozadí**
```css
.hero {
  background: linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%);
}
```

**3. Více barev v h1**
```html
<h1>
  Hi,<br>
  I'm <span style="color: var(--primary-color);">Marlon</span><br>
  <span style="background: linear-gradient(...); -webkit-background-clip: text;">Web Designer</span>
</h1>
```

**4. Efekt na fotku (hover)**
```css
.image-mask:hover {
  filter: drop-shadow(0 15px 40px rgba(0, 0, 0, 0.3)) brightness(1.1);
}
```

**Tvůj úkol:**
- [ ] Vyber si jedno vylepšení a implementuj
- [ ] Nebo vymysli vlastní - co by tě bavilo?

---

## 📋 Checklist - máš hotovo?

- [ ] CSS proměnné nastaveny
- [ ] Header s menu funguje
- [ ] Hero sekce se textem a fotkou
- [ ] SVG kruhová maska
- [ ] Tlačítko "Contact" se na hover zvedá
- [ ] Responsive na mobilu (768px breakpoint)
- [ ] JavaScript smooth scroll funguje
- [ ] Menu se zvýrazní při scrollu
- [ ] Přidal/a jsi vlastní vylepšení

---

## 🔗 Užitečné zdroje

| Potřebuješ | Jdi sem |
|-----------|---------|
| **Barvy** | [Coolors.co](https://coolors.co) |
| **Fonty** | [Google Fonts](https://fonts.google.com) |
| **SVG blob** | [SVG Blob maker](https://www.blobmaker.app/) |
| **Ikony** | [icones.js.org](https://icones.js.org/) |
