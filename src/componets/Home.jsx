
import  "./style.css"
import { Card } from './Card'
import { Healthcard } from './Healthcard';
import { Excellencecard } from './Excellencecard';
import Slider from './Slider';

  const healthData=[
    {title:"Critical Care", url: "https://www.narayanahealth.org/sites/default/files/styles/our_specialities/public/cardiology-adult.png?itok=8qvE9gMq" },
    {title:"Critical Care", url: "https://www.narayanahealth.org/sites/default/files/styles/our_specialities/public/cardiology-adult.png?itok=8qvE9gMq" },
    {title:"Critical Care", url: "https://www.narayanahealth.org/sites/default/files/styles/our_specialities/public/cardiology-adult.png?itok=8qvE9gMq" },
    {title:"Critical Care", url: "https://www.narayanahealth.org/sites/default/files/styles/our_specialities/public/cardiology-adult.png?itok=8qvE9gMq" },
    {title:"Critical Care", url: "https://www.narayanahealth.org/sites/default/files/styles/our_specialities/public/cardiology-adult.png?itok=8qvE9gMq" },
  ]
  const ExcellenceData=[
    {title:"4.2 Million+", des:"lorem ufuf fufdhf",url: "https://www.narayanahealth.org/sites/default/files/styles/clinical_excellence__310_x_188_/public/medical-specialities-min.jpg?itok=ttSBPRhL" },
    {title:"22", des:"19 State-of-the-art Hospitals | 3 Heart Centres",url: "https://www.narayanahealth.org/sites/default/files/styles/clinical_excellence__310_x_188_/public/medical-procedures-min.jpg?itok=Tg8bfhFA" },
    {title:"18000+", des:"fsdaf gdsfag gsa",url: "https://www.narayanahealth.org/sites/default/files/styles/clinical_excellence__310_x_188_/public/hospital-india-min.jpg?itok=SFBb0o8d" },
  ]
export const Home = () => {

  return (
    <div>
     <div className='slider' >
     <Slider/>
     </div>
  
    <h1>Our Specialities</h1>
    <div class="our-Specialities">
     {
      healthData.map((el)=>(
        <Healthcard image={el.url}
          title={el.title}
          />
      ))
     }
        
    </div>
    <h1>Clinical Excellence</h1>
    <div class="Clinical_Excellence">
    {
     ExcellenceData.map((el)=>(
        <Excellencecard image={el.url}
          title={el.title}
          des={el.des}
          />
      ))
     }
    </div>
    <div className='explore'>
    <h1>Explore
    </h1>

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
