import io from 'socket.io-client';
const socket = io('http://localhost:5000');
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Meeting from './Pages/Meeting.jsx';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meeting/:id" element={<Meeting socket={socket}/>} />
          {/* <Route path="/:streamID" element={<Stream socket={socket}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </Router>
    </div>
  )
}
export default App