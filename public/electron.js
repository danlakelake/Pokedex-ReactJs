const electron = require("electron");
const app = electron.app;
const Menu = electron.Menu;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    minWidth: 1450,
    minHeight: 900,
    width: 1450,
    height: 900,
    show: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  //Si es MacOS, quitamos el menu por defecto que nos asocia, para eso agregamos solo el nonbre del APP.
  if (process.platform == "darwin") {
    const mainMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(mainMenu);
    mainMenuTemplate.unshift({ label: "Administración Giza DAT" });
  } else {
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
  }
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on("closed", () => (mainWindow = null));
}
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
    label: "AdministracionGiza",
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
