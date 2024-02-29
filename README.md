# Configuração e Execução do Projeto Localmente

Este guia fornece instruções passo a passo sobre como configurar e executar o projeto Next.js localmente em seu ambiente de desenvolvimento.

## Pré-requisitos

Antes de iniciar, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js (versão 18.x ou superior)
- gerenciador de pacotes pnpm 

## Configuração do Projeto

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/JotaPeans/desafio-atom.git
   ```

2. **Navegue até o Diretório do Projeto:**

   ```bash
   cd desafio-atom
   ```

3. **Instale as Dependências:**

   ```bash
   pnpm install
   ```

3. **Gere os arquivos do prisma**

   ```bash
   npx prisma generate
   ```

4. **Adicione a url de um banco de dados PostgreSQL no arquivo .env**

   - **O nome deve ser:** ```POSTGRES_URL```

4. **Faça o push do prisma para o banco de dados**

   ```bash
   npx prisma db push
   ```

5. **Popule o banco de dados (opcional)**

   ```bash
   pnpm run populate
   ```

## Executando o projeto

Após configurar o projeto, você pode iniciar o servidor de desenvolvimento do Next.js. Para fazer isso, execute o seguinte comando no terminal, dentro do diretório do projeto:

```bash
pnpm run dev
```