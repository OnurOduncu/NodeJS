// filehandle.appendFile(data[, options])
// data <string> | <Buffer> | <TypedArray> | <DataView> | <AsyncIterable> | <Iterable> | <Stream>
// options <Object> | <string>
//      encoding <string> | <null> Varsayılan: 'utf8'
// return : Başarılı olduğunda undefined ile tamamlanır.
// filehandle.writeFile() ile özdeşleşen bir işlem.

// Dosya tanımlayıcıları üzerinde işlem yaparken, mod fsPromises.open() ile ayarlandığından değiştirilemez. Bu nedenle, bu, filehandle.writeFile() ile eşdeğerdir.

/* `await`, JavaScript'te özellikle asenkron işlemlerle çalışırken kullanılan bir anahtar kelimedir ve genellikle `async` işlevler içinde kullanılır. `await`, bir işlemin tamamlanmasını beklemek ve işlem tamamlandığında sonucunu almak için kullanılır.

`await`, aşağıdaki gibi bir `Promise` nesnesini beklemek ve çözüldüğünde veya reddedildiğinde işlemi sürdürmek için kullanılır:

```javascript
async function example() {
    try {
        const result = await someAsyncFunction(); // someAsyncFunction bir Promise döndürür
        console.log(result); // İşlem tamamlandığında sonucu alır
    } catch (error) {
        console.error(error); // Hata durumunda hata mesajını alır
    }
}
```

`await`, asenkron işleminin tamamlanmasını bekler ve sıralı ve okunabilir kod yazmanıza olanak tanır. Özellikle dosya okuma, ağ isteği gönderme, veritabanı sorguları gibi işlemlerde ve `async/await` kullanılarak kodun daha okunabilir hale getirilmesi gerektiği durumlarda yaygın olarak kullanılır. */

const {open, appendFile, close} = require('fs').promises;

async function appendToFile() {
    try {
        // Dosyayı aç
        const fileHandle = await open('./dosya.txt', 'a'); // 'a' modu ile dosya eklemeye uygun hale getirilir

        // Dosyaya veri eklemek
        await appendFile(fileHandle, '\nBu metin dosyaya eklendi.\n'); // Dosya işlemi için fileHandle yerine dosya adını kullanın

        // Dosyayı kapat
        await fileHandle.close();

        console.log('Dosyaya veri eklendi ve dosya kapatıldı.');
    } catch (error) {
        console.error('Hata:', error);
    }
}

appendToFile();
