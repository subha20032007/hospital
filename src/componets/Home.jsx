import React from 'react'
import  "./style.css"
import { Card } from './Card'

export const Home = () => {
  return (
    <div>
    
    <div class="location">
      <h1>Locations</h1>
    </div>
    <div class="health-library">
      <h1>HEALTH LIBRARY</h1>

    </div>
    <div className='explore'>
      <img src="https://www.medcare.ae/fileadmin/user_upload/csm_MedcareHospitality1_33dacc8a4c.jpg" alt="" />
    </div>
    <main className="main-content">
    <Card
      icon="🌟"
      title="Our Specialities"
      content="Explore our specialized healthcare services."
    />

    <Card
      icon="❤️"
      title="NH Cares"
      content="Learn about our commitment to compassionate care."
    />

    <Card
      icon="⚕️"
      title="Clinical Excellence"
      content="Discover our commitment to clinical excellence."
    />

    <Card
      icon="📝"
      title="Latest Blogs"
      content="Read our latest healthcare-related blog posts."
    />

    <Card
      icon="🏆"
      title="Awards and Accreditations"
      content="See the recognitions we have received for our services."
    />

    <Card
      icon="📅"
      title="News & Events"
      content="Stay updated with the latest hospital news and events."
    />
  </main>
  </div>
  )
}
