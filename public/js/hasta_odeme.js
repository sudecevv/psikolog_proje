const paid = [
    { tarih: "12 Kasım 2025", tutar: "600₺" },
    { tarih: "05 Kasım 2025", tutar: "600₺" }
];

const pending = [
    { tarih: "20 Kasım 2025", tutar: "600₺" }
];

const receipts = ["Makbuz_12Kasım.pdf", "Makbuz_05Kasım.pdf"];

function renderList(id, items, formatter) {
    const el = document.getElementById(id);
    items.forEach(i => {
        el.innerHTML += `<li>${formatter(i)}</li>`;
    });
}

renderList("paidList", paid, i => `${i.tarih} - ${i.tutar}`);
renderList("pendingList", pending, i => `${i.tarih} - ${i.tutar}`);
renderList("receiptList", receipts, i => `${i}`);

function logout() {
    // session temizleme (opsiyonel)
    localStorage.clear();
    sessionStorage.clear();

    // login sayfasına yönlendirme
    window.location.href = 'login.html';
}