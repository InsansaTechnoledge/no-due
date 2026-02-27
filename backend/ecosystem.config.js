module.exports = {
  apps: [
    {
      name: "no-due",
      script: "server.js",
      env: {
        NODE_ENV: "production",
        PORT: 3002,
        MONGO_URI: "mongodb+srv://harsh:harsh123@cluster0.oypby.mongodb.net/nodue",
        CLIENT_BASE_URL: "https://no-due-roan.vercel.app"

      }
    },
    {
      name: "no-due-stage",
      script: "server.js",
      env: {
        NODE_ENV: "production",
        PORT: 3003,
        MONGO_URI: "mongodb+srv://harsh:harsh123@cluster0.oypby.mongodb.net/nodue",
        CLIENT_BASE_URL: "https://no-due-git-main-thebaljitsinghs-projects.vercel.app"
      }
    }
  ]
};