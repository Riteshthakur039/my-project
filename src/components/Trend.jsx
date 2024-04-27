import React from 'react';
import { FaStar } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";

// Dummy Icon Components (Replace these with your actual SVG icons)
const StarIcon = () => <span><FaStar /></span>;
const BadgeIcon = () => <span><SlBadge /></span>;
const DocumentIcon = () => <span><IoDocumentTextOutline /></span>;
const PeopleIcon = () => <span><FaPeopleGroup /></span>;

// Card Component
const Card = ({ title, metric, iconBgColor, IconComponent }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg mx-4 my-8 p-12 ">
      <div className={`border-4 p-6 ${iconBgColor} hover:rounded-3xl text-white flex items-center justify-center mb-4 transition-all ease-in-out duration-300`}>
  <IconComponent className="" />
</div>

      <div className="text-xl font-bold text-center mb-2">{title}</div>
      <div className="text-lg font-semibold text-center">{metric}</div>
    </div>
  );
};

// Main Component to render the cards
const Trend = () => {
  return (
    <div className="flex flex-wrap justify-center items-center p-8">
      <Card
        title="Total Experience"
        metric="9+ Years"
        iconBgColor="text-2xl bg-gradient-to-br from-slate-200 via-amber-400 to-zinc-400"
        IconComponent={StarIcon}
      />
      <Card
        title="Success"
        metric="Upwork 98%"
        iconBgColor="text-2xl bg-gradient-to-br from-amber-300 via-orange-500 to-lime-500"
        IconComponent={BadgeIcon}
      />
      <Card
        title="Projects Developed"
        metric="500+"
        iconBgColor="text-2xl bg-gradient-to-br from-emerald-300 via-yellow-400 to-emerald-400"
        IconComponent={DocumentIcon}
      />
      <Card
        title="Team Size"
        metric="100+"
        iconBgColor="text-2xl bg-gradient-to-br from-orange-500 via-red-300 to-emerald-500"
        IconComponent={PeopleIcon}
      />
    </div>
  );
};

export default Trend;
