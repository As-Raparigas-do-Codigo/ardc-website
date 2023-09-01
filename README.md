
- [As Raparigas do Código](#as-raparigas-do-código)
  - [Available Scripts](#available-scripts)
- [Deployment process](#deployment-process)
- [Production errors](#production-errors)
  - [Routing Not Working in Production](#routing-not-working-in-production)

# As Raparigas do Código

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

| Script | Description |
| ------| ----| 
| `npm start`| Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.|
| `npm run build` |  Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.|
| `npm run buil:deploy-ftp`| [Check the Deployment section](#deployment-process) | 


# Deployment process
[//]: https://github.com/As-Raparigas-do-Codigo/ardc-website-deployment

To deploy this project you need to setup the `.env` file with the following variables (ask someone inside the team to get these for you):
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
Which will
- checkout to `dev` branch
- update it (`git pull`)
- create a new build inside `./build`
- transfer the files via FTP to the ARDC server from the `./build` folder

# Production errors


## Routing Not Working in Production
The project must have a `.htaccess` file inside the server in order to get the React Routing working in production. This should be the content:
```bash
<IfModule mod_rewrite.c>

  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]

</IfModule>
```
