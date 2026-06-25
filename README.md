<div align="center">

  <img src="https://user-images.githubusercontent.com/62356988/140073035-3fc8bcc4-109f-48b2-bc7d-4b559d8c6302.png" alt="DoWhile NLW Heat logo" width="200" height="auto" />
  
  <p>
    A real-time hype wall for the DoWhile 2021 event — built during NLW Heat by Rocketseat.
  </p>
  
  
<!-- Badges -->
<p>
  <img src="https://img.shields.io/github/last-commit/MarlonVictor/nlwHeart?style=for-the-badge&logo=git&logoColor=white&labelColor=09090A&color=FF7A29" alt="last commit" />
  <img src="https://img.shields.io/github/stars/MarlonVictor/nlwHeart?style=for-the-badge&logo=github&logoColor=white&labelColor=09090A&color=FF7A29" alt="stars" />
  <img src="https://img.shields.io/github/license/MarlonVictor/nlwHeart?style=for-the-badge&logo=opensourceinitiative&logoColor=white&labelColor=09090A&color=FF7A29" alt="license" />
</p>
</div>

<br />

<!-- About the Project -->
## :star2: About the Project

DoWhile 2021 is a platform built during NLW Heat by [Rocketseat](https://github.com/rocketseat-education) in October 2021. It collects hype messages from attendees for the DoWhile event, which took place on December 1–2, 2021.

The project includes a web app, a mobile app, and a real-time API. Users sign in with GitHub, browse messages from other participants, and share their own expectations for the event.


<!-- Screenshots -->
### :camera: Screenshots

<div align="center"> 
  <img src="https://user-images.githubusercontent.com/62356988/140078445-6a593413-66ab-4933-9471-4eb3ecebd007.png" alt="Home page screenshot" width="900" />
</div>

**GitHub login**

<div align="center"> 
  <img src="https://user-images.githubusercontent.com/62356988/140086382-50bb968c-07cd-4b86-8cdc-3a446904e77b.gif" alt="GitHub login flow" width="900" />
</div>

**Sending a message**

<div align="center"> 
  <img src="https://user-images.githubusercontent.com/62356988/140089370-c3fcefa2-ea29-4ae6-a915-ed6ee454ed23.gif" alt="Sending a message" width="900" />
</div>


<!-- TechStack -->
### :space_invader: Tech Stack

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

<!-- Features -->
### :dart: Features

- Sign in with GitHub OAuth
- View messages from all participants in real time
- Send hype messages for the DoWhile event
- Responsive web layout with updated design
- Toast notifications for system feedback
- Layout animations powered by Framer Motion
- Cross-platform mobile experience with Expo

<!-- Color Reference -->
### :art: Color Reference

| Color | Preview | Hex |
| ----- | ------- | --- |
| Background | ![#121214](https://singlecolorimage.com/get/121214/64x24) | `#121214` |
| Surface | ![#202024](https://singlecolorimage.com/get/202024/64x24) | `#202024` |
| Text | ![#E1E1E6](https://singlecolorimage.com/get/E1E1E6/64x24) | `#E1E1E6` |
| Brand Orange | ![#FF7A29](https://singlecolorimage.com/get/FF7A29/64x24) | `#FF7A29` |
| Accent Pink | ![#FF008E](https://singlecolorimage.com/get/FF008E/64x24) | `#FF008E` |
| Accent Yellow | ![#FFCD1E](https://singlecolorimage.com/get/FFCD1E/64x24) | `#FFCD1E` |
| Success Green | ![#1B873F](https://singlecolorimage.com/get/1B873F/64x24) | `#1B873F` |


<!-- Env Variables -->
### :key: Environment Variables

**Server** (`server/.env`)

`GITHUB_CLIENT_ID`

`GITHUB_CLIENT_SECRET`

`JWT_SECRET`

**Mobile** (`mobile/.env`)

`GITHUB_CLIENT_ID`

Copy the example files before running the apps:

```bash
cp server/.env.example server/.env
cp mobile/.env.example mobile/.env
```

<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Prerequisites -->
### :bangbang: Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [Yarn](https://yarnpkg.com/) package manager
- [Expo Go](https://expo.dev/client) (for the mobile app on a physical device)

```bash
npm install --global yarn
```

<!-- Installation -->
### :gear: Installation

Clone the repository and install dependencies for each workspace:

```bash
git clone https://github.com/MarlonVictor/nlwHeart.git
cd nlwHeart

cd server && yarn install && cd ..
cd web && yarn install && cd ..
cd mobile && yarn install && cd ..
```

Set up the database (from the `server` directory):

```bash
npx prisma migrate dev
```

<!-- Run Locally -->
### :running: Run Locally

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


<!-- Deployment -->
### :triangular_flag_on_post: Deployment

The web client (demo) is deployed at [https://dowhile-demo.netlify.app/](https://dowhile-demo.netlify.app/).

To build the web app for production:

```bash
cd web
yarn build
yarn serve
```


<!-- Usage -->
## :eyes: Usage

1. Start the API server on port `3333`.
2. Open the web or mobile client and sign in with your GitHub account.
3. Browse the live message wall — new messages appear in real time via Socket.IO.
4. Submit your own hype message for the DoWhile event.

The web client connects to the API at `http://localhost:3333` by default (`web/src/services/api.ts`).


<!-- Roadmap -->
## :compass: Roadmap

* [x] GitHub OAuth authentication
* [x] Real-time message feed with Socket.IO
* [x] Web and mobile clients
* [x] Responsive redesign with animations


<!-- Contributing -->
## :wave: Contributing

<a href="https://github.com/MarlonVictor/nlwHeart/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=MarlonVictor/nlwHeart" />
</a>

Contributions are always welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


<!-- Code of Conduct -->
### :scroll: Code of Conduct

Please be respectful and constructive when contributing or opening issues.


<!-- FAQ -->
## :grey_question: FAQ

- **Do I need a GitHub OAuth app to run locally?**

  + Yes. Create a GitHub OAuth application and set `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` in `server/.env`. Use the mobile `GITHUB_CLIENT_ID` in `mobile/.env` as well.

- **Why are messages not updating in real time?**

  + Make sure the API server is running and that the web/mobile client can reach `http://localhost:3333`.


<!-- License -->
## :warning: License

Distributed under the MIT License. See [LICENSE](https://github.com/MarlonVictor/nlwHeart/blob/master/LICENSE) for more information.


<!-- Contact -->
## :handshake: Contact

Marlon Victor — [@MarlonVictor](mailto:umarlon.co@gmail.com)

Project Link: [https://github.com/MarlonVictor/nlwHeart](https://github.com/MarlonVictor/nlwHeart)


<!-- Acknowledgments -->
## :gem: Acknowledgements

- NLW Heat lessons by [Diego Fernandes](https://github.com/diego3g), [Daniele Leão](https://github.com/danileao), and [Rodrigo Gonçalves](https://github.com/rodrigorgtic)
- [Rocketseat](https://github.com/rocketseat-education)
