// filehandle.datasync()

// return: <Promise> Başarılı olduğunda undefined ile dolar.
//Dosya ile ilişkilendirilmiş tüm şu anda sıraya alınmış I/O işlemlerini işletim sisteminin senkronize I/O tamamlama durumuna zorlar.

// `filehandle.sync` yöntemi gibi, bu yöntem de değiştirilmiş meta verileri boşaltmaz.

const fs = require('fs/promises'); // fs/promises modülünü kullanarak promise tabanlı işlemleri kullanın

async function performDataSync() {
    try {
        // Dosyayı açın veya oluşturun
        const fileHandle = await fs.open('dosya.txt', 'a+');

        // Dosyaya veri yazma işlemi
        await fileHandle.write('Bu bir örnek veri.\n');

        // Dosyayı senkronize edin (veri içeriğini diske yazın)
        await fileHandle.datasync();

        console.log('Dosya senkronize edildi.');

        // Dosya kapatma
        await fileHandle.close();
    } catch (error) {
        console.error('Hata oluştu:', error);
    }
}

performDataSync();
