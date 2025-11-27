const express = require("express");
const router = express.Router();
const db = require("../db");

// -----------------------------------------------
// YAKLAŞAN RANDEVULAR
// -----------------------------------------------
router.get("/upcoming/:hasta_id", async (req, res) => {
    const hasta_id = req.params.hasta_id;

    try {
        const query = `
            SELECT 
                r.randevu_id,
                DATE_FORMAT(r.randevu_tarih, '%d %M %Y') AS tarih,
                DATE_FORMAT(r.randevu_tarih, '%H:%i') AS saat,
                h.hizmet_turu AS tur
            FROM randevu r
            JOIN hizmet h ON r.hizmet_id = h.hizmet_id
            WHERE r.hasta_id = ?
              AND r.randevu_tarih >= NOW()
            ORDER BY r.randevu_tarih ASC
            LIMIT 5;
        `;

        const [rows] = await db.query(query, [hasta_id]);
        res.json(rows);

    } catch (err) {
        console.error("Yaklaşan randevu hatası:", err);
        res.status(500).json({ message: "Veritabanı hatası" });
    }
});

// -----------------------------------------------
// ÖDEME DURUMU
// -----------------------------------------------
router.get("/payments/:hasta_id", async (req, res) => {
    const hasta_id = req.params.hasta_id;

    try {
        const query = `
            SELECT 
                o.tutar,
                o.odeme_durumu,
                DATE_FORMAT(o.odeme_tarihi, '%d %M %Y') AS tarih
            FROM odeme o
            JOIN randevu r ON o.randevu_id = r.randevu_id
            WHERE r.hasta_id = ?
            ORDER BY o.odeme_tarihi ASC;
        `;

        const [rows] = await db.query(query, [hasta_id]);
        res.json(rows);

    } catch (err) {
        console.error("Ödeme sorgu hatası:", err);
        res.status(500).json({ message: "Veritabanı hatası" });
    }
});

module.exports = router;
