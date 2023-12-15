# nlw-omnistack-ecoleta

[Knex](https://knexjs.org/)
[Leaflet](https://react-leaflet.js.org/)
[Leafletjs](https://leafletjs.com/)
[IBGE API](https://servicodados.ibge.gov.br/api/docs/localidades)

## Descrição

Seu marketplace de coleta de resíduos. Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.

## Imagem

![Imagem do Projeto]('./../web/src/assets/home-ecoleta.png)

---

## Como Rodar

### Mobile

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o aplicativo:

   ```bash
   npm start
   ```

   - Para executar no Android:

   ```bash
   npm run android
   ```

   - Para executar no iOS:

   ```bash
   npm run ios
   ```

   - Para executar no navegador:

   ```bash
   npm run web
   ```

### Front-end

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie a aplicação:

   ```bash
   npm run dev
   ```

### Back-end

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor:

   ```bash
   npm run dev
   ```

   - Rode as migrações do banco de dados:

   ```bash
   npm run knex:migrate
   ```

   - Execute as seeds para adicionar dados iniciais (se houver):

   ```bash
   npm run knex:seed
   ```

---

## Mobile

### Dependências Principais

- **@expo-google-fonts/roboto**: Versão 0.2.3
- **@expo-google-fonts/ubuntu**: Versão 0.2.3
- **@react-navigation/native**: Versão 6.1.9
- **@react-navigation/native-stack**: Versão 6.9.17
- **axios**: Versão 1.6.2
- **expo**: Versão 49.0.15
- **expo-constants**: Versão 14.4.2
- **expo-font**: Versão 11.4.0
- **expo-status-bar**: Versão 1.6.0
- **react**: Versão 18.2.0
- **react-native**: Versão 0.72.6
- **react-native-gesture-handler**: Versão 2.12.0
- **react-native-maps**: Versão 1.7.1
- **react-native-safe-area-context**: Versão 4.6.3
- **react-native-screens**: Versão 3.22.0
- **react-native-svg**: Versão 13.9.0
- **expo-location**: Versão 16.1.0
- **expo-mail-composer**: Versão 12.3.0

### Dependências de Desenvolvimento

- **@babel/core**: Versão 7.20.0
- **@types/react**: Versão 18.2.14
- **typescript**: Versão 5.1.3

---

## Front-end

### Dependências Principais

- **axios**: Versão 1.6.2
- **leaflet**: Versão 1.9.4
- **react**: Versão 18.2.0
- **react-dom**: Versão 18.2.0
- **react-dropzone**: Versão 14.2.3
- **react-icons**: Versão 4.12.0
- **react-leaflet**: Versão 4.2.1
- **react-router-dom**: Versão 6.20.1

### Dependências de Desenvolvimento

- **@types/leaflet**: Versão 1.9.8
- **@types/react**: Versão 18.2.37
- **@types/react-dom**: Versão 18.2.15
- **@typescript-eslint/eslint-plugin**: Versão 6.10.0
- **@typescript-eslint/parser**: Versão 6.10.0
- **@vitejs/plugin-react-swc**: Versão 3.5.0
- **eslint**: Versão 8.53.0
- **eslint-plugin-react-hooks**: Versão 4.6.0
- **eslint-plugin-react-refresh**: Versão 0.4.4
- **typescript**: Versão 5.2.2
- **vite**: Versão 5.0.0

---

## Back-end

### Dependências Principais

- **celebrate**: Versão 15.0.3
- **cors**: Versão 2.8.5
- **express**: Versão 4.18.2
- **knex**: Versão 3.0.1
- **multer**: Versão 1.4.5-lts.1
- **sqlite3**: Versão 5.1.6

### Dependências de Desenvolvimento

- **@types/cors**: Versão 2.8.17
- **@types/express**: Versão 4.17.21
- **@types/multer**: Versão 1.4.11
- **ts-node**: Versão 10.9.1
- **ts-node-dev**: Versão 2.0.0
- **typescript**: Versão 5.3.2
