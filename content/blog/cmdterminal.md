---

## title: "Guia de Sobrevivência: Terminal (Linux/Windows) e Git"
date: "2026-02-17"
excerpt: "Uma cábula essencial com os principais comandos de terminal e Git para aumentar a tua produtividade no dia a dia."
tags: ["Linux", "Windows", "Git", "Terminal", "Produtividade"]

# Guia de Sobrevivência: Terminal e Git

Dominar a linha de comandos é uma das competências mais valiosas para qualquer programador. Seja a gerir ficheiros no sistema operativo ou a controlar versões com o Git, o terminal permite-te realizar tarefas complexas com rapidez e precisão.

Neste guia, compilámos os comandos fundamentais que deves conhecer para Linux, Windows e Git.

## Comandos de Terminal: Linux vs Windows

Muitas vezes, as tarefas são as mesmas, mas a "palavra mágica" muda consoante o sistema operativo que estás a utilizar.

### Linux

1. **`ls`**: Lista o conteúdo do diretório atual.
2. **`cd`**: Muda para o diretório especificado.
3. **`pwd`**: Exibe o caminho completo do diretório atual.
4. **`cp`**: Copia ficheiros ou diretórios (`cp origem destino`).
5. **`mv`**: Move ou renomeia ficheiros ou diretórios.
6. **`rm`**: Remove ficheiros. Utiliza `rm -rf` para diretórios (com cautela!).
7. **`mkdir`**: Cria um novo diretório.
8. **`cat`**: Exibe o conteúdo de um ficheiro diretamente no terminal.
9. **`grep`**: Filtra e pesquisa padrões de texto dentro de ficheiros.
10. **`chmod`**: Altera as permissões de acesso a ficheiros ou pastas.

### Windows (CMD)

1. **`dir`**: Equivalente ao `ls`, exibe ficheiros e pastas.
2. **`cd`**: Funciona de forma semelhante ao Linux para navegar entre pastas.
3. **`copy`**: Copia ficheiros de um local para outro.
4. **`move`**: Move ou renomeia ficheiros.
5. **`del`**: Remove um ou mais ficheiros.
6. **`mkdir`**: Cria uma nova pasta.
7. **`rmdir`**: Remove um diretório (deve estar vazio).
8. **`type`**: Exibe o conteúdo de um ficheiro de texto (semelhante ao `cat`).
9. **`findstr`**: Procura cadeias de texto em ficheiros (semelhante ao `grep`).
10. **`cls`**: Limpa o ecrã do terminal.

## Principais Comandos Git

O Git é indispensável para o controlo de versões. Aqui estão os comandos que vais usar em quase todos os projetos.

### Configuração e Início

* **`git init`**: Inicializa um novo repositório local.
* **`git clone <url>`**: Faz o download de um repositório existente.
* **`git config --global user.name "O Teu Nome"`**: Configura a tua identidade.

### Fluxo de Trabalho Diário

* **`git status`**: Verifica o estado das tuas alterações.
* **`git add .`**: Prepara todas as alterações para o commit (Staging).
* **`git commit -m "mensagem"`**: Grava as alterações no histórico local.
* **`git push`**: Envia os teus commits para o servidor remoto (GitHub/GitLab).
* **`git pull`**: Traz as novidades do servidor para a tua máquina.

### Ramos e Histórico

* **`git branch`**: Lista ou cria ramos (branches).
* **`git checkout -b <nome>`**: Cria e muda para um novo ramo.
* **`git log`**: Visualiza o histórico de commits realizados.

## Conclusão

Estes comandos são a base de qualquer fluxo de trabalho moderno. Lembra-te que não precisas de decorar tudo de uma vez; a prática diária no terminal fará com que estes comandos se tornem memória muscular.

Para saber mais, podes sempre consultar a documentação oficial ou usar o sufixo `--help` após qualquer comando.

---

*Dica: Se usas Windows, considera instalar o **WSL2** ou o **Git Bash** para teres acesso aos comandos Linux num ambiente Windows!*