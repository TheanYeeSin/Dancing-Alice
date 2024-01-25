/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import Alice from "../models/Alice";
import Music from "../assets/Theme 113.wav";
import soundOn from "../assets/soundon.png";
import soundOff from "../assets/soundoff.png";

const Home = () => {
  const audioRef = useRef(new Audio(Music));
  audioRef.current.volume = 0.1;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const adjustAliceForScreenSize = () => {
    let scale = null;
    let position = [0, -0.1, 1];
    let rotation = [0, 0, 0];

    if (window.innerWidth < 768) {
      scale = [0.7, 0.7, 0.7];
    } else {
      scale = [1, 1, 1];
    }
    return [scale, position, rotation];
  };

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
      console.log("test");
    };
  });

  const [aliceScale, alicePosition, aliceRotation] = adjustAliceForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.01, far: 2000 }}
      >
        <Suspense fallback={<Loader />}>
          <Alice
            position={alicePosition}
            scale={aliceScale}
            rotation={aliceRotation}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img
          src={isPlayingMusic ? soundOn : soundOff}
          alt="sound"
          className="w-12 h-12 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
