---
title: "Configurando Arch Linux no WSL2"
date: "2026-03-11"
excerpt: "Guia completo para instalar e configurar o Arch Linux no WSL2 do Windows, com Node.js, Git e autenticação SSH no GitHub."
tags: ["Arch Linux", "WSL2", "Windows", "Dev Environment", "Git", "SSH"]
---

# Configurando Arch Linux no WSL2

O WSL2 (Windows Subsystem for Linux 2) permite rodar um ambiente Linux completo dentro do Windows, sem dual boot. Ideal para manter jogos e programas no Windows enquanto desenvolve num terminal Linux de verdade.

## Pré-requisitos

- Windows 10 Pro (22H2) ou superior
- PowerShell com permissão de administrador

## 1. Instalando o WSL2

Abra o PowerShell como administrador e rode:

```powershell
wsl --install
```

Reinicie o PC após a instalação.

## 2. Instalando o Arch Linux

Após reiniciar, verifique as distros disponíveis:

```powershell
wsl --list --online
```

Instale o Arch Linux:

```powershell
wsl --install -d archlinux
```

## 3. Configuração inicial do Arch

Ao abrir o Arch pela primeira vez como root, atualize o sistema:

```bash
pacman -Syu
```

## 4. Criando seu usuário

```bash
useradd -m -G wheel -s /bin/bash andre
passwd andre
```

## 5. Configurando o sudo

Instale o sudo e habilite o grupo wheel:

```bash
pacman -S sudo
EDITOR=nano visudo
```

No editor, encontre e descomente a linha:

```
# %wheel ALL=(ALL:ALL) ALL
```

Deixando assim:

```
%wheel ALL=(ALL:ALL) ALL
```

Salve com `Ctrl+O` → `Enter` → `Ctrl+X`.

## 6. Definindo usuário padrão

Crie o arquivo de configuração do WSL:

```bash
echo -e "[user]\ndefault=andre" > /etc/wsl.conf
```

Reinicie o Arch no PowerShell:

```powershell
wsl --terminate archlinux
wsl -d archlinux
```

Agora você deve entrar direto como `andre`.

## 7. Instalando ferramentas essenciais

```bash
sudo pacman -S git base-devel curl wget nano vim openssh
```

## 8. Instalando Node.js via NVM

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts
```

Verifique as instalações:

```bash
node -v && npm -v && git --version
```

## 9. Configurando o Git

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

## 10. Autenticação SSH no GitHub

Gere sua chave SSH:

```bash
ssh-keygen -t ed25519 -C "seu@email.com"
```

Copie a chave pública:

```bash
cat ~/.ssh/id_ed25519.pub
```

Adicione no GitHub em **Settings → SSH and GPG keys → New SSH key**.

Teste a conexão:

```bash
ssh -T git@github.com
```

Deve retornar: `Hi seuusuario! You've successfully authenticated.`

## Resultado final

Ao final deste setup você terá:

- ✅ Arch Linux rodando no WSL2
- ✅ Usuário configurado com sudo
- ✅ Node.js LTS + npm
- ✅ Git configurado
- ✅ SSH autenticado no GitHub

Agora é só clonar seus repositórios e começar a desenvolver!

```bash
git clone git@github.com:oandrefl/seu-repositorio.git
```