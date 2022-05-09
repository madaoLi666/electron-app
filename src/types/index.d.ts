declare interface Window {
  electronAPI: ElectronAPIType
}

interface IpcRendererCallback {
  (event: IpcRendererEvent, ...args: Array<any>):  void
}

interface ElectronAPIType {
  setTitle: (string) => Function,
  openFile: () => Function,
  handleStarted: (IpcRendererCallback) => Function
}

