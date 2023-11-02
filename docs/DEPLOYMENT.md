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

## Production errors

### Routing Not Working in Production

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
