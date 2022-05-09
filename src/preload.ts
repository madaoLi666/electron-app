//@ts-ignore
import { contextBridge, ipcRenderer } from 'electron'

console.error("preload script executed");

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title: string) => ipcRenderer.send('set-title', title),
  openFile: () => ipcRenderer.invoke('dialog:OpenFile'),
  handleStarted: (callback: IpcRendererCallback) => ipcRenderer.on('started', callback)
})