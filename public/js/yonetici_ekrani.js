
        // Sayfa Yükleme (Demo)
        function loadPage(pageName) {
            const menuLinks = document.querySelectorAll('.sidebar ul li a');
            menuLinks.forEach(link => link.classList.remove('active'));
            event.target.closest('a').classList.add('active');
            
            const mainContent = document.getElementById('mainContent');
            
            // Mobil menüyü kapat
            if (window.innerWidth <= 768) {
                closeMobileSidebar();
            }
        }

        function logout() {
            // session temizleme (opsiyonel)
            localStorage.clear();
            sessionStorage.clear();

            // login sayfasına yönlendirme
            window.location.href = 'login.html';
        }

        // Sayfa yüklendiğinde
        document.addEventListener('DOMContentLoaded', function() {
            // İlk yükleme animasyonu için kısa gecikme
            setTimeout(() => {
                document.querySelector('.sidebar').style.opacity = '1';
            }, 100);
        });