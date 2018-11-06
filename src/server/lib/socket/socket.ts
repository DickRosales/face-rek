// import path from 'path'

class Socket {
  public socket: any
  constructor(socketIo) {
    socketIo.on('connect', (io: any) => {
      console.log('Client connected')
      
      this.socket = io

      this.socket.on('disconnect', () => {
        console.log('Client disconnected')
      })
    })
  }

  public emitImage = (data)  => {
    console.log('newPicture', data)
    this.socket.emit('newPicture', data)
  }
}

export default Socket