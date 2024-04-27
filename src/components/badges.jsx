import React from "react";
import { FaTrophy } from "react-icons/fa";

const badges = [
  {
    color: "green",
    icon: <FaTrophy />,
    title: "YOUNGEST ENTREPRENEUR STPI - 2012",
    subtitle: "Pioneering Excellence at A Young Age",
    description:
      "Awarded the title of 'Youngest Entrepreneur STPI - 2012,' recognizing its achievements as a young Software company",
  },
  {
    color: "red",
    icon: <FaTrophy />,
    title: "ISO 20000-1:2018 Certified",
    subtitle: "Committed to International Excellence",
    description:
      "We proudly hold ISO 20000-1:2018 certification for compliance with international standards for information technology service management systems (ITSMS)",
  },
  {
    color: "blue",
    icon: <FaTrophy />,
    title: "NASSCOM Best Shortlisted Product - 2019",
    subtitle: "Innovation Recognized on A National Stage",
    description:
      "Programming Glore Software's product was shortlisted for the prestigious NASSCOM Best Product Award 2019",
  },
  {
    color: "orange",
    icon: <FaTrophy />,
    title: "Emerging Technology Partners - 2021",
    subtitle: "Leading The Charge In Innovation",
    description:
      "Recognition as an emerging technology partner in 2021, highlighting its expertise and innovation in delivering cutting-edge IT solutions to clients",
  },
];

const BadgeCard = ({ color, icon, title, subtitle, description }) => (
  <div className={`bg-${color}-100 text-${color}-900 p-4 rounded-lg shadow-lg hover:shadow-2xl flex flex-col items-center`}>
    <div className={`text-4xl mb-2`}>
      {icon}
    </div>
    <div className={`text-sm font-bold text-center mb-1`}>{title}</div>
    <div className={`text-xs font-medium text-center mb-2`}>{subtitle}</div>
    <div className={`text-xs md:text-center text-justify`}>{description}</div>
  </div>
);

const Badges = () => (
  <div className={`p-8 bg-white text-center`}>
    <div className={`text-xl md:text-2xl font-bold mb-4`}>
      Recognition & Certifications
    </div>
    <div className={`grid grid-cols-2 gap-4`}>
      {badges.map((badge) => (
        <BadgeCard key={badge.title} {...badge} />
      ))}
    </div>
  </div>
);

export default Badges;
