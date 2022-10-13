const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;
let childWindow;

function createWindow() {
  //Main window properties
  mainWindow = new BrowserWindow({
    minWidth: 1200,
    minHeight: 500,
    width: 1200,
    height: 700,
    show: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  //Child window properties
  childWindow = new BrowserWindow({
    width: 500,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // If it's MacOS, don't show the default menu, for this we add the APP name.
  // if (process.platform == "darwin") {
  //   const mainMenu = Menu.buildFromTemplate(template);
  //   Menu.setApplicationMenu(mainMenu);
  //   mainMenuTemplate.unshift({ label: "Electron" });
  // } else {
  //   const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  //   Menu.setApplicationMenu(mainMenu);
  // }

  //Show main window
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  ),
    //Child Window
    childWindow.loadURL(
      isDev
        ? "http://localhost:3000/info_pokemon"
        : `file://${path.join(__dirname, "../build/index.html#info_pokemon")}`
    );

  //Open developer tools
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  //Close main window
  mainWindow.on("closed", () => (mainWindow = null));

  //Close child window
  childWindow.on("close", (e) => {
    e.preventDefault();
    childWindow.hide();
  });
}

//Open window when electron is ready
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  app.quit();
});
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on("openChildWindow", (e, arg) => {
  e.preventDefault();
  childWindow.webContents.send("send-info", arg);
  childWindow.show();
});

const mainMenuTemplate = [];
const template = [
  {
    label: "Electron",
    submenu: [
      {
        role: "copy",
      },
      {
        role: "paste",
      },
    ],
  },
];
