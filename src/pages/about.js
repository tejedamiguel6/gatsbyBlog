import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'



const About = () => {
    return (
        <Layout>
            <Head title="about" />
            <h1>About Me</h1>
            <p>Hello, im Miguel, a frontend developer learning as much as i can</p>
            <p>Here is m contact info in this link! <Link to='/contact'>Contact me</Link></p>
        </Layout>
       
    )
}

export default About