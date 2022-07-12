import React from 'react'

import Card from './Card'

import {projects} from '../components/ProjectList'

export default function Projects({darkMode}){

    const cardElements = projects.map(item => (
        <Card
            key={item.id}
            title={item.title}
            description={item.description}
            techs={item.tech}
            link={item.link}
            background={item.background}
            darkMode= {darkMode}
        />
    ))

    return(
        <section id="projects-section">
            <div className="projects-section-container">
                <div className="title-container">
                    <h2 className='main-title' style={darkMode === 'true' ? {color: '#969e98'} : {color: '#6f7378'}><span className='main-title--number' >-01-</span> What I've Built</h2>
                    <hr className='title--hr title--hr--projects'/>
                </div>
                {cardElements}
            </div>
        </section>
    )
}