// filehandle.createWriteStream([options])

// options <Object>
// encoding <string> Varsayılan: 'utf8'
// autoClose <boolean> Varsayılan: true
// emitClose <boolean> Varsayılan: true
// start <integer>
// return: <fs.WriteStream>

/* Opsiyonlar, ayrıca dosyanın başlangıcının ötesine veri yazılmasına izin vermek için bir başlatma seçeneği içerebilir; izin verilen değerler [0, Number.MAX_SAFE_INTEGER] aralığındadır. Dosyayı değiştirmek yerine yeniden oluşturmak, varsayılan r yerine r+ açık seçeneğinin ayarlanmasını gerektirebilir. Kodlama, <Buffer> tarafından kabul edilenlerden herhangi biri olabilir.

autoClose true olarak ayarlandığında (varsayılan davranış) 'error' veya 'finish' olayı oluştuğunda dosya tanımlayıcısı otomatik olarak kapatılır. autoClose false olarak ayarlandığında dosya tanımlayıcısı kapatılmaz, hata olsa bile. Dosya tanımlayıcı sızıntısı olmadığından emin olmak için uygulamanın bunu kapatması ve kapatması gerekmektedir.

Varsayılan olarak, akış yok edildikten sonra bir 'close' olayı yayınlar. Bu davranışı değiştirmek için emitClose seçeneğini false olarak ayarlayabilirsiniz. */

const fs = require('fs');

// Dosya yazma işlemi için bir yazma akışı oluşturun
const writeStream = fs.createWriteStream('dosya.txt', {
    encoding: 'utf8', // Varsayılan olarak utf8 kodlama kullanılır
    autoClose: true, // Otomatik kapatmayı etkinleştir (varsayılan davranış)
});

// Veriyi dosyaya yazın
writeStream.write('Merhaba, dünya!\n');
writeStream.write('Bu bir örnek dosya yazma işlemidir.\n');

// Yazma işlemi tamamlandığında dosyayı kapatın
writeStream.end();

// Yazma işlemi tamamlandığında bir 'finish' olayı dinleyin
writeStream.on('finish', () => {
    console.log('Dosya yazma işlemi tamamlandı.');
});

// Yazma işlemi sırasında oluşan hataları dinleyin
writeStream.on('error', (err) => {
    console.error('Hata oluştu:', err);
});
