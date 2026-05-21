# Micro Front-End Store

Aplicação desenvolvida em React + Vite utilizando arquitetura de Micro Front-End com Module Federation.

O projeto possui:

- Shell (Host)
- Header Remote
- Footer Remote
- Cards Remote

A aplicação consome a API pública DummyJSON para listagem de produtos e gerenciamento do carrinho.

---

# Tecnologias utilizadas

- React JS
- Vite
- Module Federation
- Context API
- Axios
- Concurrently
- CSS
- React Lazy + Suspense

---

# Arquitetura

```txt
microfrontend-vr/

├── shell/
├── header/
├── footer/
├── cards/
```

---

# APIs utilizadas

## Produtos

https://dummyjson.com/products

## Carrinho

https://dummyjson.com/carts

---

# Pré-requisitos

Antes de iniciar o projeto é necessário instalar:

- Node.js 18+
- NPM 9+


# Clonar projeto

```bash
git clone https://github.com/camilars/microfrontend-vr.git
```

Entrar na pasta:

```bash
cd microfrontend-vr
```

---

# Instalação das dependências

## Shell

```bash
cd shell
npm install
```

---

## Header

```bash
cd ../header
npm install
```

---

## Footer

```bash
cd ../footer
npm install
```

---

## Cards

```bash
cd ../cards
npm install
```

---

# Executando o projeto

## IMPORTANTE

Os micro front-ends remotos precisam ser buildados antes da execução do shell.

---

# 1. Build dos remotes

## Header

```bash
cd header
npm run build
```

---

## Footer

```bash
cd ../footer
npm run build
```

---

## Cards

```bash
cd ../cards
npm run build
```

---

# 2. Executar remotes

## Header

```bash
npm run preview
```

Aplicação disponível em:

```txt
http://localhost:3001
```

---

## Footer

Novo terminal:

```bash
cd footer
npm run preview
```

Aplicação disponível em:

```txt
http://localhost:3002
```

---

## Cards

Novo terminal:

```bash
cd cards
npm run preview
```

Aplicação disponível em:

```txt
http://localhost:3003
```

---

# 3. Executar Shell

Novo terminal:

```bash
cd shell
npm run dev
```

Aplicação disponível em:

```txt
http://localhost:3000
```

---

# Script automatizado

Também é possível subir toda a aplicação utilizando:

```bash
npm start
```

---



# Autor

Camila Rose