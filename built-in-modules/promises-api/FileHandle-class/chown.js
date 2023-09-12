// filehandle.chown(uid, gid)
// uid <integer> Dosyanın yeni sahibinin kullanıcı kimliği (user id).
// gid <integer> Dosyanın yeni grubunun grup kimliği (group id).
// return: Başarılı olduğunda undefined ile tamamlanır.
// Dosyanın sahipliğini değiştirir.

//Bu işlev, bir dosyanın sahibini ve grubunu değiştirmek için kullanılır. Dosyanın sahibi ve grubu, uid ve gid parametreleri ile belirtilen kullanıcı kimliği ve grup kimliği değerleri ile değiştirilir.

const {open, close, chown} = require('fs').promises;

async function changeFileOwnership() {
    try {
        const fileHandle = await open('dosya.txt', 'a');

        // Dosyanın sahibini ve grubunu değiştir
        await chown(fileHandle, 1001, 1001); // Örnek olarak yeni bir kullanıcı kimliği (uid) ve grup kimliği (gid)

        await close(fileHandle);

        console.log('Dosyanın sahibi ve grubu başarıyla değiştirildi.');
    } catch (error) {
        console.error('Hata:', error);
    }
}

changeFileOwnership();

// LINUX için
/* "1001" bir kullanıcı kimliği (user id veya UID) veya bir grup kimliği (group id veya GID) değerini ifade eder. UNIX benzeri işletim sistemlerinde, her kullanıcı ve grup bir benzersiz kimlikle temsil edilir. Bu kimlikler sayısal değerlerdir ve kullanıcılar ve gruplar için benzersizdir.

Kullanıcı kimliği (UID) bir kullanıcıya özgüdür ve o kullanıcıya ait dosyaların sahibini tanımlar. Grup kimliği (GID) ise bir kullanıcı grubuna özgüdür ve bu grupla ilişkilendirilen dosyaların grubunu belirtir.

Örneğin, "1001" bir UID veya GID olabilir. Bu sayısal değerler, normalde bir kullanıcının veya grubun sistemin /etc/passwd veya /etc/group dosyasındaki kayıtlarında belirtilir. Bu değerler, sistem tarafından kullanıcıların ve grupların benzersiz bir şekilde tanınmasına yardımcı olur.

UID veya GID değerlerini hesaplarken, genellikle yönetici veya sistem tarafından atanır ve kullanıcı veya grup oluşturulduğunda veya düzenlendiğinde belirlenir. Kullanıcılar ve gruplar için benzersiz kimlikler sağlar ve dosya izinlerini ve sahipliğini yönetmek için kullanılır. */

// Windows için
/* Windows işletim sistemi, UNIX benzeri işletim sistemlerinde olduğu gibi kullanıcı kimliği (UID) veya grup kimliği (GID) kullanmaz. Bunun yerine, Windows'ta kullanıcılar ve gruplar, genellikle kullanıcı adları ve grup adlarıyla tanımlanır.

Kullanıcı kimliği (UID) veya grup kimliği (GID) değerlerini Windows'ta bulmak veya belirlemek için aşağıdaki adımları takip edebilirsiniz:

1. **Kullanıcı Kimliği (UID):** Windows'ta, kullanıcıların benzersiz kimlikleri, kullanıcı adları (username) tarafından temsil edilir. Kullanıcı kimliğini öğrenmek için aşağıdaki adımları izleyebilirsiniz:
    - Bilgisayarınızın "Kontrol Paneli"ne gidin.
    - "Kullanıcı Hesapları" bölümünü açın.
    - Kullanıcı hesapları listesinden ilgili kullanıcının adını seçin. Bu, kullanıcı adınızı gösterir.

2. **Grup Kimliği (GID):** Windows'ta, grupların benzersiz kimlikleri, grup adları (group name) tarafından temsil edilir. Grup kimliğini öğrenmek için aşağıdaki adımları izleyebilirsiniz:
    - Bilgisayarınızın "Kontrol Paneli"ne gidin.
    - "Yönetici Araçları"ne gidin.
    - "Bilgisayar Yönetimi" seçeneğini açın.
    - "Sistem Araçları" altındaki "Yerel Kullanıcılar ve Gruplar" bölümüne gidin.
    - Gruplar listesinden ilgili grubun adını seçin. Bu, grup adınızı gösterir.

Windows'ta kullanıcı ve grup kimlikleri genellikle kullanıcı adları ve grup adları ile tanımlandığı için UID veya GID değerlerine ihtiyaç duyulmaz. Kullanıcı adları ve grup adları, dosya izinlerini ve sahipliği yönetmek için kullanılır. */
