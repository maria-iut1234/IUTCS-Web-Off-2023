import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import axios from 'axios';

export function AchievementsCarousel() {
    const [achievements, setAchievements] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/iutcs/achievement/getAllAchievements')
            .then((response) => {
                setAchievements(response.data);
            })
            .catch((error) => {
                console.error('Error fetching achievements:', error);
            });
    }, []);
    return (
        <div className="container flex justify-center items-center w-screen h-screen m-6">
            <Carousel className="rounded-xl">
                {achievements.map((achievement, index) => (
                    <div className="relative h-full w-full" key={index}>
                        <img
                            // src={achievement.imageURL}
                            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                            alt={`image ${index + 1}`}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                >
                                    {achievement.title}
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-12 opacity-80"
                                >
                                    {achievement.description}
                                </Typography>
                                <div className="flex gap-2">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="z-10">
                                            <button
                                                type="submit"
                                                className="lg:px-24 md:px-24 px-12 mt-6 relative -top-1 -left-1 bg-[#F4F2F0] py-2.5 px-5 font-medium text-xl text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] 
                border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="z-10">
                                            <button
                                                type="submit"
                                                className="lg:px-24 md:px-24 px-12 mt-6 relative -top-1 -left-1 bg-[#F4F2F0] py-2.5 px-5 font-medium text-xl text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] 
                border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default AchievementsCarousel    
