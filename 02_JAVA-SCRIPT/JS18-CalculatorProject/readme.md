# Calculator Projesi

## Kurallar

**Sayı Girişi:**
- 0 basmadan sonra 0 yazamaz
- "07" → "7" (başında 0 silinir)+++++++
- Nokta sadece bir kez girilebilir+++++++++
- 10 haneden uzun yazamaz ++++++++++++

**İşlemler:**
- Sayı yazılmadan operatör basılamaz ++++++++++
- Arka arkaya operatör basılırsa önceki işlem otomatik hesaplanır ++++++++
- ± ve % işlemleri = basmadan uygulanabilir

## Örnek Akış

```
"15" yaz → altEkranda "15"
"+" bas → üstEkranda "15 +"
"8" yaz → altEkranda "8"
"-" bas → otomatik hesapla (15+8=23)
         → üstEkranda "23 -"
"5" yaz → altEkranda "5"
"=" bas → hesapla (23-5=18) → sonuç "18"
```

## Adımlar

| # | İşlem | Detay 
|---|-------|-------
| 1 | DOM Seçimi | querySelectorAll, querySelector 
| 2 | Değişkenler | ustEkranSayi, altEkranSayi, islem 
| 3 | Sayı Girişi | numberButtons.forEach, ekranaHazirlik() 
| 4 | Operatörler | operationButtons.forEach, veri taşıması 
| 5 | Hesaplama | switch-case, Number() dönüşümü 
| 6 | Eşittir | hesapla() + updateEkran() 
| 7 | AC/±/% | Temizle, negatif, yüzde 


## Başlıca Hatalar

- `querySelector()` → `querySelectorAll()` (birden fazla eleman için)
- String concat sorunu: `"15" + "8" = "158"` → `Number()` kullan
- `updateEkran()` çağrılmıyor → her işlemde çağır
- Boş sayıyla operatör → boş kontrol ekle
