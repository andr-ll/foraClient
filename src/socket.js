import { io } from 'socket.io-client';

const PORT = "https://git.heroku.com/chatserverandrll.git"; //"http://localhost:3001";

export const socket = io(PORT, {
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": "abcd"
    }
});