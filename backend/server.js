import fs from 'fs';
import dotenv from 'dotenv';

if (fs.existsSync('.env.development.local')) {
    dotenv.config({ path: '.env.development.local' });
} else {
    dotenv.config();
};

console.log(`Env is loaded in ${process.env.NODE_ENV} mode.`);

const PORT = process.env.PORT || 8383;

const startServer = async () => {

    try {
        const { default: app } = await import('./config/express.config.js');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode.`);
        });

        app.get('/', (req, res) => {
            res.send('API is running...');
        });

    } catch (error) {
        console.error("Error starting the server:", error);
        process.exit(1);
    }
};

startServer();
