const container = document.getElementById("randevuList");

function load() {
    let randevular = localStorage.getItem("randevular");

    // Hiç veri yoksa kullanıcı bilgilendirilsin
    if (!randevular) {
        container.innerHTML = "<p>Hiç randevu bulunamadı.</p>";
        return;
    }

    try {
        randevular = JSON.parse(randevular);
    } catch (err) {
        container.innerHTML = "<p>Randevu verisi bozuk. Silip tekrar ekleyin.</p>";
        return;
    }

    // Boş dizi ise uyarı göster
    if (randevular.length === 0) {
        container.innerHTML = "<p>Listelenecek randevu yok.</p>";
        return;
    }

    // Listeyi temizle
    container.innerHTML = "";

    // Tüm randevuları oluştur
    randevular.forEach((r, index) => {
        const card = document.createElement("div");
        card.className = "randevu-card";

        card.innerHTML = `
            <h3>${r.danisan}</h3>
            <p><b>Tarih:</b> ${r.tarih}</p>
            <p><b>Saat:</b> ${r.saat}</p>
            <p><b>Durum:</b> ${r.durum}</p>

            <div class="buttons">
                <button class="edit-btn" onclick="editRandevu(${index})">Durumu Değiştir</button>
                <button class="cancel-btn" onclick="cancelRandevu(${index})">İptal Et</button>
            </div>
        `;

        container.appendChild(card);
    });
}

load();

function editRandevu(index) {
    let randevular = JSON.parse(localStorage.getItem("randevular"));
    const yeniDurum = prompt("Yeni durum:", randevular[index].durum);

    if (!yeniDurum) return;

    randevular[index].durum = yeniDurum;

    localStorage.setItem("randevular", JSON.stringify(randevular));
    load();
}

function cancelRandevu(index) {
    let randevular = JSON.parse(localStorage.getItem("randevular"));

    if (!confirm("Bu randevuyu iptal etmek istiyor musunuz?")) return;

    randevular[index].durum = "İptal edildi";
    localStorage.setItem("randevular", JSON.stringify(randevular));

    load();
}
