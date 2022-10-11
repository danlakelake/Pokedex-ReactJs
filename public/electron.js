const electron = require("electron");
const app = electron.app;
const Menu = electron.Menu;
const BrowserWindow = electron.BrowserWindow;
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
    minWidth: 1200,
    minHeight: 500,
    width: 1200,
    height: 700,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  //If it's MacOS, don't show the default menu, for this we add the APP name.
  if (process.platform == "darwin") {
    const mainMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(mainMenu);
    mainMenuTemplate.unshift({ label: "Electron" });
  } else {
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
  }

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
  mainWindow.on("closed", () => (mainWindow = null));
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
