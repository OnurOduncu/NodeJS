// filehandle.fd
// <number> <FileHandle> nesnesi tarafından yönetilen sayısal dosya tanımlayıcısı.

// Bu özellik, bir <FileHandle> nesnesi tarafından yönetilen dosyanın sayısal dosya tanımlayıcısını temsil eder. Sayısal dosya tanımlayıcısı, işletim sistemi seviyesinde dosyanın işlem gördüğü benzersiz bir sayısal değerdir. Bu, düşük seviyede dosya işlemleri gerçekleştirmek için kullanılabilir.

const fs = require('fs/promises');

async function getFileDescriptor() {
    try {
        const fileHandle = await fs.open('dosya.txt', 'r');
        const fileDescriptor = fileHandle.fd;
        console.log('Dosya tanımlayıcısı:', fileDescriptor);
        await fileHandle.close();
    } catch (error) {
        console.error('Hata oluştu:', error);
    }
}

getFileDescriptor();
