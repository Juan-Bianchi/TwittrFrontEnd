import { useEffect, useState } from "react";
import { Message } from "../service";
import cookie from "../service/Cookie";
import { io } from "socket.io-client";

const cookieName: string  = process.env.REACT_APP_COOKIE_NAME as string
const token = cookie.get(cookieName) as string
console.log(token)
const socket = io('http://localhost:8080', {
    auth: {
        token: token,
    },
    autoConnect: false
})

interface useSocketProps {
  from: string;
  to: string;
}

export const useSocket = ({from, to}: useSocketProps)=> {
  const [messages, setMessages] = useState<Message[]>([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    socket.connect();
    
    socket.on('connect', () => {
        console.log(socket.connected);
    });
    
    socket.on('connect_error', (error) => {
      socket.on('connect_error', (error) => {
        console.error('Error de conexión:', error);
        
        setTimeout(() => {
          console.log('reconnecting...')
          socket.connect();
        }, 1000); 
      });
    });

    socket.emit('load chat', {from: from, to: to});

    socket.on('allMessages', (messages) => {
        console.log('loading messages')
        setMessages(messages)
    })

    socket.on('message', (message: Message) => {
        // Update the chat with the received message
        if(!message) {
            setMessages((messages) => [...messages, {
                body: 'You are not allowed to chat with this user because you do not follow each other',
                from: from,
                to: to,
            }])
        }
        else if (message.to !== to && message.from !== to) return
        if (message && !messages.includes(message)) {
          console.log('loading new message to feed')
          setMessages((messages) => [...messages, message])
        }
    })

    socket.on('error', (error) => {
        console.log(error)
        setErrors(error)
    })

    return () => {
        socket.off('message');
        socket.off('error');
        socket.off('allMessages');
        socket.off('connect')
        socket.off('connect_error')
        socket.disconnect()
    };
  }, []);

  const sendMessage = (message: string) => {
    console.log(message)
    if(socket){
        console.log("sending message to the server")
        socket?.emit('chat message', {from, to, body: message})
    }
}

  return {
    messages,
    errors,
    setErrors,
    sendMessage,
    setMessages,
  }
}