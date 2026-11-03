# 📷 Foto Companion

**Szenario-basierter Foto-Assistent für Sony A7C II & Canon R5 II**

Eine mobile-first Progressive Web App (PWA), die dir bei jedem Shooting die optimalen Kamera-Einstellungen liefert.

## 🎯 Features

### ✨ Neues Design (v3)
- **Szenario-First**: Wähle zuerst, was du fotografieren willst
- **Vereinfachter Workflow**: Szenario → Kamera → Settings (3 Schritte statt 6 Tabs)
- **Mobile-optimiert**: Große Touch-Targets, klare Hierarchie, keine Überladung
- **Schneller Zugriff**: Die wichtigsten Infos in 2 Klicks

### 📸 6 Haupt-Szenarien
- 💒 **Hochzeit** – Trauung, Portraits, Gruppenfotos & Feier
- 👤 **Portrait** – Outdoor & Studio, natürliches Licht
- 🏙️ **Street** – Urbane Fotografie, spontane Momente
- 🌲 **Wald & Natur** – Landschaft, Wildlife, Low-Light
- ⚡ **Sport & Action** – Schnelle Bewegungen, Tracking
- 🌙 **Nacht & Astro** – Sternenhimmel, Citylights, Langzeit

### 🎥 Unterstützte Kameras
- **Sony Alpha 7C II** (33MP Full-Frame, 10 fps, 759 AF-Punkte)
- **Canon EOS R5 Mark II** (45MP Full-Frame, 20 fps, Dual Pixel AF II)

### 💡 Für jedes Szenario erhältst du:
- Empfohlener Modus (Av/Tv/M)
- Optimale Blende
- Verschlusszeit
- ISO-Bereich
- Fokus-Einstellungen
- Aufnahmemodus
- Weißabgleich
- **Profi-Tipps** speziell für das Szenario

## 🚀 Installation

### Als PWA auf dem Smartphone
1. Öffne [https://rekam1.github.io/foto/](https://rekam1.github.io/foto/) in Safari (iOS) oder Chrome (Android)
2. **iOS**: Tippe auf Teilen → "Zum Home-Bildschirm"
3. **Android**: Tippe auf Menu → "App installieren"
4. Die App funktioniert jetzt offline!

### Lokal entwickeln
```bash
git clone https://github.com/Rekam1/foto.git
cd foto
# Öffne index.html in einem Browser oder starte einen lokalen Server
python -m http.server 8000
# oder
npx serve
```

## 🛠️ Technologie

- **Pure Vanilla JS** – Keine Dependencies, ultraschnell
- **Single-Page Application** – Alles in einer 17KB Datei
- **Progressive Web App** – Offline-fähig mit Service Worker
- **Mobile-First Design** – Optimiert für Touch-Bedienung
- **iOS Safe-Area Support** – Perfekt auf iPhone mit Notch

## 📂 Struktur

```
foto/
├── index.html          # Haupt-App (HTML + CSS + JS)
├── manifest.json       # PWA Manifest
├── sw.js              # Service Worker für Offline-Caching
├── icon-192.png       # App-Icon 192x192
├── icon-512.png       # App-Icon 512x512
└── README.md          # Diese Datei
```

## 🎨 Design-Prinzipien

1. **Progressive Disclosure** – Zeige nur was jetzt relevant ist
2. **Scenario-First** – Nutzer denken in Situationen, nicht in Kamera-Tabs
3. **Touch-optimiert** – Große Buttons, klare Touch-Targets
4. **Dark Theme** – Augenschonend am Set
5. **Schnell** – Unter 20KB, lädt in < 1 Sekunde

## 🔄 Changelog

### v3.0 (Nov 2026) - Redesign
- ✨ Komplett neue szenario-basierte UI
- 📱 Mobile-First Optimierung
- 🎯 Vereinfachter 3-Schritt-Workflow
- 🚀 90% kleiner (17KB statt 170KB)

### v2.0 (Okt 2026)
- Sony A7C II + Canon R5 II Setup
- Tab-basierte Navigation
- Rechner & Tools

## 📝 Lizenz

MIT License – Frei verwendbar für alle Fotografen!

## 🤝 Beitragen

Feedback und Pull Requests sind willkommen! Besonders für:
- Weitere Szenarien (z.B. Makro, Events, Wildlife)
- Zusätzliche Kamera-Modelle
- Übersetzungen
- Bug-Fixes

---

**Made with ❤️ für Fotografen, die am Set schnell die richtigen Einstellungen brauchen.**