<h1 align="center" style="font-weight: bold;">
  <img src="https://user-images.githubusercontent.com/62356988/140073035-3fc8bcc4-109f-48b2-bc7d-4b559d8c6302.png" alt="DoWhile NLW Heat logo" width="200" height="auto" /><br />
</h1>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/MarlonVictor/nlwHeart?style=for-the-badge&logo=git&logoColor=white&labelColor=09090A&color=FF7A29" alt="last commit" />
  <img src="https://img.shields.io/github/stars/MarlonVictor/nlwHeart?style=for-the-badge&logo=github&logoColor=white&labelColor=09090A&color=FF7A29" alt="stars" />
  <img src="https://img.shields.io/github/license/MarlonVictor/nlwHeart?style=for-the-badge&logo=opensourceinitiative&logoColor=white&labelColor=09090A&color=FF7A29" alt="license" />
</p>

<p align="center">
 <a href="#layout">Layout</a> •
 <a href="#features">Features</a> •
 <a href="#technologies">Technologies</a> •
 <a href="#colors">Colors</a> •
 <a href="#started">Getting Started</a> •
 <a href="#usage">Usage</a> •
 <a href="#routes">Routes</a> •
 <a href="#roadmap">Roadmap</a> •
 <a href="#colab">Collaborators</a> •
 <a href="#license">License</a>
</p>

<p align="center">
    <b>nlwHeart is a real-time hype wall for the DoWhile 2021 event — built during NLW Heat by Rocketseat.</b>
</p>

<p align="center">
    The project includes a web app, a mobile app, and a real-time API. Users sign in with GitHub, browse messages from other participants, and share their own expectations for the event.
</p>

<p align="center">
     <a href="https://dowhile-demo.netlify.app/">📱 Visit this Project</a>
</p>

<h2 id="layout">🎨 Layout</h2>

<p align="center">
    <img src="https://user-images.githubusercontent.com/62356988/140078445-6a593413-66ab-4933-9471-4eb3ecebd007.png" alt="Home page screenshot" width="900px">
</p>

<h2 id="features">✨ Features</h2>

- Sign in with GitHub OAuth
- View messages from all participants in real time
- Send hype messages for the DoWhile event
- Responsive web layout with updated design
- Toast notifications for system feedback
- Layout animations powered by Framer Motion
- Cross-platform mobile experience with Expo

<h2 id="technologies">💻 Technologies</h2>

**Client (Web)**

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Socket.IO Client](https://socket.io/)

**Client (Mobile)**

- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Socket.IO Client](https://socket.io/)

**Server**

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)
- [Prisma](https://www.prisma.io/)

**Database**

- [SQLite](https://www.sqlite.org/)

<h2 id="colors">🎨 Color Palette</h2>

| Color | Preview | Hex |
| ----- | ------- | --- |
| Background | ![#121214](https://singlecolorimage.com/get/121214/64x24) | `#121214` |
| Surface | ![#202024](https://singlecolorimage.com/get/202024/64x24) | `#202024` |
| Text | ![#E1E1E6](https://singlecolorimage.com/get/E1E1E6/64x24) | `#E1E1E6` |
| Brand Orange | ![#FF7A29](https://singlecolorimage.com/get/FF7A29/64x24) | `#FF7A29` |
| Accent Pink | ![#FF008E](https://singlecolorimage.com/get/FF008E/64x24) | `#FF008E` |
| Accent Yellow | ![#FFCD1E](https://singlecolorimage.com/get/FFCD1E/64x24) | `#FFCD1E` |
| Success Green | ![#1B873F](https://singlecolorimage.com/get/1B873F/64x24) | `#1B873F` |

<h2 id="started">🚀 Getting started</h2>

<h3>Cloning</h3>

```bash
git clone https://github.com/MarlonVictor/nlwHeart.git
cd nlwHeart
```

<h3>Environment Variables</h3>

Copy the example files and fill in your GitHub OAuth credentials:

```bash
cp server/.env.example server/.env
cp mobile/.env.example mobile/.env
```

| Variable | Location | Description |
| -------- | -------- | ----------- |
| `GITHUB_CLIENT_ID` | `server/.env` | GitHub OAuth app client ID |
| `GITHUB_CLIENT_SECRET` | `server/.env` | GitHub OAuth app client secret |
| `JWT_SECRET` | `server/.env` | Secret for signing JWT tokens |
| `GITHUB_CLIENT_ID` | `mobile/.env` | GitHub OAuth app client ID (mobile) |

<h3>Installation</h3>

Install dependencies for each workspace:

```bash
cd server && yarn install && cd ..
cd web && yarn install && cd ..
cd mobile && yarn install && cd ..
```

Set up the database (from the `server` directory):

```bash
npx prisma migrate dev
```

<h3>Starting</h3>

The API must be running before starting the web or mobile clients.

**API (server)**

```bash
cd server
yarn dev
```

API available at [http://localhost:3333](http://localhost:3333)

**Web**

```bash
cd web
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Mobile**

```bash
cd mobile
yarn start
```

Scan the QR code with the [Expo Go](https://expo.dev/client) app or run on an emulator.

<h3>Deployment</h3>

The web client (demo) is deployed at [https://dowhile-demo.netlify.app/](https://dowhile-demo.netlify.app/).

To build the web app for production:

```bash
cd web
yarn build
yarn serve
```

The output is generated in the `web/dist/` folder and can be served by any static hosting provider.

<h2 id="usage">👀 Usage</h2>

1. Start the API server on port `3333`.
2. Open the web or mobile client and sign in with your GitHub account.
3. Browse the live message wall — new messages appear in real time via Socket.IO.
4. Submit your own hype message for the DoWhile event.

The web client connects to the API at `http://localhost:3333` by default (`web/src/services/api.ts`).

<div id="routes"></div>

## 📍 Application Routes

**Web (single page)**

| route | description |
| ----- | ----------- |
| <kbd>/</kbd> | Hype wall with GitHub sign-in, live messages, and event info |

**Mobile**

| screen | description |
| ------ | ----------- |
| <kbd>Home</kbd> | Message feed, sign-in, and send message form |

## 📍 API Routes

| route | description |
| ----- | ----------- |
| <kbd>GET /github</kbd> | Redirect to GitHub OAuth |
| <kbd>GET /signin/callback</kbd> | OAuth callback |
| <kbd>POST /authenticate</kbd> | Authenticate user with GitHub code |
| <kbd>POST /messages</kbd> | Create a hype message (authenticated) |
| <kbd>GET /messages/latest</kbd> | Get the latest messages |
| <kbd>GET /profile</kbd> | Get authenticated user profile |

## 📍 Database Structure

| model | description |
| ----- | ----------- |
| <kbd>users</kbd> | User profile (`name`, `github_id`, `avatar_url`, `login`) |
| <kbd>messages</kbd> | Hype message (`text`, `user_id`, `create_at`) |

<h2 id="roadmap">🧭 Roadmap</h2>

* [x] GitHub OAuth authentication
* [x] Real-time message feed with Socket.IO
* [x] Web and mobile clients
* [x] Responsive redesign with animations

<h2 id="colab">🤝 Collaborators</h2>

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/MarlonVictor">
        <img src="https://avatars.githubusercontent.com/u/62356988?v=4" width="100px;" alt="Marlon Victor Profile Picture"/><br>
        <sub>
          <b>Marlon Victor</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h2 id="contribute">🤝 Contribute</h2>

Contributions are always welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

<h2 id="license">License 📃</h2>

This project is under [MIT](./LICENSE) license.
