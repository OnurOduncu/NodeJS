// filehandle.createReadStream([options])
// options <Object>
//      encoding <string> Varsayılan: null
//      autoClose <boolean> Varsayılan: true
//      emitClose <boolean> Varsayılan: true
//      start <integer>
//      end <integer> Varsayılan: Infinity
//      highWaterMark <integer> Varsayılan: 64 * 1024
// return: <fs.ReadStream>
// Bir <stream.Readable> için 16 KiB olan varsayılan highWaterMark'ın aksine, bu yöntemle dönen akışın varsayılan highWaterMark'ı 64 KiB'dir.

// options, dosyanın tamamı yerine belirli bir aralıktaki baytları okumak için start ve end değerlerini içerebilir. Hem start hem de end dahildir ve 0'dan başlayarak saymaya başlar, izin verilen değerler [0, Number.MAX_SAFE_INTEGER] aralığındadır. Start belirtilmez veya tanımlanmazsa, filehandle.createReadStream(), mevcut dosya konumundan sıralı olarak okur. Kodlama, <Buffer> tarafından kabul edilenlerden biri olabilir.

// Eğer FileHandle, yalnızca bloke okumaları destekleyen bir karakter cihazına (örneğin klavye veya ses kartı) işaret ediyorsa, okuma işlemleri veri kullanılabilir hale gelene kadar tamamlanmaz. Bu, işlemi çıkmasını ve akışın doğal olarak kapanmasını engelleyebilir.

// Varsayılan olarak, akış yok edildikten sonra bir 'kapat' olayı yayınlar. Bu davranışı değiştirmek için emitClose seçeneğini false olarak ayarlayın.

const {open, createReadStream} = require('fs').promises;

/* const fd = open('dosya.txt');
const stream = fd.createReadStream();
setTimeout(() => {
    stream.close();
    stream.push(null);
    stream.read(0);
}, 100); */

// Eğer `autoClose` değeri false olarak ayarlanırsa, dosya tanımlayıcısı (file descriptor) hata oluşsa bile otomatik olarak kapatılmayacaktır. Dosya tanımlayıcısının kapatılması ve dosya tanımlayıcı sızıntısının olmaması, uygulamanın sorumluluğundadır. Eğer `autoClose` true olarak ayarlanmışsa (varsayılan davranış), 'error' veya 'end' olayları gerçekleştiğinde dosya tanımlayıcısı otomatik olarak kapatılacaktır.

// 100 bayt uzunluğundaki bir dosyanın son 10 baytını okumak için aşağıdaki örnek kullanılabilir:

/* fd.createReadStream({start: 90, end: 99}); */

/* filehandle.createReadStream([options]), Node.js'de bulunan ve dosyadan okuma işlemi için kullanılan bir yöntemdir. Bu yöntem, belirtilen bir dosyanın içeriğini okumak için bir okuma akışı oluşturur ve bu akışı kullanarak dosyadan veri okuma işlemini yapmanıza olanak tanır.

Aşağıda bu yöntemin bazı önemli parametreleri ve kullanımıyla ilgili daha fazla ayrıntı bulunmaktadır:

options: Bir nesne olarak geçilen bu parametre, okuma işlemi için çeşitli seçenekleri belirtmenizi sağlar. Örneğin, kodlamayı (encoding), başlangıç (start) ve bitiş (end) bayt konumlarını, otomatik kapanmayı (autoClose), kapatıldığında 'kapat' olayını yayınlama davranışını (emitClose) ve diğerlerini belirtebilirsiniz.

start ve end: Belirli bir bayt aralığındaki verileri okumak için kullanılır. Bu, dosyanın belirli bir bölümünü okumak istediğinizde kullanışlıdır. start ve end değerleri dahil olmak üzere baytları içerir ve 0'dan başlayarak sayılırlar.

highWaterMark: Bu, okuma işlemi sırasında tampon boyutunu belirler. Varsayılan değeri 64 KB'dir.

autoClose ve emitClose: Bu seçenekler, dosya işlemi tamamlandığında dosyanın otomatik olarak kapatılıp kapatılmayacağını ve 'kapat' olayının yayınlanıp yayınlanmayacağını belirtir.

Örnek bir kullanım senaryosu şu şekilde olabilir: */

async function readPartialFile() {
    try {
        const fileHandle = await open('dosya.txt', 'r');

        // Dosyanın belirli bir bölümünü okumak için bir okuma akışı oluştur
        const readStream = fileHandle.createReadStream({
            start: 100, // Başlangıç baytı
            end: 200, // Bitiş baytı (dahil)
            encoding: 'utf8', // Kodlama (opsiyonel)
        });

        readStream.on('data', (chunk) => {
            console.log('Okunan veri:', chunk);
        });

        readStream.on('end', () => {
            console.log('Okuma tamamlandı.');
            fileHandle.close();
        });
    } catch (error) {
        console.error('Hata:', error);
    }
}

readPartialFile();

/* Bu örnek, filehandle.createReadStream() kullanarak belirli bir dosyanın belli bir bölümünü okuma işlemini göstermektedir. Bu yöntem, büyük dosyaları etkili bir şekilde işlemek veya belirli bir veri aralığını okumak için kullanışlıdır. */
