
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress] = useState(15)
  const api_key = process.env.REACT_APP_NOT_SECRET_CODE;
  const set_progress = (progress) => {
    setProgress(progress)
  }

  return <div>
    <Navbar />
    <LoadingBar
      color='#f11946'
      progress={progress}
    />
    <Routes>
      <Route exact path="/general" element={<News api_key={api_key} set_progress={set_progress} key="general" pageSize={5} category={'general'} />} />
      <Route exact path="/business" element={<News api_key={api_key} set_progress={set_progress} key="business" pageSize={5} category={'business'} />} />
      <Route exact path="/entertainment" element={<News api_key={api_key} set_progress={set_progress} key="entertainment" pageSize={5} category={'entertainment'} />} />
      <Route exact path="/health" element={<News api_key={api_key} set_progress={set_progress} key="health" pageSize={5} category={'health'} />} />
      <Route exact path="/science" element={<News api_key={api_key} set_progress={set_progress} key="science" pageSize={5} category={'science'} />} />
      <Route exact path="/sports" element={<News api_key={api_key} set_progress={set_progress} key="sports" pageSize={5} category={'sports'} />} />
      <Route exact path="/technology" element={<News api_key={api_key} set_progress={set_progress} key="technology" pageSize={5} category={'technology'} />} />
    </Routes>
  </div>;

}

export default App;