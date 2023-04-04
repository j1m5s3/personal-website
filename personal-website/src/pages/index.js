import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react';

import HomeComponent from '@/componenets/HomeComponent';
import PersonalProjects from '@/componenets/PersonalProjects';
import Resume from '@/componenets/Resume';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const component_selections = ['Home', 'Projects', 'Resume'];
  const [componentSelection, setComponentSelection] = useState(component_selections[0]);

  function handleNavClick(user_selection) {
    setComponentSelection(component_selections[user_selection]);
  };

  return (
    <>
      <Head>
        <title>LOOK AT ME</title>
        <meta name="description" content="I made this site so you'll hire me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_personal_logo.ico" />
      </Head>
      <div className="home-container container-fluid m-auto">

        <div className="row navbar navigation-bar m-auto mt-3 justify-content-center align-items-center">
          <div className="col-sm-1 d-flex justify-content-center align-items-center">
            <button onClick={() => handleNavClick(0)} title="Home" variant="primary" className="navigation-bar-button">
              <i className="bi bi-house-door"></i>
            </button>
          </div>
          <div className="col-sm-1 d-flex justify-content-center align-items-center">
            <button onClick={() => handleNavClick(1)} title="Projects" variant="primary" className="navigation-bar-button">
              <i className="bi bi-person-workspace"></i>
            </button>
          </div>
          <div className="col-sm-1 d-flex justify-content-center align-items-center">
            <button onClick={() => handleNavClick(2)} title="Resume" variant="primary" className="navigation-bar-button">
              <i className="bi bi-file-earmark-person"></i>
            </button>
          </div>
        </div>

        <div className="container-fluid m-auto">
          {componentSelection == 'Home' && <HomeComponent />}
          {componentSelection == 'Projects' && <PersonalProjects />}
          {componentSelection == 'Resume' && <Resume />}
        </div>

        <div className="row social-navbar m-auto mt-3 justify-content-center align-items-center">
          <div className="col-sm-1 d-flex justify-content-center align-items-center">
            <Link href="https://linkedin.com/in/james-lynch-14645911a">
              <button title="LinkedIn" variant="primary" className="social-navbar-button mb-1">
                <i className="bi bi-linkedin"></i>
              </button>
            </Link>
          </div>
          <div className="col-sm-1 d-flex justify-content-center align-items-center">
            <Link href="https://github.com/j1m5s3">
              <button title="GitHub" variant="primary" className="social-navbar-button mb-1">
                <i className="bi bi-github"></i>
              </button>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}
