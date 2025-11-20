// Sayfa içerikleri
        const pages = {
            dashboard: `
                <div class="page-header">
                    <h1>Hoş Geldiniz, Ahmet Yılmaz</h1>
                    <div class="breadcrumb">Ana Sayfa</div>
                </div>

                <div class="dashboard-cards">
                    <div class="card">
                        <div class="card-header">
                            <div>
                                <div class="card-title">Toplam Seans</div>
                                <div class="card-value">24</div>
                            </div>
                            <div class="card-icon">📊</div>
                        </div>
                        <div class="card-footer">Son seans: 15 Kas 2024</div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <div>
                                <div class="card-title">Yaklaşan Randevu</div>
                                <div class="card-value" style="font-size: 20px;">22 Kas 2024</div>
                            </div>
                            <div class="card-icon">📅</div>
                        </div>
                        <div class="card-footer">Saat: 14:00</div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <div>
                                <div class="card-title">Ödeme Durumu</div>
                                <div class="card-value">₺1,200</div>
                            </div>
                            <div class="card-icon">💰</div>
                        </div>
                        <div class="card-footer" style="color: #dc3545;">Bekleyen ödeme</div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <div>
                                <div class="card-title">Terapi Süresi</div>
                                <div class="card-value">6</div>
                            </div>
                            <div class="card-icon">⏱</div>
                        </div>
                        <div class="card-footer">Ay</div>
                    </div>
                </div>

                <div class="content-section">
                    <div class="section-header">
                        <h2>Yaklaşan Randevularım</h2>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Tarih</th>
                                <th>Saat</th>
                                <th>Seans Türü</th>
                                <th>Psikolog</th>
                                <th>Durum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>22 Kasım 2024</td>
                                <td>14:00</td>
                                <td>Bireysel Terapi</td>
                                <td>Dr. Ayşe Demir</td>
                                <td><span class="status-badge status-upcoming">Onaylandı</span></td>
                            </tr>
                            <tr>
                                <td>29 Kasım 2024</td>
                                <td>15:30</td>
                                <td>Bireysel Terapi</td>
                                <td>Dr. Ayşe Demir</td>
                                <td><span class="status-badge status-upcoming">Onaylandı</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,

            randevu: `
                <div class="page-header">
                    <h1>Randevu Al</h1>
                    <div class="breadcrumb">Ana Sayfa / Randevu Al</div>
                </div>

                <div class="content-section">
                    <div class="section-header">
                        <h2>Seans Türü Seçin</h2>
                    </div>
                    <div class="seans-type-grid">
                        <div class="seans-type-card" onclick="selectSeansType(this, 'bireysel')">
                            <div class="icon">👤</div>
                            <div class="name">Bireysel Terapi</div>
                            <div class="duration">50 dakika</div>
                            <div class="price">₺800</div>
                        </div>
                        <div class="seans-type-card" onclick="selectSeansType(this, 'cift')">
                            <div class="icon">👫</div>
                            <div class="name">Çift Terapisi</div>
                            <div class="duration">60 dakika</div>
                            <div class="price">₺1,200</div>
                        </div>
                        <div class="seans-type-card" onclick="selectSeansType(this, 'aile')">
                            <div class="icon">👨‍👩‍👧‍👦</div>
                            <div class="name">Aile Terapisi</div>
                            <div class="duration">60 dakika</div>
                            <div class="price">₺1,500</div>
                        </div>
                        <div class="seans-type-card" onclick="selectSeansType(this, 'online')">
                            <div class="icon">💻</div>
                            <div class="name">Online Seans</div>
                            <div class="duration">45 dakika</div>
                            <div class="price">₺600</div>
                        </div>
                    </div>
                </div>

                <div class="content-section" style="margin-top: 20px;">
                    <div class="section-header">
                        <h2>Randevu Detayları</h2>
                    </div>
                    <form class="appointment-form" onsubmit="createAppointment(event)">
                        <div class="form-group">
                            <label for="psikolog">Psikolog Seçin</label>
                            <select id="psikolog" required>
                                <option value="">Seçiniz</option>
                                <option value="1">Dr. Ayşe Demir</option>
                                <option value="2">Dr. Mehmet Kaya</option>
                                <option value="3">Dr. Zeynep Yılmaz</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="tarih">Randevu Tarihi</label>
                            <input type="date" id="tarih" required min="${new Date().toISOString().split('T')[0]}">
                        </div>
                        <div class="form-group">
                            <label for="saat">Randevu Saati</label>
                            <select id="saat" required>
                                <option value="">Seçiniz</option>
                                <option value="09:00">09:00</option>
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                                <option value="13:00">13:00</option>
                                <option value="14:00">14:00</option>
                                <option value="15:00">15:00</option>
                                <option value="16:00">16:00</option>
                                <option value="17:00">17:00</option>
                            </select>
                        </div>
                        <div class="form-group" style="grid-column: 1 / -1;">
                            <label for="notlar">Notlar (Opsiyonel)</label>
                            <textarea id="notlar" rows="3" placeholder="Belirtmek istediğiniz özel bir durum varsa yazabilirsiniz..."></textarea>
                        </div>
                        <div class="form-group" style="grid-column: 1 / -1;">
                            <button type="submit" class="btn btn-primary" style="width: 100%;">
                                📅 Randevu Oluştur
                            </button>
                        </div>
                    </form>
                </div>
            `,

            seanslar: `
                <div class="page-header">
                    <h1>Geçmiş Seanslarım</h1>
                    <div class="breadcrumb">Ana Sayfa / Geçmiş Seanslar</div>
                </div>

                <div class="content-section">
                    <div class="section-header">
                        <h2>Tüm Seanslar (24 seans)</h2>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Tarih</th>
                                <th>Saat</th>
                                <th>Seans Türü</th>
                                <th>Psikolog</th>
                                <th>Süre</th>
                                <th>Durum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>24</td>
                                <td>15 Kasım 2024</td>
                                <td>14:00</td>
                                <td>Bireysel Terapi</td>
                                <td>Dr. Ayşe Demir</td>
                                <td>50 dk</td>
                                <td><span class="status-badge status-completed">Tamamlandı</span></td>
                            </tr>
                            <tr>
                                <td>23</td>
                                <td>8 Kasım 2024</td>
                                <td>15:30</td>
                                <td>Bireysel Terapi</td>
                                <td>Dr. Ayşe Demir</td>
                                <td>50 dk</td>
                                <td><span class="status-badge status-completed">Tamamlandı</span></td>
                            </tr>
                            <tr>
                                <td>22</td>
                                <td>1 Kasım 2024</td>
                                <td>14:00</td>
                                <td>Online Seans</td>
                                <td>Dr. Ayşe Demir</td>
                                <td>45 dk</td>
                                <td><span class="status-badge status-completed">Tamamlandı</span></td>
                            </tr>
                            <tr>
                                <td>21</td>
                                <td>25 Ekim 2024</td>
                                <td>14:00</td>
                                <td>Bireysel Terapi</td>
                                <td>Dr. Ayşe Demir</td>
                                <td>50 dk</td>
                                <td><span class="status-badge status-completed">Tamamlandı</span></td>
                            </tr>
                            <tr>
                                <td>20</td>
                                <td>18 Ekim 2024</td>
                                <td>15:30</td>
                                <td>Bireysel Terapi</td>
                                <td>Dr. Ayşe Demir</td>
                                <td>50 dk</td>
                                <td><span class="status-badge status-completed">Tamamlandı</span></td>
                            </tr>
                            <tr>
                                <td>19</td>
                                <td>11 Ekim 2024</td>
                                <td>14:00</td>
                                <td>Çift Terapisi</td>
                                <td>Dr. Ayşe Demir</td>
                                <td>60 dk</td>
                                <td><span class="status-badge status-completed">Tamamlandı</span></td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>4 Ekim 2024</td>
                                <td>14:00</td>
                                <td>Bireysel Terapi</td>
                                <td>Dr. Ayşe Demir</td>
                                <td>50 dk</td>
                                <td><span class="status-badge status-cancelled">İptal Edildi</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,

            odemeler: `
                <div class="page-header">
                    <h1>Ödeme Bilgilerim</h1>
                    <div class="breadcrumb">Ana Sayfa / Ödemeler</div>
                </div>

                <div class="dashboard-cards">
                    <div class="card">
                        <div class="card-header">
                            <div>
                                <div class="card-title">Toplam Ödenen</div>
                                <div class="card-value">₺18,400</div>
                            </div>
                            <div class="card-icon">✅</div>
                        </div>
                        <div class="card-footer">24 seans için</div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <div>
                                <div class="card-title">Bekleyen Ödeme</div>
                                <div class="card-value" style="color: #dc3545;">₺1,200</div>
                            </div>
                            <div class="card-icon">⏳</div>
                        </div>
                        <div class="card-footer" style="color: #dc3545;">1 seans için</div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <div>
                                <div class="card-title">Bu Ayki Ödeme</div>
                                <div class="card-value">₺3,200</div>
                            </div>
                            <div class="card-icon">📅</div>
                        </div>
                        <div class="card-footer">4 seans</div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <div>
                                <div class="card-title">Ortalama Seans</div>
                                <div class="card-value">₺767</div>
                            </div>
                            <div class="card-icon">💰</div>
                        </div>
                        <div class="card-footer">Aylık</div>
                    </div>
                </div>

                <div class="content-section">
                    <div class="section-header">
                        <h2>Ödeme Geçmişi</h2>
                        <button class="btn btn-primary" onclick="makePayment()">💳 Ödeme Yap</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Tarih</th>
                                <th>Seans</th>
                                <th>Tutar</th>
                                <th>Ödeme Yöntemi</th>
                                <th>Durum</th>
                                <th>Makbuz</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15 Kasım 2024</td>
                                <td>Bireysel Terapi</td>
                                <td>₺800</td>
                                <td>Kredi Kartı</td>
                                <td><span class="status-badge status-pending">Bekliyor</span></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>8 Kasım 2024</td>
                                <td>Bireysel Terapi</td>
                                <td>₺800</td>
                                <td>Nakit</td>
                                <td><span class="status-badge status-paid">Ödendi</span></td>
                                <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 12px;" onclick="downloadReceipt()">📄 İndir</button></td>
                            </tr>
                            <tr>
                                <td>1 Kasım 2024</td>
                                <td>Online Seans</td>
                                <td>₺600</td>
                                <td>Havale</td>
                                <td><span class="status-badge status-paid">Ödendi</span></td>
                                <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 12px;" onclick="downloadReceipt()">📄 İndir</button></td>
                            </tr>
                            <tr>
                                <td>25 Ekim 2024</td>
                                <td>Bireysel Terapi</td>
                                <td>₺800</td>
                                <td>Kredi Kartı</td>
                                <td><span class="status-badge status-paid">Ödendi</span></td>
                                <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 12px;" onclick="downloadReceipt()">📄 İndir</button></td>
                            </tr>
                            <tr>
                                <td>18 Ekim 2024</td>
                                <td>Bireysel Terapi</td>
                                <td>₺800</td>
                                <td>Nakit</td>
                                <td><span class="status-badge status-paid">Ödendi</span></td>
                                <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 12px;" onclick="downloadReceipt()">📄 İndir</button></td>
                            </tr>
                            <tr>
                                <td>11 Ekim 2024</td>
                                <td>Çift Terapisi</td>
                                <td>₺1,200</td>
                                <td>Kredi Kartı</td>
                                <td><span class="status-badge status-paid">Ödendi</span></td>
                                <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 12px;" onclick="downloadReceipt()">📄 İndir</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,

            profil: `
                <div class="page-header">
                    <h1>Profilim</h1>
                    <div class="breadcrumb">Ana Sayfa / Profilim</div>
                </div>

                <div class="content-section">
                    <div class="section-header">
                        <h2>Kişisel Bilgiler</h2>
                        <button class="btn btn-primary" onclick="editProfile()">✏ Düzenle</button>
                    </div>
                    <div class="appointment-form">
                        <div class="form-group">
                            <label>Ad Soyad</label>
                            <input type="text" value="Ahmet Yılmaz" readonly>
                        </div>
                        <div class="form-group">
                            <label>TC Kimlik No</label>
                            <input type="text" value="12345678901" readonly>
                        </div>
                        <div class="form-group">
                            <label>Telefon</label>
                            <input type="tel" value="0532 123 4567" readonly>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" value="ahmet@email.com" readonly>
                        </div>
                        <div class="form-group">
                            <label>Doğum Tarihi</label>
                            <input type="date" value="1990-05-15" readonly>
                        </div>
                        <div class="form-group">
                            <label>Cinsiyet</label>
                            <input type="text" value="Erkek" readonly>
                        </div>
                        <div class="form-group" style="grid-column: 1 / -1;">
                            <label>Adres</label>
                            <textarea readonly rows="3">Ataşehir, İstanbul</textarea>
                        </div>
                    </div>
                </div>

                <div class="content-section" style="margin-top: 20px;">
                    <div class="section-header">
                        <h2>Acil Durum İletişim</h2>
                    </div>
                    <div class="appointment-form">
                        <div class="form-group">
                            <label>Acil Kişi Adı</label>
                            <input type="text" value="Ayşe Yılmaz" readonly>
                        </div>
                        <div class="form-group">
                            <label>Yakınlık Derecesi</label>
                            <input type="text" value="Eş" readonly>
                        </div>
                        <div class="form-group">
                            <label>Telefon</label>
                            <input type="tel" value="0533 234 5678" readonly>
                        </div>
                    </div>
                </div>

                <div class="content-section" style="margin-top: 20px;">
                    <div class="section-header">
                        <h2>Terapi Bilgileri</h2>
                    </div>
                    <div class="appointment-form">
                        <div class="form-group">
                            <label>Terapist</label>
                            <input type="text" value="Dr. Ayşe Demir" readonly>
                        </div>
                        <div class="form-group">
                            <label>Terapi Başlangıç Tarihi</label>
                            <input type="date" value="2024-05-20" readonly>
                        </div>
                        <div class="form-group">
                            <label>Toplam Seans</label>
                            <input type="text" value="24" readonly>
                        </div>
                        <div class="form-group">
                            <label>Terapi Türü</label>
                            <input type="text" value="Bireysel Terapi" readonly>
                        </div>
                    </div>
                </div>
            `
        };

        let selectedSeansType = null;

        // Sayfa gösterme
        function showPage(pageName) {
            const mainContent = document.getElementById('mainContent');
            mainContent.innerHTML = pages[pageName] || pages['dashboard'];
            
            // Aktif menü güncelleme
            document.querySelectorAll('.sidebar ul li a').forEach(link => {
                link.classList.remove('active');
            });
            event.target.closest('a').classList.add('active');

            // Mobil menüyü kapat
            if (window.innerWidth <= 768) {
                closeMobileSidebar();
            }
        }

        // Seans türü seçimi
        function selectSeansType(element, type) {
            document.querySelectorAll('.seans-type-card').forEach(card => {
                card.classList.remove('selected');
            });
            element.classList.add('selected');
            selectedSeansType = {
                type: type,
                name: element.querySelector('.name').textContent,
                price: element.querySelector('.price').textContent,
                duration: element.querySelector('.duration').textContent
            };
        }

        // Randevu oluşturma
        function createAppointment(event) {
            event.preventDefault();
            
            if (!selectedSeansType) {
                alert('Lütfen bir seans türü seçin!');
                return;
            }

            const psikolog = document.getElementById('psikolog');
            const tarih = document.getElementById('tarih');
            const saat = document.getElementById('saat');
            const notlar = document.getElementById('notlar');

            const details = `
                <div style="line-height: 2;">
                    <p><strong>Seans Türü:</strong> ${selectedSeansType.name}</p>
                    <p><strong>Süre:</strong> ${selectedSeansType.duration}</p>
                    <p><strong>Ücret:</strong> ${selectedSeansType.price}</p>
                    <p><strong>Psikolog:</strong> ${psikolog.options[psikolog.selectedIndex].text}</p>
                    <p><strong>Tarih:</strong> ${tarih.value}</p>
                    <p><strong>Saat:</strong> ${saat.value}</p>
                    ${notlar.value ? <p><strong>Notlar:</strong> ${notlar.value}</p> : ''}
                </div>
            `;

            document.getElementById('randevuDetails').innerHTML = details;
            document.getElementById('randevuModal').classList.add('active');
        }

        // Randevu onaylama
        function confirmAppointment() {
            alert('Randevunuz başarıyla oluşturuldu! Size bilgilendirme SMS\'i gönderilecektir.');
            closeModal();
            showPage('dashboard');
        }

        // Modal kapatma
        function closeModal() {
            document.getElementById('randevuModal').classList.remove('active');
        }

        // Ödeme yapma
        function makePayment() {
            alert('Ödeme sayfasına yönlendiriliyorsunuz...');
        }

        // Makbuz indirme
        function downloadReceipt() {
            alert('Makbuz PDF olarak indiriliyor...');
        }

        // Profil düzenleme
        function editProfile() {
            alert('Profil düzenleme sayfası açılıyor...');
        }

        // Çıkış
        function logout() {
            if (confirm('Çıkış yapmak istediğinize emin misiniz?')) {
                alert('Çıkış yapıldı!');
            }
        }

        // Mobil sidebar
        function toggleMobileSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobileOverlay');
            sidebar.classList.toggle('mobile-open');
            overlay.classList.toggle('active');
        }

        function closeMobileSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobileOverlay');
            sidebar.classList.remove('mobile-open');
            overlay.classList.remove('active');
        }

        // Sayfa yüklendiğinde dashboard'u göster
        window.onload = function() {
            showPage('dashboard');
        };

        // Modal dışına tıklanınca kapat
        document.getElementById('randevuModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });