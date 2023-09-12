// filehandle.close()
// return: Başarılı olduğunda undefined ile tamamlanır.
// Dosya tanımlayıcısını kapatır ve tanımlayıcı üzerindeki herhangi bir bekleyen işlemin tamamlanmasını bekler.

import {open} from 'node:fs/promises';

let filehandle;
try {
    filehandle = await open('thefile.txt', 'r');
} finally {
    await filehandle?.close();
}
