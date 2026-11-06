# MadenAkademi AI — GitHub, Gist, APK ve EXE Kurulum Kılavuzu

Bu paket, **MadenAkademi AI** uygulamasını tek merkezden (GitHub Pages) yönetebilmeniz ve bir kez `.apk` (Telefon/TV) ve `.exe` (PC) haline getirdikten sonra her güncellemenin tüm cihazlarınıza otomatik yansıması için hazırlanmıştır.

## İçindekiler
- `index.html`: Uygulamanın tüm özelliklerini barındıran ana dosyası.
- `manifest.json` & `sw.js`: PWA (Telefon, TV ve PC kurulumu + Otomatik OTA güncelleme) dosyaları.
- `electron-main.js` & `package.json`: Windows masaüstü `.exe` kabuğu.
- `capacitor.config.json`: Android `.apk` kabuk yapılandırması.
- `.github/workflows/build.yml`: GitHub üzerinde kendi bilgisayarınıza hiçbir program kurmadan otomatik `.exe` üreten iş akışı.
