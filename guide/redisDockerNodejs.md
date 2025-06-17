🚀 Self-Hosted Redis with Docker on Windows

This guide helps you set up Redis using Docker on Windows and connect it to your Node.js backend for caching, locking, or session management purposes.

---

🐳 Prerequisites

- Docker Desktop installed and running
- Node.js backend set up (TypeScript or JavaScript)
- Redis client library (ioredis) installed

---

📦 Step 1: Run Redis Container via Docker

Run the following command in your terminal:

docker run -d --name redis-server \
 -p 6379:6379 \
 -v redis-data:/data \
 redis \
 redis-server --requirepass "yourStrongPassword"

Explanation:

- -p 6379:6379: exposes Redis on your localhost
- -v redis-data:/data: ensures data is persisted across restarts
- --requirepass: sets Redis password

---

🔍 Step 2: Check Redis is Running

Check container status:

docker ps

Access Redis CLI:

docker exec -it redis-server redis-cli

Test authentication and connection:

AUTH yourStrongPassword
PING

Expected output:
PONG

---

📦 Step 3: Install Redis Client in Node.js

In your project folder:

npm install ioredis

---

🔌 Step 4: Create Redis Client File

Create a file redisClient.ts or redisClient.js in your src/config folder:

import Redis from "ioredis";

const redis = new Redis({
host: "127.0.0.1",
port: 6379,
password: "yourStrongPassword"
});

redis.on("connect", () => console.log("✅ Redis connected"));
redis.on("error", (err) => console.error("❌ Redis error:", err));

export default redis;

---

✏️ Step 5: Use Redis in Controller

import redis from "../config/redisClient";

export const exampleController = async (req, res) => {
const key = "quotation:latest";

// Try to get from Redis cache
const cached = await redis.get(key);
if (cached) {
return res.send({ source: "cache", data: JSON.parse(cached) });
}

// Simulate data from DB
const data = { id: 1, name: "Test Quotation", timestamp: Date.now() };

// Set Redis cache for 1 hour
await redis.set(key, JSON.stringify(data), "EX", 3600);

res.send({ source: "api", data });
};

---

🧹 Step 6: Managing Redis Container

To stop Redis:
docker stop redis-server

To start it again:
docker start redis-server

To remove the container:
docker rm -f redis-server

To remove the volume:
docker volume rm redis-data

---

🔐 Security Tips

- Redis must NOT be exposed to the public internet
- Use strong passwords
- Use localhost or internal Docker network
- Consider enabling TLS and auth in production

---

🧠 Optional: Transaction + Redis Lock Pattern

To prevent race conditions with Redis:

const lockKey = `lock:quotation:${quotationNum}`;
const lock = await redis.set(lockKey, "locked", "NX", "EX", 5); // Lock for 5s

if (!lock) {
return res.status(429).send({ message: "Too many requests. Try again." });
}

try {
await AppDataSourceMain.transaction(async (manager) => {
// ... your insert logic here
});
} finally {
await redis.del(lockKey); // Always release lock
}

---

🧭 Notes

- This setup is fully local and free
- Ideal for development and internal tools
- Upgrade to Docker Compose or Redis cluster for scaling

---

✅ Done!

You now have:

- Redis running on Docker locally
- Node.js backend connected with Redis
- Transaction wrapper for database consistency
- Optional Redis locking pattern for race condition protection
