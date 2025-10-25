function girisKontrol() {
  const kullanici = document.getElementById('kullanici_adi').value;
  const sifre = document.getElementById('sifre').value;

  if (kullanici === "admin" && sifre === "1234") {
    window.location.href = "yonetici_ekrani.html";
    return false; // sayfa yenilenmesin
  } else {
    alert("Kullanıcı adı veya şifre hatalı!");
    return false;
  }
}