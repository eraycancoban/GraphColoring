import  {db} from "../db.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import {config}  from "../config/auth.config.js"



export const changePassword = (req, res) => {
    const id=req.params.id;
    const q = "SELECT * FROM users WHERE user_id = ?";

    db.query(q, [id], (err, data) => {
        if (err) return res.json(err);
        if (!data.length) return res.status(404).json("Kullanıcı bulunamadı");

        const user = data[0];
        const isPasswordValid = bcrypt.compareSync(req.body.oldPassword, user.password);

        if (!isPasswordValid) return res.status(401).json("Mevcut şifre geçersiz");

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.newPassword, salt);

        const q2 = "UPDATE users SET password = ? WHERE user_id = ?";
        const values = [
            hash,
            id
        ];

        db.query(q2, values, (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("Şifre başarıyla değiştirildi");
        });
    });
};


export const register = (req, res) => {
    const userType = req.body.userType; // Kullanıcı tipini al

    // Kullanıcı var mı kontrol et
    const q = `SELECT * FROM ${userType === 'student' ? 'ogrenciler' : 'hocalar'} WHERE ${userType === 'student' ? 'ogrenci_eposta' : 'hoca_eposta'} = ?`;

    db.query(q, [req.body.email], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("Bu email adresi kullanılıyor");

        // Şifreyi hashle
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // Kayıt
        const insertTable = userType === 'student' ? 'ogrenciler' : 'hocalar';
        const q2 = `INSERT INTO ${insertTable} (${userType === 'student' ? 'ogrenci_ad, ogrenci_soyad, ogrenci_eposta, sifre' : 'hoca_ad, hoca_soyad, hoca_eposta, hoca_unvan, hoca_sifre'}) VALUES (?)`;
        const values = userType === 'student'
            ? [req.body.ad, req.body.soyad, req.body.email, hash]
            : [req.body.ad, req.body.soyad, req.body.email, req.body.unvan, hash];

        db.query(q2, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json(`${userType === 'student' ? 'Öğrenci' : 'Kullanıcı'} eklendi`);
        });
    });
};


export const login = (req, res) => {
    const userType = req.body.userType; // Kullanıcı tipini al
    const database = userType === 'student' ? 'ogrenciler' : 'hocalar'
    const emailField = userType === 'student' ? 'ogrenci_eposta' : 'hoca_eposta';
    const passwordField = userType === 'student' ? 'sifre' : 'hoca_sifre';

    const q = `SELECT * FROM ${database} WHERE ${emailField} = ?`;

    db.query(q, [req.body.email], (err, data) => {
        if (err) return res.json(err);

        // Kullanıcı bulunamadığında
        if (data.length === 0) {
            return res.status(404).json("Kullanici bulunamadi");
        }

        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            data[0][passwordField]
        );

        // Parola doğrulama hatası
        if (!isPasswordCorrect) {
            return res.status(400).json("Parola hatası");
        }

        const token = jwt.sign({ id: data[0].user_id }, config.secret, {
            expiresIn: 86400,
        });

        // password alanını filtreleyerek kullanıcı bilgilerini al
        const { [passwordField]: password, ...other } = data[0];

        res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json(other);
    });
};


export const logout = (req, res) => {
    res.clearCookie("access_token",{
      sameSite:"none",
      secure:true
    }).status(200).json("User has been logged out.")
  };


  

  