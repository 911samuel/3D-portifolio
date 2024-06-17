import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

interface HomeInfoProps {
  currentStage: number;
}

interface InfoBoxProps {
  text: string;
  link: string;
  btnText: string;
}

const InfoBox = ({ text, link, btnText }: InfoBoxProps) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow icon" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent: { [key: number]: JSX.Element } = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Samuel </span>👋
      <br />A software developer from Rwanda
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple project over years. corious about the impact?"
      link="/projects"
      btnText="Visit my portifolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }: HomeInfoProps) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
