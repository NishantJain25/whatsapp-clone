import express from "express" 
import cors from "cors"
import dotenv from "dotenv"
import AuthRoutes from "./routes/AuthRoutes.js"
import MessageRoutes from "./routes/MessageRoutes.js"
import { Server } from "socket.io"


dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.use("/uploads/recordings", express.static("uploads/recordings"))
app.use("/uploads/images", express.static("uploads/images"))
app.use("/api/auth", AuthRoutes)
app.use("/api/messages", MessageRoutes)

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})

const io = new Server(server,{
    cors: {
        origin: "http://localhost:3000"
    }
})
global.onlineUsers = new Map()

io.on("connection",(socket) => {
    global.chatSocket = socket

    // when this socket user calls the add-user event from frontend we set socket id and user id in onlineUsers
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id)
    })

    socket.on("send-msg", (data) => {
        console.log("message received on the socket")
        const sendUserSocket = onlineUsers.get(data.to)
        if(sendUserSocket){
            console.log("inside if")
            socket.to(sendUserSocket).emit("msg-receive",{
                from: data.from,
                message: data.message
            })
        }
    })
})