import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useState } from "react";
import "./css/LittleMermaidPage.css";

const baseUrl = import.meta.env.BASE_URL;

export const LittleMermaidPage = () => {
  //////////////////////////////////////////// INTRO SCENE /////////////////////////////////////
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const sunY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  const wavesY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  //////////////////////////////////////////// SCENE 1 /////////////////////////////////////
  const scene2Ref = useRef(null);
  const { scrollYProgress: scene2Progress } = useScroll({
    target: scene2Ref,
    offset: ["start start", "end end"],
  });
  const foregroundY = useTransform(scene2Progress, [0, 1], ["0%", "80%"]);
  const elementsY = useTransform(
    scene2Progress,
    [0, 0.2, 1],
    ["0%", "0%", "150%"],
  );
  const elementsOpacity = useTransform(
    scene2Progress,
    [0, 0.4, 0.8],
    [1, 1, 0],
  );
  const mermaidY = useTransform(
    scene2Progress,
    [0, 0.5, 1],
    ["0%", "-20%", "-80%"],
  );
  const mermaidOpacity = useTransform(scene2Progress, [0, 0.8, 1], [1, 1, 0]);
  const sceneBg = useTransform(
    scene2Progress,
    [0, 0.8, 1],
    ["#113fd8", "#3663f7", "#ffffff"],
  );
  //////////////////////////////////////////// MEETING SCENE /////////////////////////////////////
  const meetingRef = useRef(null);
  const { scrollYProgress: meetingProgress } = useScroll({
    target: meetingRef,
    offset: ["start start", "end end"],
  });

  const lightningOpacity = useTransform(
    meetingProgress,
    [0, 0.2, 0.35, 0.4, 0.45, 0.5, 0.6, 0.7],
    [0, 0, 1, 0, 1, 0.2, 0, 0],
  );

  ////////////////////////////// STORM //////////////////////////////////////////////////
  const stormRef = useRef(null);
  const { scrollYProgress: stormProgress } = useScroll({
    target: stormRef,
    offset: ["start start", "end end"],
  });

  const charactersY = useTransform(
    stormProgress,
    [0, 0.8, 1],
    ["0%", "-20%", "-100%"],
  );
  const characterMY = useTransform(
    stormProgress,
    [0, 0.8, 1],
    ["0%", "20%", "80%"],
  );
  const charactersOpacity = useTransform(
    stormProgress,
    [0, 0.1, 0.97, 1],
    [0, 1, 1, 0],
  );

  const stormBg = useTransform(
    stormProgress,
    [0, 0.8, 1],
    ["#113fd8", "#113fd8", "#ffffff"],
  );
  /////////////////////////////////////// ISLAND SCENE ///////////////////////////////////////////////////
  const islandRef = useRef(null);
  const { scrollYProgress: islandProgress } = useScroll({
    target: islandRef,
    offset: ["start start", "end end"],
  });

  const islandY = useTransform(islandProgress, [0, 0.8], ["0%", "80%"]);
  const palmY = useTransform(islandProgress, [0, 0.8], ["0%", "60%"]);
  const princeY = useTransform(islandProgress, [0, 0.8], ["0%", "90%"]);
  const textIsY = useTransform(islandProgress, [0, 0.8], ["0%", "50%"]);
  const textOpacity = useTransform(
    islandProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0],
  );

  /////////////////////////////////// WITCH SCENE //////////////////////////////////////////////////////////
  const witchRef = useRef(null);
  const { scrollYProgress: witchProgress } = useScroll({
    target: witchRef,
    offset: ["start start", "end end"],
  });

  const mermaidFlip = useTransform(witchProgress, [0, 0.5], [1, -1]);
  const mermaidX = useTransform(witchProgress, [0, 0.9], ["0%", "-100%"]);
  const witchHandX = useTransform(witchProgress, [0, 0.9], ["-80%", "0%"]);

  const textWiOpacity = useTransform(
    witchProgress,
    [0, 0.2, 0.85, 1],
    [0, 1, 1, 0],
  );
  const witchBg = useTransform(
    witchProgress,
    [0, 0.8, 1],
    ["#113fd8", "#3663f7", "#ffffff"],
  );
  /////////////////////////////////////// HEARTBREAK /////////////////////////////////////////////////////////
  const [Dancing, setDancing] = useState(false);
  const handleDancing = () => {
    setDancing(true);
    setTimeout(() => setDancing(false), 1000);
  };

  /////////////////////////////////////////////////////////////
  return (
    <>
      <Header />
      <section className="intro-scene">
        <div className="center-wrapper-sun">
          <motion.img
            className="sun"
            src={`${baseUrl}sun.svg`}
            alt="sun"
            style={{ y: sunY }}
          />
        </div>
        <div style={{ y: wavesY }} className="waves-wrapper">
          <motion.img
            className="waves-3"
            src={`${baseUrl}waves-3.svg`}
            alt="waves"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }}
          />
          <motion.img
            className="waves-2"
            src={`${baseUrl}waves-2.svg`}
            alt="waves"
            animate={{ y: [0, -25, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.img
            className="waves-1"
            src={`${baseUrl}waves-1.svg`}
            alt="waves"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ y: textY }}
          className="intro-text"
        >
          <h1 class="lm-h1">The Little Mermaid</h1>
          <h2 class="lm-h2">By Christean H. Anderson</h2>
          <p class="lm-p">Made by Cheryl</p>
        </motion.div>
      </section>
      {/************************************************ SCENE 2 ***************************************************** */}
      <div className="scene-2-scroll" ref={scene2Ref}>
        <motion.section
          style={{ backgroundColor: sceneBg }}
          className="scene-2"
        >
          <div className="center-wrapper">
            <motion.div
              style={{ y: elementsY, opacity: elementsOpacity }}
              className="scene-1-text"
              initial={{ opacity: 0, y: 100 }}
            >
              <h3 class="lm-h3">Once upon a time</h3>
              <h3 class="lm-h3">Deep in the sea</h3>
              <h3 class="lm-h3">
                A mermaid went to the surface for the first time
              </h3>
            </motion.div>
          </div>
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 1000, opacity: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            style={{ y: elementsY, opacity: elementsOpacity }}
            className="fish-cluster"
            src={`${baseUrl}fish-cluster.png`}
          />
          <motion.img
            initial={{ x: -1000 }}
            whileInView={{ x: 2000 }}
            transition={{ duration: 3, ease: "easeOut" }}
            style={{ y: elementsY, opacity: elementsOpacity }}
            className="fish-cluster-fr"
            src={`${baseUrl}fish-cluster.png`}
          />
          <motion.img
            style={{ y: foregroundY, opacity: elementsOpacity }}
            className="foreground fg-sc2"
            src={`${baseUrl}foreground-sc2.svg`}
            initial={{ opacity: 0, y: 60 }}
          />
          <div className="mermaid-sticky-wrapper">
            <motion.img
              whileInView={{ rotate: [-25] }}
              className="mermaid-white-sc2"
              src={`${baseUrl}mermaid-white.svg`}
              style={{ y: mermaidY, opacity: mermaidOpacity }}
            />
          </div>
        </motion.section>
      </div>
      {/***************************************************************************** FIRST MEETING***************************************************** */}
      <div className="meeting-scroll" ref={meetingRef}>
        <section className="scene-meeting">
          <motion.img
            className="ship"
            src={`${baseUrl}ship.svg`}
            animate={{ y: [0, -150, 0], rotate: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            className="waves-3"
            src={`${baseUrl}waves-3.svg`}
            alt="waves"
            animate={{ y: [0, -70, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.img
            className="waves-2"
            src={`${baseUrl}waves-2.svg`}
            alt="waves"
            animate={{ y: [0, -60, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.img
            animate={{ y: [0, -30, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }}
            className="mermaid-white-sc2"
            src={`${baseUrl}mermaid-white.svg`}
          />
          <motion.img
            className="waves-1"
            src={`${baseUrl}waves-1.svg`}
            alt="waves"
            animate={{ y: [0, -50, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }}
          />
          <motion.div
            className="lightning-overlay"
            style={{ opacity: lightningOpacity }}
          />
        </section>
      </div>
      {/***************************************************************************** STORM ***************************************************** */}
      <div className="storm-scroll" ref={stormRef}>
        <motion.section
          className="scene-storm"
          style={{ backgroundColor: stormBg }}
        >
          <div className="center-wrapper">
            <motion.div
              className="scene-storm-text"
              initial={{ opacity: 0, y: 100 }}
              style={{ y: charactersY, opacity: charactersOpacity }}
            >
              <h3 class="lm-h3">A violent storm rose across the sea</h3>
              <h3 class="lm-h3">and a man fell into the waves</h3>
            </motion.div>
          </div>
          <motion.img
            className="prince-falling"
            animate={{ rotate: [110, 90, 110] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            style={{ y: charactersY, opacity: charactersOpacity }}
            src={`${baseUrl}prince-falling.svg`}
          />
          <div className="mermaid-wrapper">
            <motion.img
              animate={{ rotate: [90] }}
              style={{ y: characterMY, opacity: charactersOpacity }}
              className="mermaid-white-sc2"
              src={`${baseUrl}mermaid-white.svg`}
            />
          </div>
        </motion.section>
      </div>
      {/***************************************************************************** ISLAND***************************************************** */}
      <div className="island-scroll" ref={islandRef}>
        <section className="island-scene">
          <motion.img
            className="waves-3"
            src={`${baseUrl}waves-3.svg`}
            alt="waves"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }}
          />

          <motion.img
            style={{ y: islandY }}
            className="island"
            src={`${baseUrl}island.svg`}
          />

          <motion.img
            className="prince-falling"
            src={`${baseUrl}prince-falling.svg`}
            style={{ y: princeY }}
          />

          <motion.img
            className="waves-2"
            src={`${baseUrl}waves-2.svg`}
            alt="waves"
            animate={{ y: [0, -25, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.img
            animate={{ rotate: [100] }}
            style={{ y: princeY }}
            className="mermaid-white-sc2"
            src={`${baseUrl}mermaid-white.svg`}
          />

          <motion.img
            className="waves-1"
            src={`${baseUrl}waves-1.svg`}
            alt="waves"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <motion.img
            className="palm-tree"
            src={`${baseUrl}palm-tree.svg`}
            style={{ y: palmY }}
            animate={{ rotate: [10, 0, 10] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <div className="center-wrapper">
            <motion.div
              className="scene-island-text"
              style={{ y: textIsY, opacity: textOpacity }}
            >
              <h3 class="lm-h3">She carried the prince safely to shore</h3>
              <h3 class="lm-h3">But left her heart beside him</h3>
            </motion.div>
          </div>
        </section>
      </div>
      {/***************************************************************************** WITCH SCENE***************************************************** */}
      <div className="witch-scroll" ref={witchRef}>
        <motion.section
          className="scene-witch"
          style={{ backgroundColor: witchBg }}
        >
          <motion.img
            className="mermaid-witch"
            src={`${baseUrl}mermaid-white.svg`}
            style={{ scaleX: mermaidFlip, x: mermaidX }}
          />

          <motion.img
            className="witch-hand"
            src={`${baseUrl}witch-hand.svg`}
            style={{ x: witchHandX }}
          />

          <div className="text-witch-wrapper">
            <motion.div
              style={{ opacity: textWiOpacity }}
              className="scene-witch-text"
            >
              <h3 class="lm-h3">To walk beside the prince</h3>
              <h3 class="lm-h3">She traded her voice for legs</h3>
            </motion.div>
          </div>
        </motion.section>
      </div>
      {/***************************************************************************** MARRIAGE SCENE***************************************************** */}
      <div className="heartbroken-scroll">
        <section className="heartbroken-scene">
          <motion.img
            src={`${baseUrl}waves-3.svg`}
            className="waves-3"
            alt="waves"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }}
          />
          <motion.img
            className="palm-tree-i"
            src={`${baseUrl}palm-tree.svg`}
            animate={{ rotate: [-10, 0, -10] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.img className="island" src={`${baseUrl}island.svg`} />

          <motion.img
            onHoverStart={handleDancing}
            animate={Dancing ? { y: [0, -30, 0, -40, 0, -40, 0] } : { y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onAnimationComplete={() => setDancing(false)}
            style={{ cursor: "pointer" }}
            className="prince-falling"
            src={`${baseUrl}prince-falling.svg`}
          />

          <motion.img
            onHoverStart={handleDancing}
            animate={Dancing ? { y: [0, -30, 0, -30, 0] } : { y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onAnimationComplete={() => setDancing(false)}
            style={{ cursor: "pointer" }}
            className="girl"
            src={`${baseUrl}girl.svg`}
          />

          <motion.img
            className="waves-2"
            src={`${baseUrl}waves-2.svg`}
            alt="waves"
            animate={{ y: [0, -25, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.img
            className="mermaid-white-heart"
            src={`${baseUrl}mermaid-white.svg`}
          />

          <motion.img
            className="waves-1"
            src={`${baseUrl}waves-1.svg`}
            alt="waves"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <motion.img
            className="palm-tree"
            src={`${baseUrl}palm-tree.svg`}
            animate={{ rotate: [10, 0, 10] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <div className="center-wrapper-heart">
            <motion.div className="scene-heart-text">
              <h3 class="lm-h3">But the prince gave his heart to another.</h3>
              <h3 class="lm-h3">And hers quietly broke beneath the waves.</h3>
            </motion.div>
          </div>
        </section>
      </div>
      <section className="scene-end">
        <div class="end-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="intro-text"
            className="scene-end-text"
          >
            <h1 class="lm-h1">The End</h1>
          </motion.div>
        </div>
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 1000, opacity: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="fish-cluster"
          src={`${baseUrl}fish-cluster.png`}
        />
        <motion.img
          initial={{ x: -1000 }}
          whileInView={{ x: 2200 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="fish-cluster-fr"
          src={`${baseUrl}fish-cluster.png`}
        />
        <motion.img
          className="foreground fg-sc2"
          src={`${baseUrl}foreground-sc2.svg`}
        />
        <motion.img
          initial={{ y: 500, opacity: 1, rotate: -120 }}
          whileInView={{ y: 0, opacity: 0 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="mermaid-end"
          src={`${baseUrl}mermaid-white.svg`}
        />
      </section>
      {/***************************************************************************** Up SCENE***************************************************** */}

      <Footer />
    </>
  );
};
