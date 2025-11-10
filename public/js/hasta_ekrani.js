 // Sidebar Toggle Fonksiyonu
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const toggleIcon = document.getElementById('toggleIcon');
            
            sidebar.classList.toggle('collapsed');
            
            if (sidebar.classList.contains('collapsed')) {
                toggleIcon.textContent = '▶';
            } else {
                toggleIcon.textContent = '◀';
            }
        }

        // Mobil Sidebar Toggle
        function toggleMobileSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobileOverlay');
            const hamburger = document.getElementById('hamburgerMenu');
            
            sidebar.classList.toggle('mobile-open');
            overlay.classList.toggle('active');
            hamburger.classList.toggle('active');
        }

        // Mobil Sidebar Kapatma
        function closeMobileSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobileOverlay');
            const hamburger = document.getElementById('hamburgerMenu');
            
            sidebar.classList.remove('mobile-open');
            overlay.classList.remove('active');
            hamburger.classList.remove('active');
        }

        // Sayfa Yükleme
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
                                <span class="card-title">Bekleyen Randevular</span>
                                <span class="card-icon">📅</span>
                            </div>
                            <div class="card-value">2</div>
                            <div class="card-footer">Bir sonraki: 15 Kasım 2025</div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <span class="card-title">Toplam Seans</span>
                                <span class="card-icon">📋</span>
                            </div>
                            <div class="card-value">24</div>
                            <div class="card-footer">Son seans: 8 Kasım 2025</div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <span class="card-title">Bekleyen Ödeme</span>
                                <span class="card-icon">💰</span>
                            </div>
                            <div class="card-value">₺800</div>
                            <div class="card-footer negative">1 ödeme bekliyor</div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <span class="card-title">Son Randevu</span>
                                <span class="card-icon">🕐</span>
                            </div>
                            <div class="card-value">15 Kas</div>
                            <div class="card-footer">Saat: 14:00</div>
                        </div>
                    </div>
                    <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-top: 20px;">
                        <h2 style="color: #333; margin-bottom: 20px;">Hoş Geldiniz, Elif Hanım!</h2>
                        <p style="color: #666; line-height: 1.6;">
                            Hasta panelinize hoş geldiniz. Bu panelden randevularınızı görüntüleyebilir, 
                            yeni randevu oluşturabilir, geçmiş seanslarınıza göz atabilir ve ödeme işlemlerinizi 
                            gerçekleştirebilirsiniz. Herhangi bir sorunuz olduğunda bizimle iletişime geçebilirsiniz.
                        </p>
                    </div>
                `,
                'randevularim': `
                    <h1>Randevularım</h1>
                    <div class="breadcrumb">Ana Sayfa / Randevularım</div>
                    <div class="table-container">
                        <h3 style="margin-bottom: 20px;">Aktif Randevular</h3>
                        <table>
                            <thead>
                                <tr>
                                    <td>15 Kasım 2025</td>
                                    <td>14:00</td>
                                    <td>Dr. Ayşe Yılmaz</td>
                                    <td>Bireysel Terapi</td>
                                    <td><span class="status-badge status-bekliyor">Bekliyor</span></td>
                                </tr>
                                <tr>
                                    <td>22 Kasım 2025</td>
                                    <td>10:00</td>
                                    <td>Dr. Ayşe Yılmaz</td>
                                    <td>Bireysel Terapi</td>
                                    <td><span class="status-badge status-bekliyor">Bekliyor</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `,
                'yeni-randevu': `
                    <h1>Yeni Randevu Oluştur</h1>
                    <div class="breadcrumb">Ana Sayfa / Yeni Randevu Oluştur</div>
                    <div class="form-container">
                        <h3 style="margin-bottom: 25px;">Randevu Bilgileri</h3>
                        <form onsubmit="event.preventDefault(); createAppointment();">
                            <div class="form-row">
                                <div class="form-group">
                                    <label>Tarih *</label>
                                    <input type="date" required min="${new Date().toISOString().split('T')[0]}">
                                </div>
                                <div class="form-group">
                                    <label>Saat *</label>
                                    <input type="time" required>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label>Psikolog Seçimi *</label>
                                <select required>
                                    <option value="">Psikolog Seçiniz</option>
                                    <option value="1">Dr. Ayşe Yılmaz</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label>Seans Türü *</label>
                                <select required>
                                    <option value="">Seans Türü Seçiniz</option>
                                    <option value="bireysel">Bireysel Terapi (60 dk) - ₺800</option>
                                    <option value="cift">Çift Terapisi (90 dk) - ₺1200</option>
                                    <option value="aile">Aile Terapisi (90 dk) - ₺1500</option>
                                    <option value="grup">Grup Terapisi (120 dk) - ₺600</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label>Notlar (İsteğe bağlı)</label>
                                <textarea placeholder="Randevunuzla ilgili eklemek istediğiniz notlar..."></textarea>
                            </div>

                            <div style="display: flex; gap: 10px; margin-top: 25px;">
                                <button type="submit" class="btn btn-primary">Randevu Oluştur</button>
                                <button type="button" class="btn btn-secondary" onclick="loadPage('dashboard')">İptal</button>
                            </div>
                        </form>
                    </div>
                `,
                'gecmis-seanslar': `
                    <h1>Geçmiş Seanslar</h1>
                    <div class="breadcrumb">Ana Sayfa / Geçmiş Seanslar</div>
                    <div class="table-container">
                        <h3 style="margin-bottom: 20px;">Tamamlanan Seanslar</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tarih</th>
                                    <th>Psikolog</th>
                                    <th>Seans Türü</th>
                                    <th>Süre</th>
                                    <th>Ödeme</th>
                                    <th>Durum</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>8 Kasım 2025</td>
                                    <td>Dr. Ayşe Yılmaz</td>
                                    <td>Bireysel Terapi</td>
                                    <td>60 dk</td>
                                    <td>₺800</td>
                                    <td><span class="status-badge status-tamamlandi">Tamamlandı</span></td>
                                </tr>
                                <tr>
                                    <td>1 Kasım 2025</td>
                                    <td>Dr. Ayşe Yılmaz</td>
                                    <td>Bireysel Terapi</td>
                                    <td>60 dk</td>
                                    <td>₺800</td>
                                    <td><span class="status-badge status-tamamlandi">Tamamlandı</span></td>
                                </tr>
                                <tr>
                                    <td>25 Ekim 2025</td>
                                    <td>Dr. Ayşe Yılmaz</td>
                                    <td>Bireysel Terapi</td>
                                    <td>60 dk</td>
                                    <td>₺800</td>
                                    <td><span class="status-badge status-tamamlandi">Tamamlandı</span></td>
                                </tr>
                                <tr>
                                    <td>18 Ekim 2025</td>
                                    <td>Dr. Ayşe Yılmaz</td>
                                    <td>Bireysel Terapi</td>
                                    <td>60 dk</td>
                                    <td>₺800</td>
                                    <td><span class="status-badge status-tamamlandi">Tamamlandı</span></td>
                                </tr>
                                <tr>
                                    <td>11 Ekim 2025</td>
                                    <td>Dr. Ayşe Yılmaz</td>
                                    <td>Bireysel Terapi</td>
                                    <td>60 dk</td>
                                    <td>₺800</td>
                                    <td><span class="status-badge status-tamamlandi">Tamamlandı</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `,
                'odemelerim': `
                    <h1>Ödemelerim</h1>
                    <div class="breadcrumb">Ana Sayfa / Ödemelerim</div>
                    
                    <div class="dashboard-cards" style="margin-bottom: 30px;">
                        <div class="card">
                            <div class="card-header">
                                <span class="card-title">Toplam Ödenen</span>
                                <span class="card-icon">✅</span>
                            </div>
                            <div class="card-value">₺19,200</div>
                            <div class="card-footer">24 seans tamamlandı</div>
                        </div>
                        <div class="card">
                            <div class="card-header">
                                <span class="card-title">Bekleyen Ödeme</span>
                                <span class="card-icon">⏳</span>
                            </div>
                            <div class="card-value">₺800</div>
                            <div class="card-footer negative">1 ödeme bekliyor</div>
                        </div>
                    </div>

                    <div class="table-container" style="margin-bottom: 30px;">
                        <h3 style="margin-bottom: 20px; color: #dc3545;">Bekleyen Ödemeler</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Seans Tarihi</th>
                                    <th>Seans Türü</th>
                                    <th>Tutar</th>
                                    <th>Son Ödeme Tarihi</th>
                                    <th>İşlem</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>8 Kasım 2025</td>
                                    <td>Bireysel Terapi</td>
                                    <td>₺800</td>
                                    <td>15 Kasım 2025</td>
                                    <td><button class="btn btn-primary" onclick="makePayment()">Ödeme Yap</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="table-container">
                        <h3 style="margin-bottom: 20px; color: #28a745;">Ödeme Geçmişi</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Ödeme Tarihi</th>
                                    <th>Seans Tarihi</th>
                                    <th>Seans Türü</th>
                                    <th>Tutar</th>
                                    <th>Ödeme Yöntemi</th>
                                    <th>Durum</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2 Kasım 2025</td>
                                    <td>1 Kasım 2025</td>
                                    <td>Bireysel Terapi</td>
                                    <td>₺800</td>
                                    <td>Kredi Kartı</td>
                                    <td><span class="status-badge status-odendi">Ödendi</span></td>
                                </tr>
                                <tr>
                                    <td>26 Ekim 2025</td>
                                    <td>25 Ekim 2025</td>
                                    <td>Bireysel Terapi</td>
                                    <td>₺800</td>
                                    <td>Nakit</td>
                                    <td><span class="status-badge status-odendi">Ödendi</span></td>
                                </tr>
                                <tr>
                                    <td>19 Ekim 2025</td>
                                    <td>18 Ekim 2025</td>
                                    <td>Bireysel Terapi</td>
                                    <td>₺800</td>
                                    <td>Kredi Kartı</td>
                                    <td><span class="status-badge status-odendi">Ödendi</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `,
                'profilim': `
                    <h1>Profilim</h1>
                    <div class="breadcrumb">Ana Sayfa / Profilim</div>
                    <div class="form-container">
                        <h3 style="margin-bottom: 25px;">Kişisel Bilgiler</h3>
                        <form onsubmit="event.preventDefault(); updateProfile();">
                            <div class="form-row">
                                <div class="form-group">
                                    <label>Ad *</label>
                                    <input type="text" value="Elif" required>
                                </div>
                                <div class="form-group">
                                    <label>Soyad *</label>
                                    <input type="text" value="Demir" required>
                                </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="form-group">
                                    <label>E-posta *</label>
                                    <input type="email" value="elif.demir@email.com" required>
                                </div>
                                <div class="form-group">
                                    <label>Telefon *</label>
                                    <input type="tel" value="0532 123 45 67" required>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label>Doğum Tarihi</label>
                                    <input type="date" value="1990-05-15">
                                </div>
                                <div class="form-group">
                                    <label>Cinsiyet</label>
                                    <select>
                                        <option value="kadin" selected>Kadın</option>
                                        <option value="erkek">Erkek</option>
                                        <option value="diger">Belirtmek İstemiyorum</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Adres</label>
                                <textarea>Atatürk Cad. No: 123 Nilüfer/Bursa</textarea>
                            </div>

                            <div style="display: flex; gap: 10px; margin-top: 25px;">
                                <button type="submit" class="btn btn-primary">Bilgileri Güncelle</button>
                            </div>
                        </form>
                    </div>
                `,
                'ayarlar': `
                    <h1>Ayarlar</h1>
                    <div class="breadcrumb">Ana Sayfa / Ayarlar</div>
                    <div class="form-container">
                        <h3 style="margin-bottom: 25px;">Şifre Değiştir</h3>
                        <form onsubmit="event.preventDefault(); changePassword();">
                            <div class="form-group">
                                <label>Mevcut Şifre *</label>
                                <input type="password" required>
                            </div>
                            
                            <div class="form-group">
                                <label>Yeni Şifre *</label>
                                <input type="password" required>
                            </div>

                            <div class="form-group">
                                <label>Yeni Şifre Tekrar *</label>
                                <input type="password" required>
                            </div>

                            <div style="display: flex; gap: 10px; margin-top: 25px;">
                                <button type="submit" class="btn btn-primary">Şifreyi Güncelle</button>
                            </div>
                        </form>

                        <hr style="margin: 40px 0; border: none; border-top: 1px solid #ddd;">

                        <h3 style="margin-bottom: 25px;">Bildirim Ayarları</h3>
                        <div style="display: flex; flex-direction: column; gap: 15px;">
                            <label style="display: flex; align-items: center; gap: 10px;">
                                <input type="checkbox" checked>
                                <span>E-posta bildirimleri</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 10px;">
                                <input type="checkbox" checked>
                                <span>SMS bildirimleri</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 10px;">
                                <input type="checkbox" checked>
                                <span>Randevu hatırlatmaları</span>
                            </label>
                        </div>
                    </div>
                `
            };
            
            mainContent.innerHTML = pageContents[pageName] || pageContents['dashboard'];
        }

        // Randevu Oluşturma
        function createAppointment() {
            alert('Randevunuz başarıyla oluşturuldu!');
            loadPage('randevularim');
        }

        // Ödeme Yapma
        function makePayment() {
            if (confirm('Ödemeyi onaylıyor musunuz?')) {
                alert('Ödemeniz başarıyla alındı!');
                loadPage('odemelerim');
            }
        }

        // Profil Güncelleme
        function updateProfile() {
            alert('Profiliniz başarıyla güncellendi!');
        }

        // Şifre Değiştirme
        function changePassword() {
            alert('Şifreniz başarıyla değiştirildi!');
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
            setTimeout(() => {
                document.querySelector('.sidebar').style.opacity = '1';
            }, 100);
        });