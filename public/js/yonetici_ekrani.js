
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
            
            // Sayfa içeriğini değiştir
            const pageContents = {
                'dashboard': `
                    <h1>Dashboard</h1>
                    <div class="breadcrumb">Ana Sayfa / Dashboard</div>
                    <div class="dashboard-cards">
                        <div class="card">
                            <div class="card-header">
                                <span class="card-title">Bugünkü Randevular</span>
                                <span class="card-icon">📅</span>
                            </div>
                            <div class="card-value">12</div>
                            <div class="card-footer">↑ 3 yeni randevu</div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <span class="card-title">Aktif Danışanlar</span>
                                <span class="card-icon">👥</span>
                            </div>
                            <div class="card-value">48</div>
                            <div class="card-footer">↑ 5 yeni danışan</div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <span class="card-title">Bu Ayki Gelir</span>
                                <span class="card-icon">💰</span>
                            </div>
                            <div class="card-value">₺45,200</div>
                            <div class="card-footer">↑ %12 artış</div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <span class="card-title">Bekleyen Ödemeler</span>
                                <span class="card-icon">⏳</span>
                            </div>
                            <div class="card-value">₺8,500</div>
                            <div class="card-footer negative">↓ 3 ödeme bekleniyor</div>
                        </div>
                    </div>
                `,
                'randevular': `
                    <h1>Randevular</h1>
                    <div class="breadcrumb">Ana Sayfa / Randevular</div>
                    <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <h3>Randevu Listesi</h3>
                        <p>Randevu yönetim sayfası burada görüntülenecek...</p>
                    </div>
                `,
                'danisanlar': `
                    <h1>Danışan Listesi</h1>
                    <div class="breadcrumb">Ana Sayfa / Danışan Yönetimi / Danışan Listesi</div>
                    <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <h3>Tüm Danışanlar</h3>
                        <p>Danışan listesi burada görüntülenecek...</p>
                    </div>
                `,
                'yeni-danisan': `
                    <h1>Yeni Danışan Ekle</h1>
                    <div class="breadcrumb">Ana Sayfa / Danışan Yönetimi / Yeni Danışan</div>
                    <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <h3>Danışan Kayıt Formu</h3>
                        <p>Yeni danışan kayıt formu burada görüntülenecek...</p>
                    </div>
                `,
                'seans-gecmisi': `
                    <h1>Seans Geçmişi</h1>
                    <div class="breadcrumb">Ana Sayfa / Danışan Yönetimi / Seans Geçmişi</div>
                    <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <h3>Tüm Seanslar</h3>
                        <p>Seans geçmişi burada görüntülenecek...</p>
                    </div>
                `,
                'odemeler': `
                    <h1>Ödemeler</h1>
                    <div class="breadcrumb">Ana Sayfa / Finans / Ödemeler</div>
                    <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <h3>Ödeme İşlemleri</h3>
                        <p>Ödeme yönetim sayfası burada görüntülenecek...</p>
                    </div>
                `,
                'gelir-raporlari': `
                    <h1>Gelir Raporları</h1>
                    <div class="breadcrumb">Ana Sayfa / Finans / Gelir Raporları</div>
                    <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <h3>Finansal Raporlar</h3>
                        <p>Gelir raporları burada görüntülenecek...</p>
                    </div>
                `,
                'istatistikler': `
                    <h1>İstatistikler</h1>
                    <div class="breadcrumb">Ana Sayfa / Raporlar / İstatistikler</div>
                    <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <h3>Detaylı İstatistikler</h3>
                        <p>İstatistiksel veriler burada görüntülenecek...</p>
                    </div>
                `,
                'analizler': `
                    <h1>Analizler</h1>
                    <div class="breadcrumb">Ana Sayfa / Raporlar / Analizler</div>
                    <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <h3>Veri Analizleri</h3>
                        <p>Analiz raporları burada görüntülenecek...</p>
                    </div>
                `,
            };
            
            mainContent.innerHTML = pageContents[pageName] || pageContents['dashboard'];
        }

        // Çıkış Fonksiyonu
        function logout() {
            if (confirm('Çıkış yapmak istediğinize emin misiniz?')) {
                alert('Çıkış yapıldı!');
                // window.location.href = 'login.html';
            }
        }

        // Sayfa yüklendiğinde
        document.addEventListener('DOMContentLoaded', function() {
            // İlk yükleme animasyonu için kısa gecikme
            setTimeout(() => {
                document.querySelector('.sidebar').style.opacity = '1';
            }, 100);
        });