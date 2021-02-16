import { io } from 'socket.io-client';

const PORT = "https://chatserverandrll.herokuapp.com/";

export const socket = io(PORT, {
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": "abcd"
    }
});