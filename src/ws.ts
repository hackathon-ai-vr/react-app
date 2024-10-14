import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_API_URL)

socket.on('open', () => {
  console.log('socket connected')
})

export default socket