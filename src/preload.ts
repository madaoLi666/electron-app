//@ts-ignore
import { contextBridge, ipcRenderer, remote, shell } from 'electron'

console.error("preload script executed");

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title: string) => ipcRenderer.send('set-title', title)
})