import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="innerWidth hero-container">
        {/* Left Side */}
        <div className="hero-left">
          <motion.div
            className="hero-title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1>
              Find Your <span className="highlight">Dream</span> <br />
              Home or <span className="highlight">Space</span>
            </h1>
            <p>
              Browse premium residencies across Ghana. Comfort, style, and
              convenience — all in one place.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="hero-search"
          >
            <SearchBar />
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
          >
            <div className="stat">
              <span>
                <CountUp start={8000} end={9000} duration={3} />+
              </span>
              <p>Properties Listed</p>
            </div>
            <div className="stat">
              <span>
                <CountUp start={1900} end={2000} duration={3} />+
              </span>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <span>
                <CountUp end={28} />+
              </span>
              <p>Awards Won</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side */}
        <motion.div
          className="hero-right"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="image-container">
            <img src="/hero-image.jpg" alt="Beautiful home" />
            <div className="circle-bg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
