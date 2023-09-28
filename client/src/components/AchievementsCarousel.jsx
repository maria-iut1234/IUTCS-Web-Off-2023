import { Carousel, Typography } from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import newRequest from "../utils/newRequest.util";
import configHeader from "../utils/configHeader.util";
import AchievementEditButtons from "./AchievementEditButtons";


export function AchievementsCarousel({admin}) {
    const [achievements, setAchievements] = useState([]);
    useEffect(() => {
        async function fetchAchievements() {
            try {
                //maybe i should get latest 5 achievements at a time
                const response = await newRequest.get('achievement/getAllAchievements', configHeader);
                setAchievements(response.data);
            } catch (error) {
                console.error('Error fetching achievements:', error);
            }
        }

        fetchAchievements();
    }, []);
    return achievements.length>0 &&  (
        <div className="flex justify-center items-center h-screen m-12">
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
                                {admin && (<AchievementEditButtons achievementData={achievement}/>)}
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default AchievementsCarousel    
