import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { socket } from "../../socket";
import { createUser } from "../../state/actions/user";
import './Room.scss'
import { Users } from "./Components/Users";
import { Messages } from "./Components/Messages";
import { MessageInput } from "./Components/MessageInput";
import { AllRooms } from "./Components/AllRooms";
import { ExitChat } from "./Components/ExitChat";
import { Hamburger } from "./Components/Hamburger";

// Main component of a Chat room. It renders automatically when uder joins
// chat or changing the room

export const Room = () => {

    const dispatch = useDispatch();
    const userName = useSelector(
        state => state.userState.userName
    )
    const [error, setError] = useState('');
    const [activeHamb, setActiveHamb] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        window.scrollTo(0, 0)
        await socket.emit('login', userName, (data) => {
            if (data.error !== '') {
                setError(data.error);
                setIsLoading(false)
            } else {
                dispatch(createUser(data.user))
                setIsLoading(false)
            }
        })
        return () => { setError('') }
    }, [])

    const onHamburgerClick = () => {
        activeHamb ? setActiveHamb(false) : setActiveHamb(true)
    }

    const onRoomClick = () => {
        setActiveHamb(false)
    }

    return (
        <React.Fragment>
            {
                isLoading ? <div className="loading flex">
                    <section class="section section-4">
                        <span class="loader loader-bars"><span></span></span>
		                            Loading...
	                </section>
                </div> :
                    <React.Fragment>
                        {
                            error !== '' ?
                                <div className="error-window">
                                    <p>{error}</p>
                                    <Link to="/foraClient">Go Back</Link>
                                </div>
                                :
                                <div className="room flex">
                                    <div className="sidebar flex">
                                        <ExitChat />
                                        <div className="container desktop-only flex">
                                            <AllRooms onRoomClick={onRoomClick} />
                                            <Users />
                                        </div>
                                        <div className={`${activeHamb ? "active" : ""} container mobile-only flex`}>
                                            <AllRooms onRoomClick={onRoomClick} />
                                            <Users />
                                        </div>
                                        <Hamburger isActive={activeHamb} setActive={onHamburgerClick} />
                                    </div>
                                    <div className="messages flex">
                                        <Messages />
                                        <MessageInput />
                                    </div>
                                </div>
                        }
                    </React.Fragment>
            }
        </React.Fragment>
    )
}