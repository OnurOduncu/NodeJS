// Node.js'in fs modülü, standart POSIX işlevlerine model olarak dosya sistemi ile etkileşimde bulunmayı sağlar.

// Tüm dosya sistem işlemleri hem senkron, geri çağrı (callback) hem de söz (promise) tabanlı formlarda bulunur ve hem CommonJS sözdizimi hem de ES6 Modülleri (ESM) kullanılarak erişilebilir.

// Söz (promise) tabanlı API'ları kullanmak için:
// Bu ifade, asenkron işlemleri gerçekleştirirken JavaScript'de promise kullanımını ifade eder.

// const şeklinde tanımlanması daha uygun olur.
var fs = require('fs/promises'); // CommonJS sözdizimi, require('node:fs/promises') şeklinde de kullanılabilir. (Tercih edilen kullanım)
// import * as fs from "node:fs/promises"; // ES6 Modülleri (ESM) kullanılarak tanımlama

fs.readFile('dosya.txt', 'utf8')
    .then((veri) => {
        console.log('Dosya içeriği:', veri);
    })
    .catch((hata) => {
        console.error('Hata:', hata);
    });

// Promise tabanlı yaklaşım, özellikle karmaşık asenkron işlemler yaparken daha okunaklı ve yönetilebilir bir kod oluşturmanıza yardımcı olur.

// promise örneği

fs.writeFile('./dosya_2.txt', ''); // silinecek ./dosya_2.txt dosyası oluşturuldu.

// const { unlink } = require("node:fs/promises"); // CommonJS örneği
// import { unlink } from 'node:fs/promises'; // ES6 Modülü
(async function (path) {
    try {
        await fs.unlink(path);
        console.log(`${path} başarıyla silindi.`);
    } catch (error) {
        console.error('Hata meydana geldi : ', error.message);
    }
})('dosya_2.txt');

// ----------------------------------------------------------------------------------------------------------------------
fs.writeFile('./dosya_3.txt', ''); // silinecek ./dosya_3.txt dosyası oluşturuldu.
// Gerçekleşecek işlemi başlatmak için, callback ve senkron API'ları kullanmak için:
// Bu ifade, JavaScript'te asenkron işlemleri gerçekleştirirken callback ve senkron API'larını kullanma gerekliliğini ifade eder.

var fs = require('fs'); // CommonJS sözdizimi, require('node:fs') şeklinde de kullanılabilir. (Tercih edilen kullanım)
// import * as fs from "node:fs"; // ES6 Modülleri (ESM) kullanılarak tanımlama

fs.readFile('dosya.txt', 'utf8', (hata, veri) => {
    if (hata) {
        console.error('Hata:', hata);
    } else {
        console.log('Dosya içeriği:', veri);
    }
});

// Callback örneği

fs.unlink('./dosya_3.txt', (err) => {
    if (err) throw err;
    console.log('dosya_3.txt başarıyla silindi.');
});

fs.writeFile('./dosya_4.txt', ''); // silinecek ./dosya_4.txt dosyası oluşturuldu.

// Senkron çalışma örneği

try {
    fs.unlinkSync('./dosya_4.txt');
    console.log('dosya_4.txt başarıyla silindi.');
} catch (err) {
    console.log('Hata meydana geldi :', err.message);
}
