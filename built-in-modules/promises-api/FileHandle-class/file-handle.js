// Bir <FileHandle> nesnesi, sayısal bir dosya tanımlayıcısı için bir nesne sarıcısıdır.

// <FileHandle> nesnelerinin örnekleri, fsPromises.open() yöntemi tarafından oluşturulur.

// Tüm <FileHandle> nesneleri <EventEmitter> 'lardır.

// Bir <FileHandle>, filehandle.close() yöntemi kullanılarak kapatılmazsa, dosya tanımlayıcısını otomatik olarak kapatmaya çalışır ve bir işlem uyarısı (process warning) yayınlar, böylece bellek sızıntılarını önlemeye yardımcı olur. Bu davranışa güvenmeyin lütfen, çünkü güvenilir olmayabilir ve dosya kapanmayabilir. Bunun yerine, <FileHandle>'ları her zaman açıkça kapatın. Node.js gelecekte bu davranışı değiştirebilir.

// Event: 'close'
// <FileHandle> kapatıldığında ve artık kullanılamayacak durumda olduğunda yayınlanır.

const {open} = require('node:fs/promises'); // ya da
// const fs = require('fs').promises;

async function main() {
    try {
        const filehandle = await open('dosya.txt', 'r');
        // Dosya işlemlerini burada gerçekleştirin
        console.log('Dosya açıldı');
        // Dosya işlemi tamamlandığında kapatmayı unutmayın:
        filehandle.close();
        console.log('Dosya kapatıldı.');
    } catch (error) {
        console.error('Hata:', error.errno);
    }
}

main();

// Dosyayı aç
open('dosya.txt', 'r')
    .then((fileHandle) => {
        console.log('Dosya açıldı');
        // Dosyayı kapat
        fileHandle.close();
    })
    .then(() => {
        console.log('Dosya kapatıldı');
    })
    .catch((hata) => {
        console.error('Hata:', hata.errno);
    });

// filehandle.appendFile(data[, options])
/*
    data <string> | <Buffer> | <TypedArray> | <DataView> | <AsyncIterable> | <Iterable> | <Stream>
    options <Object> | <string>
        encoding <string> | <null> Varsayılan: 'utf8'
    return: Başarılı olduğunda undefined ile tamamlanır.
    
-- filehandle.writeFile() ile özdeşleşen bir işlem.

-- Dosya tanımlayıcıları üzerinde işlem yaparken, mod fsPromises.open() ile ayarlandığından değiştirilemez. Bu nedenle, bu, filehandle.writeFile() ile eşdeğerdir. 
*/
