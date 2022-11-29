import React from 'react';
import puzzle from "../../assets/icons/puzzle-dynamic-clay.png";
import bombilla from "../../assets/icons/bombilla.png";
import grafica from "../../assets/icons/barra-grafica.png";
import cronometro from "../../assets/icons/cronometro.png";
import cohete from "../../assets/icons/lanzadera.png";
import roadmap from "../../assets/icons/roadmap.png";
import './ProjectPage.css';
import { useNavigate } from 'react-router-dom';

function ProjectPage() {
  const navigate = useNavigate();

  return (
    <div className='ProjectContainer'>
        <div className='ProjectTitleContainer'>
            <img src={puzzle} onClick={() => navigate('/')} alt="logo"/>
            <h1>CubeDo Roadmap 2022-2023:</h1>
        </div>
        <div>
   
        <div className='ProjectRoadContainer'>

        <img className='RoadMapImage' src={roadmap} alt="roadmap"/>

            <div className='ProjectQ4Container'>
              <h2>Q4</h2>
              <div className='Shadow'></div>
              <div className='Connection'></div>
              <button><img src={bombilla} alt='a'/></button>
              <ul>
                <li>
                  <p>Simple Tasks</p>
                </li>
                <li>
                  <p>Recycle Bin</p>
                </li>
                <li>
                  <p>Responsive Design</p>
                </li>
                <li>
                  <p>Local Save</p>
                </li>
                <li>
                  <p>Contact for Projects</p>
                </li>
              </ul>
            </div>

            <div className='ProjectQ1Container'>
            <ul>
                <li>
                  <p>Time Limit</p>
                </li>
                <li>
                  <p>Categories</p>
                </li>
                <li>
                  <p>Profile Page</p>
                </li>
                <li>
                  <p>Calendar</p>
                </li>
                <li>
                  <p>Description</p>
                </li>
              </ul>
              <h2>Q1</h2>
              <div className='Shadow'></div>
              <div className='Connection'></div>
              <button><img src={cronometro} alt='a'/></button>
              
              
            </div>

            <div className='ProjectQ2Container'>
              <h2>Q2</h2>
              <div className='Shadow'></div>
              <div className='Connection'></div>
              <button><img src={grafica} alt='a'/></button>
              <ul>
                <li>
                  <p>Statistics</p>
                </li>
                <li>
                  <p>Co-workers</p>
                </li>
                <li>
                  <p>Tasks Details</p>
                </li>
                <li>
                  <p>Task Management</p>
                </li>
                <li>
                  <p>Custom Jobs</p>
                </li>
              </ul>
            </div>

            <div className='ProjectQ3Container'>
            <ul>
                <li>
                  <p>Mobile App</p>
                </li>
                <li>
                  <p>Account</p>
                </li>
                <li>
                  <p>Reminders</p>
                </li>
                <li>
                  <p>Habits</p>
                </li>
                <li>
                  <p>Other features...</p>
                </li>
              </ul>
              <h2>Q3</h2>
              <div className='Shadow'></div>
              <button><img src={cohete} alt='a'/></button>
            </div>
        </div>
       
        </div>
        
    </div>
  )
}

export { ProjectPage };