import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { WebProjectsData } from '../data/WebProjectsData'

export default function web_projects() {
  console.log({ WebProjectsData })
  return (
    <Layout>
      <div>
        {WebProjectsData.map((project, projectIndex) => {
          return (
            <div key={projectIndex}>
              <h1>{project.title}</h1>
              <h4>{project.environment}</h4>
              <img id="image" className={styles.comic} src={project.picture} />
              <p>{project.description}</p>
              <a href="{project.github}">Github repo</a>
              <br />
              <a href="{project.demo}">Live Demo</a>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
