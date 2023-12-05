import {v4 as uuidv4} from 'uuid';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { MdContentCopy } from 'react-icons/md';
import { toast } from 'react-toastify';
import './style.scss';

const StartMeeting = (props) => {
    const setShowMeetingLink = props.setShowMeetingLink;
    const meeting = uuidv4();
    const navigate = useNavigate();
    const handleJoin = () => {
        navigate(`/meeting/${meeting}`);
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(meeting);
        toast.success('Meeting ID copied to clipboard');
    }
    useEffect(() => {
        document.title = "Start a Meeting";
    }, []);
    return (
        <div className="StartMeeting container">
            <h1>Start a Meeting</h1>
            <div className="cancel">
                <button onClick={() => {
                    setShowMeetingLink(false);
                }}>X</button>
            </div>
            <span>Share this meeting ID with others to join your meeting</span>
            <div className="meeting-id">
                <input type="text" value={meeting} disabled/>
                <button
                    onClick={handleCopy}
                    aria-label='Copy Meeting ID'
                    title='Copy Meeting ID'
                ><MdContentCopy /></button>
            </div>
            <button onClick={handleJoin} className='start'>Start Meeting</button>
        </div>
    )
}
export default StartMeeting 