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

## Video 7 - build+start ve dev script farkı

Bu videoda geliştirme ortamında (`yarn dev`) tüm sayfaları server side rendering(**SSR**) ile oluştururken production ortamına geçerken varsayılan olarak tüm sayfaların static generation(**SSG**) şeklinde `HTML` olarak build anında oluşturulduğu gösterildi.

## Video 8 - UseEffect ile veri çekme

Bu videoda `useEffect` ile veri çekildi. Bu veri çekme işlemini yapan sayfanın otomatik olarak Static Generation ile üretildiğini ama veriyi bu oluşturma anında kullanamadığı gösterildi.

## Video 9 - getStaticProps

Bu videoda sunucu tarafında işlemler yapıp ilgili bileşene veri göndermemize yarayan ve **static generation** tetikleyen `getStaticProps` metodu gösterildi.

## Video 10 - Dinamik Route

Bu videoda dinamik sayfa isimlerinin nasıl oluşturulduğu gösterildi.
Ufak CSS düzenlemeleri yapıldı.

## Video 11 - Dinamik Route ile SSG ve `getStaticPaths`

Bir sayfa SSG ile oluşturulacağı zaman dinamik olarak oluşturulacak sayfa bilgisinin `getStaticPaths` metodu içerisinde nasıl oluşturulduğu ve `getStaticProps` metoduna nasıl aktarıldığı gösterildi.

Kaç sayfa oluşturulacağı ve ilgili parametreye göre kullanıcı bilgisinin API tarafından alınıp, kullanılması gösterildi.
