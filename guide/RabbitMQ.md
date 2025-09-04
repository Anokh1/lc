# 🐇 RabbitMQ Setup in WSL (Ubuntu)

This guide documents the steps to **install, configure, and auto-start RabbitMQ** inside WSL (Ubuntu).

---

## 🚀 Setup Instructions

## 1. Update and install dependencies
```bash
sudo apt update
sudo apt install -y curl gnupg apt-transport-https
sudo apt install -y erlang
```

## 2. Add RabbitMQ signing key
```bash
sudo curl -fsSL https://packagecloud.io/rabbitmq/rabbitmq-server/gpgkey \
  | sudo gpg --dearmor -o /usr/share/keyrings/rabbitmq-archive-keyring.gpg
```

## 3. Add repository
```bash
echo "deb [signed-by=/usr/share/keyrings/rabbitmq-archive-keyring.gpg] \
https://packagecloud.io/rabbitmq/rabbitmq-server/ubuntu/ focal main" \
| sudo tee /etc/apt/sources.list.d/rabbitmq.list
```

## 4. Install and start RabbitMQ
```bash
sudo apt update
sudo apt install -y rabbitmq-server

sudo service rabbitmq-server start
sudo service rabbitmq-server status
```

## Enable management UI
```bash
sudo rabbitmq-plugins enable rabbitmq_management
sudo service rabbitmq-server restart
```

### RabbitMQ Management UI

You can access the RabbitMQ Management Console here:  
🔗 [http://localhost:15672](http://localhost:15672)

| Username | Password |
|----------|----------|
| `guest`  | `guest`  |


## 5. Enable systemd in WSL (optional but recommended)
```bash
notepad $env:USERPROFILE\.wslconfig
```

## Add the following lines to the file:
```bash
# [boot]
# systemd=true
```
---
```bash
wsl --shutdown
systemctl --version

sudo systemctl enable rabbitmq-server
sudo systemctl start rabbitmq-server
sudo systemctl status rabbitmq-server
```

## 6. Create vhost and user for backend
```bash
sudo rabbitmqctl status
sudo rabbitmqctl add_vhost /backend
sudo rabbitmqctl add_user backend_user StrongPassword123!
sudo rabbitmqctl set_permissions -p /backend backend_user ".*" ".*" ".*"
```

## (optional) delete guest user
```bash
sudo rabbitmqctl delete_user guest
```

## 7. Verify setup
```bash
sudo rabbitmqctl list_users
sudo rabbitmqctl list_vhosts
sudo rabbitmqctl list_permissions -p /backend
```
