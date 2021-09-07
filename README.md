# NextJS Hızlı Bakış

Bu repo NextJS için hazırladığım eğitim videoları için oluşturulmuştur.

Kodu bilgisayarınıza çektikten sonra:

> (yarn yerine npm de kullanılabilir)

Paketleri kurmak için

```bash
yarn install
```

Geliştirme ortamını başlatmak için:

```bash
yarn dev
```

Production sunucusunu başlatmak için sırası ile:

```bash
yarn build
yarn dev
```

## Video 2 - Sayfalar ve Route

Sayfa ve video yapısı bu videoda anlatıldı.

> pages dizini altındaki dosya ve dizinler oluşturdukları hiyerarşik yapıya göre next tarafından otomatik olarak route olarak kullanılır.
> _Dosyaların `page` olarak tanınmaı için `export default` içermelidir._

## Video 3 - Link

Sayfalar arası yönlendirme için link kullanımı gösterildi.

> NextJS Link bileşeni kullanıldı.

## Video 4 - \_app.js

Bu videoda uygulamanın başlangıç nokyası olan `_app.js` dosyasının kullanımına örnek olması için Layout bileşeni eklendi.

## Video 5.1 & 5.2 - Style

Global stil dosyası ve css moduller hakkında bilgi verildi.

- global stil dosyası `_app.js` içerisinde import edilmeli.
- CSS-Module için dosya isminde **ModuleName**`.module.css` kuralı ile oluşturulmalı.

## Video 6 - Head

Head bileşeni ile uygulamaya meta veriler eklenmesi gösterildi.
Metaverileri override(üzerine yazmak) için `key` property kullanımı gösterildi.
