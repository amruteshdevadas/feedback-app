import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'
function AboutPage() {
    return (
        <Card>
            <h2>About</h2>
            <p>This is a simple app to keep track of your feedback</p>
            <p> Version : 1.0.0 </p>
            <p> <Link to="/">Back to home</Link></p>
        </Card>
    )
}

export default AboutPage
