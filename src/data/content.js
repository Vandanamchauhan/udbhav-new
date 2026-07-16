import ADBot from "../images/ADbot.jpg";
import DELBot from "../images/DELbot.png";
import DELADBot from "../images/DELADbot.png";
import Kiosk from "../images/Kiosk.png";
import Logo from "../images/logo.jpg";

export const ASSETS = {
  adBot: ADBot,
  delBot: DELBot,
  delADBot: DELADBot,
  kiosk: Kiosk,
  logo: Logo,
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
    id: "kiosk",
    name: "Self Ordering Kiosk",
    tagline: "self-service ordering & payments",
    description: `A Smart Ordering Kiosk is a self-service touchscreen solution that enables customers to browse products, place orders, and make payments quickly and independently.`,
    specs: [
      { label: "Screen Size", value: "32” / 43” / 55”" },
      { label: "Resolution", value: "1080*1920" },
      { label: "Touch type", value: "Capacitive 10 point" },
      { label: "RAM", value: "4 GB" },
      { label: "Processor", value: "Quad Core" },
      { label: "Printer", value: "3” Thermal" },
      { label: "Mounting", value: "Wall/ Floor" },
    ],
    image: Kiosk,
  },
];

export const CONTACT = {
  phone: "+91 9316493839",
  phoneHref: "tel:+919316493839",
  email: "info.udbhavlab@gmail.com",
  emailHref: "mailto:info.udbhavlab@gmail.com",
  address:
    "Shop No 27 first floor, Krishna row house, Bopal - Ghuma Rd, South Bopal, Bopal, Ahmedabad, Gujarat 380058",
  socials: {
    instagram: "https://www.instagram.com/udbhavlab?igsh=aGdkN2g3cXN5bG54",
    linkedin: "https://www.linkedin.com/company/udbhavlab",
    x: "https://x.com/udbhv_official",
  },
};

export const INDUSTRIES = [
  "Restaurants",
  "Cafés",
  "Hotels",
  "Food Courts",
  "Hospitals",
  "Retail",
];
