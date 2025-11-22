// Örnek veriler
const upcoming = {
tarih: "25 Kasım 2025",
saat: "14:00",
tur: "Bireysel Terapi"
};


const lastSummary = "Son seansta duygu yönetimi üzerine çalışmalar yapılmıştır.";
const paymentStatus = "Herhangi bir borcunuz bulunmamaktadır.";


document.getElementById("upcoming").innerHTML = `
<p><strong>Tarih:</strong> ${upcoming.tarih}</p>
<p><strong>Saat:</strong> ${upcoming.saat}</p>
<p><strong>Tür:</strong> ${upcoming.tur}</p>
`;


document.getElementById("summary").innerText = lastSummary;
document.getElementById("payment").innerText = paymentStatus;

function logout() {
    // session temizleme (opsiyonel)
    localStorage.clear();
    sessionStorage.clear();

    // login sayfasına yönlendirme
    window.location.href = 'login.html';
}
