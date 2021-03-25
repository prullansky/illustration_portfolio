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
                <div>
                  <h1>{project.title}</h1>
                  <h4>{project.environment}</h4>
                </div>
                {/* <div>
                  <h5>{project.year}</h5>
                  <h5>
                    Team
                    {project.team.map((member, memberIndex) => {
                      return <li>{member}</li>
                    })}
                  </h5>
                </div> */}
              </div>

              <a href={project.demo} target="_blank">
                <img
                  id="image"
                  className={styles.web_project_image}
                  src={project.picture}
                />
              </a>

              <div>
                <p>{project.description}</p>
                <a className={styles.a} href={project.github} target="_blank">
                  Github repo
                </a>
                <br />
                <a className={styles.a} href={project.demo} target="_blank">
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
