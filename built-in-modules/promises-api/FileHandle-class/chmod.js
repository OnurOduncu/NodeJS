// filehandle.chmod(mode)
// mode <integer> dosya izinleri bit maskesi.
// return : Başarılı olduğunda undefined ile tamamlanır.
// Dosyanın izinlerini değiştirir.

// Okuma --> 4,
// Yazma --> 2,
// Çalıştırma --> 1
// Başa 0o yazıldıktan sonra ilk digit bizi yani o anki kullanıyıcı temsil eder.
// İkinci digit bizimde içinde bulunduğumuz grubu temsil eder.
// Üçüncü digit ise diğer grupları temsil eder.
// 4 + 2 + 1 --> 7 bütün izinler

const {chmod} = require('fs').promises;

async function changeFilePermissions() {
    try {
        await chmod('dosya.txt', 0o755);
        console.log('Dosya izinleri başarıyla değiştirildi.');
    } catch (error) {
        console.error('Hata:', error);
    }
}

changeFilePermissions();
