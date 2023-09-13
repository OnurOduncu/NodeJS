// filehandle.read(buffer, offset, length, position)

// buffer <Buffer> | <TypedArray> | <DataView> Dosya verisi ile doldurulacak bir tampon.
// offset <integer> Doldurmaya başlanacak tampondaki konum.
// length <integer> Okunacak bayt sayısı.
// position <integer> | <null> Veriyi dosyadan okumaya başlanacak konum. Eğer null ise, veri mevcut dosya konumundan okunur ve konum güncellenir. Eğer position bir tamsayı ise, mevcut dosya konumu değişmez.
// return: <Promise> Başarılı olduğunda iki özellik içeren bir nesne ile dolar:
//      bytesRead <integer> Okunan bayt sayısı
//      buffer <Buffer> | <TypedArray> | <DataView> geçilen tampon argümanına bir başvuru.

// Dosyadan veri okur ve bu veriyi verilen tampona saklar.

// Dosya eş zamanlı olarak değiştirilmiyorsa, okunan bayt sayısı sıfır olduğunda dosyanın sonuna ulaşılır.

const fs = require('fs/promises');

async function readFileData() {
    try {
        const fileHandle = await fs.open('dosya.txt', 'r');
        const buffer = Buffer.alloc(1024); // 1024 bayt boyutunda bir tampon oluşturun
        const {bytesRead} = await fileHandle.read(buffer, 0, 1024, 0);
        // const {bytesRead} = await fileHandle.read({buffer, offset: 0, length: 1024, position: 0});

        if (bytesRead > 0) {
            console.log(`Okunan ${bytesRead} bayt veri: ${buffer.toString('utf8', 0, bytesRead)}`);
        } else {
            console.log('Dosya sonuna ulaşıldı.');
        }

        await fileHandle.close();
    } catch (error) {
        console.error('Hata oluştu:', error);
    }
}

readFileData();

// Bu örnekte, `fs.promises` kullanarak bir dosyayı açıyoruz, belirli bir tampona veri okuyoruz ve bu veriyi tampona saklıyoruz. Dosyanın sonuna ulaşıldığında, `bytesRead` sıfır olur ve bu durumu kontrol ediyoruz.

// filehandle.read([options])
// options <Object>
//      buffer <Buffer> | <TypedArray> | <DataView> Dosya verisi ile doldurulacak bir tampon. Varsayılan: Buffer.alloc(16384)
//      offset <integer> Doldurmaya başlanacak tampondaki konum. Varsayılan: 0
//      length <integer> Okunacak bayt sayısı. Varsayılan: buffer.byteLength - offset
//      position <integer> | <null> Veriyi dosyadan okumaya başlanacak konum. Eğer null ise, veri mevcut dosya konumundan okunur ve konum güncellenir. Eğer position bir tamsayı ise, mevcut dosya konumu değişmez. Varsayılan:: null
// return: <Promise> Başarılı olduğunda iki özellik içeren bir nesne ile dolar:
//      bytesRead <integer> Okunan bayt sayısı
//      buffer <Buffer> | <TypedArray> | <DataView> geçilen tampon argümanına bir başvuru.

// Dosyadan veri okur ve bu veriyi verilen tampona saklar.

// Dosya eş zamanlı olarak değiştirilmiyorsa, okunan bayt sayısı sıfır olduğunda dosyanın sonuna ulaşılır.

// filehandle.read(buffer[, options])
// buffer <Buffer> | <TypedArray> | <DataView> Dosya verisi ile doldurulacak bir tampon.
// options <Object>
//      offset <integer> Doldurmaya başlanacak tampondaki konum. Varsayılan: 0
//      length <integer> Okunacak bayt sayısı. Varsayılan: buffer.byteLength - offset
//      position <integer> Veriyi dosyadan okumaya başlanacak konum. Eğer null ise, veri mevcut dosya konumundan okunur ve konum güncellenir. Eğer position bir tamsayı ise, mevcut dosya konumu değişmez. Varsayılan:: null
// return: <Promise> Başarılı olduğunda iki özellik içeren bir nesne ile dolar:
//      bytesRead <integer> Okunan bayt sayısı
//      buffer <Buffer> | <TypedArray> | <DataView> geçilen tampon argümanına bir başvuru.

// Dosyadan veri okur ve bu veriyi verilen tampona saklar.
