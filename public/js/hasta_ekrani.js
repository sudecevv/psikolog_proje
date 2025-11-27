document.addEventListener("DOMContentLoaded", async () => {

    const hasta_id = localStorage.getItem("hasta_id");
    if (!hasta_id) {
        alert("Hasta ID bulunamadı! Giriş yapmanız gerekiyor.");
        window.location.href = "login.html";
        return;
    }

    /*** API'DEN VERİ ÇEKME ***/
    async function fetchData(url) {
        const res = await fetch(url);
        return await res.json();
    }

    /*** YAKLAŞAN RANDEVULAR ***/
    const upcomingContainer = document.getElementById("upcomingRandevular");

    try {
        const upcoming = await fetchData(`http://localhost:3000/api/randevu/upcoming/${hasta_id}`);

        upcomingContainer.innerHTML = "";

        if (upcoming.length === 0) {
            upcomingContainer.innerHTML = "<p style='color:#777;'>Yaklaşan randevunuz yok.</p>";
        }

        upcoming.forEach(r => {
            const div = document.createElement("div");
            div.className = "randevu-item";
            div.innerHTML = `<strong>${r.tarih} ${r.saat}</strong> - ${r.tur}`;
            upcomingContainer.appendChild(div);
        });

    } catch (err) {
        console.error("Randevu getirme hatası:", err);
    }

    /*** ÖDEME DURUMU ***/
    const paymentTableBody = document.querySelector("#paymentTable tbody");

    try {
        const payments = await fetchData(`http://localhost:3000/api/randevu/payments/${hasta_id}`);

        paymentTableBody.innerHTML = "";

        payments.forEach(p => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${p.tarih}</td>
                <td>${p.tutar}₺</td>
                <td class="${p.odeme_durumu === 'Ödendi' ? 'payment-paid' : 'payment-pending'}">
                    ${p.odeme_durumu}
                </td>
            `;

            paymentTableBody.appendChild(tr);
        });

        /*** CHART ***/
        const chartCanvas = document.getElementById("paymentChart");

        new Chart(chartCanvas.getContext("2d"), {
            type: "bar",
            data: {
                labels: payments.map(p => p.tarih),
                datasets: [{
                    data: payments.map(p => p.tutar),
                    backgroundColor: payments.map(p =>
                        p.odeme_durumu === "Ödendi" ? "green" : "red"
                    )
                }]
            },
            options: {
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } }
            }
        });

    } catch (err) {
        console.error("Ödeme bilgisi getirme hatası:", err);
    }

    /*** LOGOUT ***/
    window.logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = "login.html";
    };
});

