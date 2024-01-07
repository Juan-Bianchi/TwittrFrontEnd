import { io } from "socket.io-client";
import cookie from "./Cookie";

const initSocketConnection = ()=> {

    const cookieName: string  = process.env.REACT_APP_COOKIE_NAME as string
    const token = cookie.get(cookieName)?.split(' ')[1] as string
    console.log(token)
    const socket = io('http://localhost:8080', {
        auth: {
            token: token,
        },
        autoConnect: false
    })

    return socket;
}


export default initSocketConnection;