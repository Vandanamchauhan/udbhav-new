import ADBot from "../images/ADbot.jpg";
import DELBot from "../images/DELbot.png";
import DELADBot from "../images/DELADbot.png";
import AMR from "../images/AMR.png";
import AGV from "../images/agv.png";
import Cleaning from "../images/Cleaning.png";
import Logo from "../images/logo.jpg";
import DPIITHeader from "../images/DPIIT-header.png";

export const ASSETS = {
  adBot: ADBot,
  delBot: DELBot,
  delADBot: DELADBot,
  amr: AMR,
  agv: AGV,
  cleaning: Cleaning,
  logo: Logo,
  dpiitHeader: DPIITHeader,
};

export const PRODUCTS = [
  {
    id: "ad-robot",
    name: "Advertising Robot",
    tagline: "Mobile digital signage that moves with your crowd",
    description: `Advertisement Robot for the hospitality and retail industry is an intelligent automated system designed to promote products, hotel services, restaurants, events, and offers through a large digital display and AI-powered technology.`,
    specs: [
      { label: "Dimensions", value: "435*450*1120 mm" },
      { label: "Weight", value: "35 kg" },
      { label: "Run time", value: "8 - 9 Hr" },
      { label: "Clearance", value: ">50 cm" },
      { label: "Cruise speed", value: "1 m/s" },
      { label: "Navigation", value: "Visual SLAM" },
      { label: "Screen size", value: "21.5” inch" },
    ],
    image: ADBot,
  },
  {
    id: "delivery-robot",
    name: "Delivery Robot",
    tagline: "Autonomous food & item delivery",
    description: `Delivery bot is an advanced automated machine designed to transport meals, groceries, or beverages from one point to another without human assistance.`,
    specs: [
      { label: "Dimensions", value: "435*450*1050" },
      { label: "Weight", value: "32 Kg" },
      { label: "Run time", value: "8 - 9 hr" },
      { label: "Clearance", value: ">50 cm" },
      { label: "Navigation", value: "Visual SLAM" },
      { label: "Loading Capacity", value: "10 KG/tray" },
      { label: "Height between trays", value: "248/253/223" },
    ],
    image: DELBot,
  },
  {
    id: "delivery-ad-robot",
    name: "Delivery + Ad Robot",
    tagline: "Marketing & Delivery 2-in-1 robot",
    description: `DELADbot is the delivery-marketing 2-in-1 bot that is capable of performing several tasks – delivering, promotion at the same time. As a cutting-edge product, DELADbot delivers a state-of-the-art experience in different scenarios.`,
    specs: [
      { label: "Dimensions", value: "435*450*1120" },
      { label: "Weight", value: "38 Kg" },
      { label: "Run time", value: "8 - 9 hr" },
      { label: "Clearance", value: ">50 cm" },
      { label: "Loading Capacity", value: "10 KG/tray" },
      { label: "Height between trays", value: "248/253/223" },
      { label: "Screen Size", value: "19” inch" },
    ],
    image: DELADBot,
  },
  {
    id: "amr",
    name: "Autonomous Mobile Robot",
    tagline: "Material Transportation Through Intelligence",
    description: `AMR is an intelligent self-navigating robot used for material handling, delivery. AMRs make real-time decisions, and choose the best route automatically.`,
    specs: [
      { label: "Payload Capacity", value: "200/ 500/ 1000 kg" },
      { label: "Clearance", value: "40 mm" },
      { label: "Cruise speed", value: "1.1 m/s" },
      { label: "Run time", value: "8 - 9 hr" },
      { label: "Navigation", value: "Visual SLAM" },
      { label: "Passage width", value: "1800 mm" },
    ],
    image: AMR,
  },
  {
    id: "agv",
    name: "Autonomous Guided Vehicle",
    tagline: "Guided by Precision. Driven by Efficiency",
    description: `Autonomous Guided Vehicle is an intelligent automated transport solution designed to move materials, goods, and products efficiently within industrial environments.`,
    specs: [
      { label: "Payload Capacity", value: "200/ 500 kg" },
      { label: "Dimensions", value: "680 * 600 * 235 mm" },
      { label: "Cruise speed", value: "1.5 m/s" },
      { label: "Run time", value: "8 - 9 hr" },
      { label: "Navigation", value: "QR Navigation" },
      { label: "Battery Voltage", value: "48 V" },
    ],
    image: AGV,
  },
  {
    id: "commercial-cleaning-robot",
    name: "Commercial Cleaning Robot",
    tagline: "Automated cleaning for commercial environments",
    description: `Commercial Cleaning Robot is an intelligent autonomous solution designed for efficient and consistent floor cleaning. combines smart navigation and advanced cleaning technology to deliver effortless, reliable, and professional cleaning performance.`,
    specs: [
      { label: "Function", value: "Sweeping/ Scrubbing/ Mopping/ Drying" },
      { label: "Suction power", value: "1700 Pa" },
      { label: "Cruise speed", value: "1.2 m/s" },
      { label: "Runtime", value: "8 - 9 hr" },
      { label: "Weight", value: "150 Kg" },
      { label: "Cleaning Capacity", value: "500 - 1000 m²/hr" },
      { label: "Navigation", value: "camera + sensors" },
    ],
    image: Cleaning,
  },
];

export const CONTACT = {
  phone: "+91 9316493839",
  phoneHref: "tel:+919316493839",
  email: "info.udbhavlab@gmail.com",
  emailHref: "mailto:info.udbhavlab@gmail.com",
  whatsapp: "https://wa.me/919316493839",
  address:
    "Kathwada GIDC, Odhav Industrial estate, Ahmedabad, Gujarat 382430",
  socials: {
    instagram: "https://www.instagram.com/udbhavlab?igsh=aGdkN2g3cXN5bG54",
    linkedin: "https://www.linkedin.com/company/udbhavlab",
    x: "https://x.com/udbhv_official",
    youtube: "https://youtube.com/@udbhavlabrobotics?si=RfQsNVFpbz6jZ2MF",
    facebook: "https://www.facebook.com/share/1DGofkZZqk/",
  },
};

export const INDUSTRIES = [
  "Restaurants",
  "Cafés",
  "Hotels",
  "Food Courts",
  "Hospitals",
  "Retail",
  "Warehousing",
  "Manufacturing",
];
