# RabbitMQ Setup in WSL (Ubuntu)

This guide documents the steps to **install, configure, and auto-start RabbitMQ** inside WSL.

---

## **1. Update and Install Dependencies**

```bash
sudo apt update
sudo apt install -y curl gnupg apt-transport-https
sudo apt install -y erlang
```

# Add RabbitMQ signing key
```
sudo curl -fsSL https://packagecloud.io/rabbitmq/rabbitmq-server/gpgkey \
  | sudo gpg --dearmor -o /usr/share/keyrings/rabbitmq-archive-keyring.gpg
```

# Add repository
```
echo "deb [signed-by=/usr/share/keyrings/rabbitmq-archive-keyring.gpg] \
https://packagecloud.io/rabbitmq/rabbitmq-server/ubuntu/ focal main" \
| sudo tee /etc/apt/sources.list.d/rabbitmq.list
```

# Update and install RabbitMQ
```
sudo apt update
sudo apt install -y rabbitmq-server

sudo service rabbitmq-server start
sudo service rabbitmq-server status

sudo rabbitmq-plugins enable rabbitmq_management
sudo service rabbitmq-server restart
```

http://localhost:15672
Username: guest  Password: guest

```
notepad $env:USERPROFILE\.wslconfig
```
Add this to the file:
```
[boot]
systemd=true
```

```
wsl --shutdown
```

```
systemctl --version
```

```
sudo systemctl enable rabbitmq-server
sudo systemctl start rabbitmq-server
```

```
sudo systemctl status rabbitmq-server
```
