# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Processo de Deployment
[//]: https://github.com/As-Raparigas-do-Codigo/ardc-website-deployment

To deploy this project you need to setup the `.env` file with. Ask someone inside the team to get these to you:
```bash
PUBLIC_URL=https://raparigasdocodigo.pt
FTP_HOST=
FTP_USER=
FTP_PASSWORD=
```

After that you just need to run:
```bash
npm run build:deploy-ftp
```
Which will create a new build inside `./build` and transfer the files via FTP to the ARDC server


