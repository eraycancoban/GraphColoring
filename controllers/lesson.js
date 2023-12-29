import  {db} from "../db.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import {config}  from "../config/auth.config.js"

export const addLesson=(req,res)=>{
    
    const q="Select * From ders Where ders_kodu = ?"

    db.query(q,[req.body.dersKodu], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("Bu ders zaten eklenmiş");
        })

    const q2=`INSERT INTO Ders (ders_adi, ders_kodu, kontenjan, hoca_id, sinif_sene) VALUES (?)`
    const values = [
        req.body.dersAd,
        req.body.dersKodu,
        req.body.kontenjan,
        req.params.id,
        req.body.sene
       ]

    db.query(q2, [values], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json("ders eklendi");
    })
}

export const myLessons=(req,res)=>{
    const q="Select * From ders Where hoca_id = ?"
    db.query(q,[req.params.id],(err, data)=>{
        if (err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const selectLesson=(req,res)=>{
    const studentId = req.params.id; // Öğrenci ID'sini al
    const ders_id = req.body.ders_id; // Ders ID'sini al

    // Öğrencinin zaten bu dersi aldığını kontrol et
    const q = "SELECT * FROM ogrenci    ders WHERE ogrenci_id = ? AND ders_id = ?";
    
    db.query(q, [studentId, ders_id], (err, data) => {
        if (err) return res.json(err);

        // Öğrencinin zaten bu dersi aldığı durumu
        if (data.length > 0) {
            return res.status(409).json("Bu ders zaten eklenmiş");
        }

        // Dersi öğrenciye kaydet
        const q2 = "INSERT INTO ogrenciders (ogrenci_id, ders_id) VALUES (?, ?)";
        
        db.query(q2, [studentId, ders_id], (err, data) => {
            if (err) return res.json(err);

            return res.status(200).json("Ders başarıyla eklendi");
        });
    });
}

export const studentLessons = (req, res) => {
    const studentId = req.params.id; // Öğrenci ID'sini al

    // Öğrencinin zaten bu dersi aldığını kontrol et
    const q = "SELECT sınıfsenesi FROM ogrenciler WHERE ogrenci_id = ?";

    db.query(q, [studentId], (err, data) => {
        if (err) return res.json(err);

        // Öğrencinin sınıf senesi bilgisini al
        const sene = data[0].sınıfsenesi;

        // Dersleri öğrencinin sınıf senesine göre getir
        const q2 = "SELECT * FROM ders WHERE sinif_sene = ?";

        db.query(q2, [sene], (err, data) => {
            if (err) return res.json(err);

            return res.status(200).json(data);
        });
    });
};
