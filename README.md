# Poesie – Poetry Web Application

Ein minimalistisches, elegantes Frontend für eine wöchentliche Poetry-Publikation mit subtiler macOS-Ästhetik.

## 🎨 Design-Prinzipien

### Subtiles macOS-Feeling
- **Clean & Premium**: Viel Weissraum, ruhige Hierarchie
- **Hairline Borders**: 1px Linien mit niedriger Opazität (8-12%)
- **Soft Shadows**: Sehr dezente Schatten, keine harten Kanten
- **Minimal Blur**: Backdrop blur nur punktuell (8-16px)
- **Smooth Transitions**: Alle Interaktionen mit sanften Übergängen

### Typografie
- **Serif**: Crimson Pro für Headlines (elegant, lesbar)
- **Sans**: Inter für Body-Text (modern, clean)
- **Optimale Lesbarkeit**: Max. 65-75 Zeichen pro Zeile in Gedichten

### Farbsystem
- **Light Mode**: Off-white (#FAFAFA) Hintergrund, fast-schwarz (#1A1A1A) Text
- **Dark Mode**: Dark charcoal (#1A1A1A) Hintergrund, off-white (#F5F5F5) Text
- **Akzentfarbe**: Deep blue (#4A5A7A) – dezent, premium
- **Borders**: rgba mit 8-12% Opazität

### Spacing System
8px Grid: 8, 16, 24, 32, 48, 64px

### Container & Layout
- **Desktop**: max-width 1120px, padding 32px
- **Mobile**: padding 16px
- **Frames**: Desktop 1440px, Mobile 390px

## 📂 Projektstruktur

```
/src
  /app
    /components
      /layout
        - Navbar.tsx          # Navigation mit Mobile Menu
        - Footer.tsx          # Footer mit Links
        - ThemeToggle.tsx     # Hell-/Dunkelmodus-Toggle
      /poems
        - PoemCard.tsx        # Gedicht-Karte für Listen
        - FeaturedPoemCard.tsx # Hero-Karte für Featured Poem
        - TagCard.tsx         # Themen-Karte
        - MiniPoemRow.tsx     # Kompakte Gedicht-Zeile
        - ReadingControls.tsx # Font-Size, Theme, Share
      /ui
        - Button.tsx          # Primary, Secondary, Ghost, Icon
        - Card.tsx            # Basis-Karte mit Hover-State
        - Input.tsx           # Suchfeld mit Clear-Button
        - Select.tsx          # Dropdown
        - Chip.tsx            # Filter-Chips
        - Badge.tsx           # Badges (z.B. "Gedicht der Woche")
        - Container.tsx       # Content Container
        - EmptyState.tsx      # Keine Ergebnisse
        - Skeleton.tsx        # Loading States
    /pages
      - Home.tsx             # Startseite: Featured + Recent + Tags
      - Archive.tsx          # Archiv: Suche, Filter, Sort
      - TagPage.tsx          # Themen-Seite
      - PoemDetail.tsx       # Gedicht-Detail mit Navigation
      - About.tsx            # Über das Projekt
      - Legal.tsx            # Impressum & Datenschutz
      - NotFound.tsx         # 404 Seite
    - App.tsx                # Main App mit Routing
  /data
    - poems.ts               # 12 Dummy-Gedichte + 10 Tags
  /styles
    - fonts.css              # Google Fonts Import
    - theme.css              # Design System & CSS Variables
    - tailwind.css           # Tailwind Base
    - index.css              # Imports
```

## 🚀 Features

### Design System
✅ **Color Tokens**: Light/Dark Mode mit CSS Variables  
✅ **Typography Styles**: Serif (Headlines) + Sans (Body)  
✅ **Components**: Wiederverwendbare UI-Komponenten mit Variants  
✅ **8px Grid System**: Konsistentes Spacing  
✅ **14px Border Radius**: Cards & Buttons  
✅ **Hairline Borders**: 1px mit rgba(0,0,0,0.08)  

### Screens
✅ **Home**: Featured Poem + Recent Poems + Tags  
✅ **Archiv**: Search + Filter (Tags) + Sort (Neueste/Älteste)  
✅ **Tag Detail**: Gedichte nach Thema gefiltert  
✅ **Poem Detail**: 
  - Breadcrumb Navigation
  - Reading Controls (Font Size, Theme, Share)
  - Optimale Leselänge (max-width)
  - Related Poems Sidebar
  - Prev/Next Navigation
✅ **About**: Mission & Kontakt  
✅ **Legal**: Impressum & Datenschutz  
✅ **404**: Not Found Seite  

### Interaktionen
✅ **Dark Mode**: Toggle zwischen Hell/Dunkel  
✅ **Font Size Controls**: A-/A+ für Gedicht-Leseansicht  
✅ **Share Button**: Link kopieren mit Toast-Feedback  
✅ **Search**: Live-Suche im Archiv  
✅ **Filter**: Nach Tags filtern  
✅ **Sort**: Neueste/Älteste zuerst  
✅ **Mobile Menu**: Slide-in Drawer  
✅ **Smooth Scrolling**: Scroll-to-top bei Navigation  

### Responsiveness
✅ **Desktop (1440px)**: 2-spaltige Grids, Sidebar  
✅ **Mobile (390px)**: 1-spaltige Grids, Stack-Layout  
✅ **Adaptive Typography**: Kleinere Headlines auf Mobile  
✅ **Mobile-first Navigation**: Hamburger Menu  

## 🎯 Datenmodell (Backend-ready)

### Poem Interface
```typescript
{
  id: string;
  slug: string;
  title: string;
  excerpt: string;      // 2-3 Zeilen Auszug
  body: string;         // Volltext
  date: string;         // ISO Date
  week: number;         // Wochennummer
  tags: string[];       // Array von Tag-Namen
  readingTime: number;  // Minuten
}
```

### Tag Interface
```typescript
{
  name: string;
  count: number;
  description?: string;
}
```

## 📚 Content

**12 Gedichte** mit verschiedenen Themen:
- Nachtgesang, Stadtleben, Erste Liebe, Herbstregen
- Kindheitserinnerungen, Hoffnung, Verlust, Am Meer
- Wintermorgen, Zeitreise, Mondlicht, Neubeginn

**10 Tags**:
Nacht, Meer, Liebe, Verlust, Stadt, Hoffnung, Regen, Kindheit, Stille, Natur

## 🛠 Tech Stack

- **React 18** + TypeScript
- **React Router** für Navigation
- **Tailwind CSS v4** für Styling
- **Motion** (ehemals Framer Motion) für Animationen
- **next-themes** für Dark Mode
- **Sonner** für Toast Notifications
- **date-fns** für Datums-Formatierung
- **Lucide React** für Icons

## 🌍 Sprache

Deutsch (Schweiz) – kein ß, nur ss

## 🎨 Barrierefreiheit

✅ Hoher Kontrast (WCAG AA)  
✅ Focus States sichtbar  
✅ Semantic HTML  
✅ ARIA Labels  
✅ Keyboard Navigation  

## 📝 Lizenz

Alle Rechte vorbehalten © 2026 Poesie
