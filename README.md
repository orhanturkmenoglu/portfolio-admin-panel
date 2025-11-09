# Portfolio Admin Panel

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🚀 Modern ve responsive bir portföy yönetim paneli. React + TailwindCSS frontend ve Spring Boot backend ile geliştirilmiştir. Kullanıcılar projelerini, yeteneklerini, iş deneyimlerini ve ayarlarını yönetebilir.

---

## 📌 Özellikler

### Frontend
- React 18 + TailwindCSS ile responsive UI
- Dark mode desteği
- Sidebar & Navbar ile kolay navigasyon
- Dashboard: istatistik kartları ve grafikler (Chart.js)
- Proje, Yetenek ve İş Deneyimi yönetim formları
- Mobil uyumlu tasarım

### Backend
- Spring Boot 3.x
- RESTful API
- DTO ve validation ile veri güvenliği
- Swagger/OpenAPI entegrasyonu
- CRUD işlemleri: Projeler, Yetenekler, İş Deneyimi
- Rol tabanlı erişim yönetimi (USER / ADMIN)

---

## 🛠️ Teknolojiler

- **Frontend:** React, TailwindCSS, Chart.js, React Router
- **Backend:** Java 17+, Spring Boot,Spring Data MongoDB,Jakarta Validation (Bean Validation),Springdoc OpenAPI (Swagger),Maven
- **Veritabanı:** MongoDB
- **Araçlar:** Maven, Git, Swagger UI

---

## 🚀 Kurulum

### 1. Backend
```bash
git clone <backend-repo-url>
cd backend
./mvnw clean install
./mvnw spring-boot:run
