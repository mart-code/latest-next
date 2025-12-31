'use client';
import Image from "next/image";
import posthog from "posthog-js";

const ExploreBtn = () => {
  const handleClick = () => {
    posthog.capture('explore_events_clicked', {
      button_location: 'homepage_hero',
      destination: '#events',
    });
  };

  return (
    <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={handleClick}>
        <a href="#events">Explore Events <Image src='./icons/arrow-down.svg' width={24} height={24} alt='arrow-down/'/></a></button>
  )
}

export default ExploreBtn