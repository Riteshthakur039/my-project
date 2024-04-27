import React from 'react'
import {
    GiAbstract020,
    GiAbstract024,
    GiAbstract041,
    GiAbstract104,
} from "react-icons/gi";

function Card1({ heading, description, icon, className }) {
    return (
        <div className={`flex gap-4 rounded-xl shadow-sm p-6 ${className}`}>
            <div className="min-w-max">{icon}</div>
            <div className="space-y-2">
                <h3 className="text-[22px] font-semibold">{heading}</h3>
                <p className="leading-8 text-gray-800 font-normal">{description}</p>
            </div>
        </div>
    );
}

const Offer = () => {
    return (
        <>
            <div className='flex items-center justify-center mt-10 py-5 '>
                <h1 className='text-2xl text-red-800 font-semibold'>OUR OFFERINGS</h1>

            </div>
            <div className='flex items-center justify-center '>
                <h1 className='text-xl md:text-5xl font-bold mt-6 md:mt-10 leading-tight flex items-center justify-center py-10 ml-4'>We Deliver Solution With The Goal Of Trusting Relationships</h1>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3 xl:grid-cols-3 bg-red-300 p-4 sm:p-8">

                <Card1
                    className="bg-[#fcf4ff] hover:bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 hover:text-white"
                    heading="Web App Development"
                    description="Transform your ideas into dynamic web applications that not only adapt to any device but also catalyze your business's growth and prosperity."
                    icon={<GiAbstract020 size="2.5rem" className="text-[#5a3ec1] " />}
                />
                <Card1
                    className="bg-[#fefaf0] hover:bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 hover:text-white"
                    heading="Mobile App Development"
                    description="Craft captivating, user-friendly mobile apps for both iOS and Android platforms, ensuring your brand's presence in the palm of your customers' hands."
                    icon={<GiAbstract024 size="2.5rem" className="text-[#DDA10C]" />}
                />
                <Card1
                    className="bg-[#fff4f4] hover:bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 hover:text-white"
                    heading="Software Integrations"
                    description="Streamline your business processes and workflows by seamlessly integrating various software systems and applications, boosting overall efficiency."
                    icon={<GiAbstract041 size="2.5rem" className="text-[#FF6080]" />}
                />
                <Card1
                    className="bg-[#f3faff] hover:bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 hover:text-white"
                    heading="App Clones"
                    description="Leverage the success of existing applications while providing a unique user experience, saving time and resources in the process."
                    icon={<GiAbstract104 size="2.5rem" className="text-[#269FFF]" />}
                />
                <Card1
                    className="bg-[#f3faff] hover:bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 hover:text-white"
                    heading="Digital Marketing"
                    description="Elevate your online presence, engage your target audience, and drive business growth through strategic digital marketing strategies."
                    icon={<GiAbstract104 size="2.5rem" className="text-[#269FFF]" />}
                />
                <Card1
                    className="bg-[#f3faff] hover:bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 hover:text-white"
                    heading="Custom Software Development"
                    description="Crafting unique, tailored software solutions to meet the specific needs of your business."
                    icon={<GiAbstract104 size="2.5rem" className="text-[#269FFF]" />}
                />
            </div>
        </>
    )
}

export default Offer
