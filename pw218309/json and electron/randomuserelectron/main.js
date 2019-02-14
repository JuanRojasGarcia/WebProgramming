//cargar a aplicacion de lectron
const app = require('electron').app; //activa para poder cargar electron

//crear ventanas del sistema operativo 
const BrowserWindow = require('electron').BrowserWindow;

//ruta del sistema de archivos del S.O.
const path=require('path');
const url = require('url');

//constantes para imprimir en PDF
const electron = require('electron');
//sisstemas de archivos 
const fs = require('fs')
//sistema operativo 
const os = require('os')
// para declarar una funcion remota
//ipc = llamada a procedimiento interno
const ipc = electron.ipcMain;
// acceso a la temrinal o linea de comandos
const shell = electron.shell;


//otra forma de declarar una constante
//pantalla principal
let PantallaPrincipal;
function muestraPantallaPrincipal(){
    //Creamos una pantalla vacia
    PantallaPrincipal = new BrowserWindow({
        width:1024, height:420
    });
    //cargamos en la pantalla pricial el contenido de nuestra pagina
    PantallaPrincipal.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    //mostramos la pantalla
    PantallaPrincipal.show();
}

// Evento para PDF (declaracion)
ipc.on('print-to-pdf', function(event){
    const pdfPath = path.join(os.tmpdir(),'print.pdf')
    const win = BrowserWindow.fromWebContents(event.sender)
    win.webContents.printToPDF({},function(error,data){
        if(error) throw error 
        fs.writeFile(pdfPath,data,function(error){
            if(error){
                throw error 
            }
            shell.openExternal('file://'+pdfPath)
        })
    })
})

app.on('ready', muestraPantallaPrincipal);
