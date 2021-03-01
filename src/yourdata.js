// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import pythonIcon from "./images/python.svg"
import cIcon from "./images/c-programming.svg"
import jsIcon from "./images/javascript.svg"
import powerbiIcon from './images/power-bi.svg'
import qlikIcon from './images/qlik.svg'
import neo4jIcon from './images/neo4j.svg'

// Projects Icons
import bus from './images/bus.jpg'
import mask from './images/mask.jpg'
import dashboard from './images/dashboard.jpg'

// About Icon
import myimage from './images/about.jpg'

// Social Icon
import githubIcon from "./images/github.svg"

export default {
  name: "Guan Quan",
  headerTagline: [
    "Creating the Future",
  ],
  headerParagraph:
    "A 19 year old self taught programmer who enjoys coding",
  contactEmail: "tguanquan8@gmail.com",


  // Prpject Section
  projects: [
    {
      id: 1, 
      title: "SG Bus Telegram Bot", 
      para:
        "Get bus arrival timings, save bus stops to favourites, schedule bus timing messages & receive MRT alerts 🚌.", 
      imageSrc:
        bus,
      url: "https://t.me/SINGA_Bus_Bot",
    },
    {
      id: 2,
      title: "Mask Detection with YOLOv3", 
      para:
        "Mask Detection with YOLOv3 using Custom Dataset to prevent spread of Covid-19", 
      imageSrc:
        mask,
      url: "https://github.com/spartan737/Mask-Detection-YOLOv3",
    },
    {
      id: 3, 
      title: "Covid-19 Dashboard with Dash",
      para:
        "Get latest Covid-19 cases, deaths and vaccinations around the world",
      imageSrc:
        dashboard, 
      url: "https://analyse-covid.herokuapp.com",
    },
  ],


  // About Secton
  aboutParaOne:
    "",
  aboutParaTwo:
    "",
  aboutParaThree:
    "",
  aboutImage:
  myimage, 


  // Skills Section
  skills: [
    {
      id: 1,
      img: pythonIcon,
      para:
        "I use Python most of my time for my projects!",
    },
    {
      id: 2,
      img: cIcon,
      para:
        "Beginner level standard in C. HAHA. But getting better day by day.",
    },    
    {
      id: 3,
      img: htmlIcon,
      para:
        "HTML with Django is my preferred combination! Of course not forgetting CSS as well.",
    },
    {
      id: 4,
      img: jsIcon,
      para:
        "JavaScript is the most interesting language!",
    },
    {
      id: 5,
      img: powerbiIcon,
      para:
        "Power BI is the first data visualisation tool I experienced!",
    },
    {
      id: 6,
      img: qlikIcon,
      para:
        "Chanced upon Qlik Sense during my attachment in Defence Science & Technology Agency (DSTA).",
    },
    {
      id: 7,
      img: neo4jIcon,
      para:
        "Used Neo4j to get relationship between objects. Didn't know a graphical database existed before this :(",
    },
  ],


  //   Contact Section 
  contactSubHeading: "I read emails 24/7",
  social: [
    { img: githubIcon, url: "https://github.com/spartan737" },
  ],
}
