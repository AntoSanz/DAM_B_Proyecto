# DAM_B_Proyecto
Proyecto final del curso de Desarrollo Multiplataformas

## Tecnologías:
Frontend: React
Backend: Node.js + Express
Auth; Kigub cib HWT
DB: SQL (MySQL)

## Estructura del proyecto

proyecto/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── env.js
│   │   │
│   │   ├── controllers/
│   │   │   └── auth.controller.js
│   │   │
│   │   ├── middlewares/
│   │   │   └── auth.middleware.js
│   │   │
│   │   ├── models/
│   │   │   └── user.model.js
│   │   │
│   │   ├── routes/
│   │   │   └── auth.routes.js
│   │   │
│   │   ├── services/
│   │   │   └── auth.service.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── auth.api.js
│   │   │
│   │   ├── components/
│   │   │   └── Login.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── LoginPage.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── services/
│   │   │   └── auth.service.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── README.md
│
└── README.md