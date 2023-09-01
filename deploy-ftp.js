const ftp = require('basic-ftp');
const { readdirSync, statSync } = require('fs');
const path = require('path');

// ESM: import * as ftp from "basic-ftp"
copyBuildDirToServerFTP();

async function copyBuildDirToServerFTP() {
  const client = new ftp.Client();
  let files = [];
  let totalFilesSent = 0;
  const countTotalFiles = recursivelyCountFiles('./build').length;
  client.trackProgress((info) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    if (info.bytes > 0 && !files.includes(info.name)) {
      files.push(info.name);
      console.log(info.name);
      totalFilesSent++;
    }
    process.stdout.write(
      `###### Total bytes: ${formatBytes(
        info.bytesOverall
      )} | Total Files: ${totalFilesSent}/${countTotalFiles}`
    );
  });

  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      secure: false
    });
    await client.uploadFromDir('./build/', 'public_html/');
    client.trackProgress();
  } catch (err) {
    console.log(err);
  }
  client.close();
}

/* *
 *
 * Auxiliar functions
 *
 * */
function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

function recursivelyCountFiles(dirPath, files) {
  const filesCurrentDir = readdirSync(dirPath);

  let allFiles = files || [];

  for (const fileName of filesCurrentDir) {
    const filePath = path.join(dirPath, fileName);

    if (statSync(filePath).isDirectory()) {
      allFiles = recursivelyCountFiles(filePath, allFiles);
    } else {
      allFiles.push(fileName);
    }
  }

  return allFiles;
}
