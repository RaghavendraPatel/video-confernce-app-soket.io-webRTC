import hero from '../Assets/hero.svg';
import './Home.scss';
import { useSelector, useDispatch } from 'react-redux'; 
import { showForm } from '../reducers/formSlice';
import { useState } from 'react';

import StartMeeting from '../components/Home/StartMeeting';
const Home = () => {
    const state = useSelector(state => state.form);
    const dispatch = useDispatch();
    const [showMeetingLink, setShowMeetingLink] = useState(false);
    const handleStart = () => {
        setShowMeetingLink((prev) => !prev);
    }
    return (
        <div className="Home">
            {state.formVisible && <div className="auth-container"></div>}
            {showMeetingLink && <div className="meeting-link"><StartMeeting setShowMeetingLink={setShowMeetingLink}/></div>}
            <div className="home__head">
                <div className="home__head__left">
                    <h1>Zoom 2.0</h1>
                </div>
                <div className="home__head__right">
                    <button
                        onClick={() => dispatch(showForm())}
                    >Sign In</button>
                </div>
            </div>
            <div className="home__container">
                <div className="home__container__left">
                    <div className="container__head">
                        <h1>The ZOOM Underrated</h1>
                        <span>Collabration taken to the next level!</span>
                    </div>
                    <div className="container__body">
                        <div className="start">
                            <button className='start-btn' onClick={handleStart}>Start a meeting</button>
                        </div>
                        <div className="join">
                            <input type="text" name="" id="join" placeholder='Meeting Code'/>
                            <button className='join-btn'>Join</button>
                        </div>
                    </div>
                </div>
                <div className="home__container__right">
                    <img src={hero} alt="hero" />
                </div>
            </div>
        </div>
    )
}
export default Home