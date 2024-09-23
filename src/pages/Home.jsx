import pp from "../assets/ProfilePic.png";
import Bookstore from '../assets/Bookstore.jpg';
import Whiteboard from '../assets/Whiteboard2.jpg';
import Portfolio from '../assets/Portfolio.jpg';
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import { Link } from "react-router-dom";
import Resume from "../assets/Aarya_s_Resume.pdf";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import { motion } from "framer-motion"
import { Center } from "@react-three/drei";
import Card from "../components/Card/Card";


function Home() {
  return (
    <div className="home">
      <Header />

      <motion.section className="home-center" transition={{ duration: 3 }}>
        <div className="left-font">
          <motion.p
            className="home-font"
            initial={{ opacity: 0 }}
            animate={{ y: -10, opacity: 1 }}
            transition={{
              delay: 0.5,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            AARYA KASBE
          </motion.p>
          <motion.p
            style={{ textAlign: "center" }}
            initial={{ opacity: 0 }}
            animate={{ y: -10, opacity: 1 }}
            transition={{
              delay: 0.6,
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Web Developer
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
          viewport={{ once: true, amount: 0.5 }}
          id="image-bk"
        >
          <img src={pp} />
        </motion.div>
      </motion.section>

      <div
        className="about"
        id="about"
      >
        <motion.div className="about-left"
        initial={{ opacity: 0, y:10}}
        whileInView={{opacity:1,y:0}}
        transition={{delay:0.2}}
        viewport={{ once: true, amount: 0.5 }}>
          <h4>About me</h4>
          <p>
            Hello,I'm Aarya kasbe, an undergraduate student and a web developer
          </p>
          <p>
            I have been utilizing the MERN stack to develop full-stack projects.
          </p>
        </motion.div>

        <motion.div className="download"
        initial={{ opacity: 0, y:10}}
        whileInView={{opacity:1,y:0}}
        transition={{delay:0.5}}
        viewport={{ once: true, amount: 0.5 }}>
          <div>
            <p>Download my resume</p>
            <motion.a
              href={Resume}
              download="Resume"
              target="_blank"
              whileTap={{ scale: 0.8 }}
              // whileHover={{ scale:1.5 }}
              viewport={{ once: true }}
            >
              <button>Download</button>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <section className="project" id="projects">
        <p style={{ textAlign: "center" }}>PROJECTS</p>
        <div className="project-list">
          <Card title="whiteboard-collab-app" imageurl={Whiteboard} github="https://github.com/AaryaK05/Whiteboard_collab"
           live="https://whiteboard-collab-u87n.onrender.com" />
          <Card title="bookstore-mern-app" imageurl={Bookstore}  github="https://github.com/AaryaK05/Bookstore_mern_app"
           live="https://bookstore-mern-app-kfk9.onrender.com" />
          <Card title="portfolio" imageurl={Portfolio} github="https://github.com/AaryaK05/Portfolio" 
          live="https://portfolio-kpyo.onrender.com"/>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="form-container">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
