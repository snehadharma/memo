   // main.js
   const { app, BrowserWindow } = require('electron');

   function createWindow() {
     const win = new BrowserWindow({
       width: 800,
       height: 600,
       webPreferences: {
         nodeIntegration: true, // Enable Node.js integration in renderer process
       },
     });

     win.loadFile('index.html');
   }

   app.whenReady().then(createWindow);