# RabbitMQ Setup in WSL (Ubuntu)

This guide documents the steps to **install, configure, and auto-start RabbitMQ** inside WSL.

---

## **1. Update and Install Dependencies**
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

## 4. Update and install RabbitMQ
```bash
sudo apt update
sudo apt install -y rabbitmq-server

sudo service rabbitmq-server start
sudo service rabbitmq-server status

sudo rabbitmq-plugins enable rabbitmq_management
sudo service rabbitmq-server restart
```

http://localhost:15672
Username: guest  Password: guest

```bash
notepad $env:USERPROFILE\.wslconfig
```
Add this to the file:
```bash
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
---

## 1. Add User
```bash
# check status
sudo rabbitmqctl status

# create a new vhost
sudo rabbitmqctl add_vhost /backend

# add a backend user
sudo rabbitmqctl add_user backend_user StrongPassword123!

# set permissions for that user on the /backend vhost
sudo rabbitmqctl set_permissions -p /backend backend_user ".*" ".*" ".*"

# (optional) delete guest user
sudo rabbitmqctl delete_user guest
```

## 2. Check User Exists
```bash
sudo rabbitmqctl list_users
```

## 3. Check vhost Exists
```bash
sudo rabbitmqctl list_vhosts
```

## 4. Check User Permission
```bash
sudo rabbitmqctl list_permissions -p /
```

## 5. Enable Management Plugin
```bash
sudo rabbitmq-plugins enable rabbitmq_management
```

## 6. Restart
```bash
sudo service rabbitmq-server restart
```
