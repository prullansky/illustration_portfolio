import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { WebProjectsData } from '../data/WebProjectsData'

export default function web_projects() {
  console.log({ WebProjectsData })
  return (
    <Layout>
      <div className={styles.web_project}>
        {WebProjectsData.map((project, projectIndex) => {
          return (
            <div key={projectIndex} className={styles.card}>
              <div className={styles.web_project_year}>
                {/* <div>
                  Year{'\n'}
                  {project.year}
                  Team{' '}
                  {project.team.map((member, memberIndex) => {
                    return <li>{member}</li>
                  })}
                </div> */}
                <div>
                  <h1>{project.title}</h1>
                  <h4>{project.environment}</h4>
                  <h5>{project.year}</h5>
                  <h5>
                    Team
                    {project.team.map((member, memberIndex) => {
                      return <li>{member}</li>
                    })}
                  </h5>
                </div>
              </div>

              <div>
                <a href={project.demo} target="_blank">
                  <img
                    id="image"
                    className={styles.comic}
                    src={project.picture}
                  />
                </a>
                <p>{project.description}</p>
                <a href={project.github} target="_blank">
                  Github repo
                </a>
                <br />
                <a href={project.demo} target="_blank">
                  Live Demo
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
