# smart-shop
available command

    "npm run start": "node backend/server",
    "npm run server": "nodemon backend/server",
    "npm run client": "npm start --prefix frontend",
    "npm run dev": "concurrently \"npm run server\" \"npm run client\"",
    "npm run data:import": "node backend/seeder",
    "npm run data:destroy": "node backend/seeder -d"
