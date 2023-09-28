import { Carousel, Typography } from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import newRequest from "../utils/newRequest.util";
import configHeader from "../utils/configHeader.util";
import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineDelete, MdPostAdd } from "react-icons/md";
import { useNavigate } from "react-router";
import PopUp from "./PopUp";


export function ExecutivesCarousel({ admin }) {
    const [executives, setExecutives] = useState([]);
    const [visibleModal, setVisibleModal] = useState(false);
    const openModal = () => {
        setVisibleModal(true);
    };
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchExecutives() {
            try {
                //maybe i should get latest 5 achievements at a time
                const response = await newRequest.get('committee/getAllCommitteeMembers', configHeader);
                setExecutives(response.data);
            } catch (error) {
                console.error('Error fetching achievements:', error);
            }
        }

        fetchExecutives();
    }, []);


    const handleDelete = async (id) => {

        try {
            const response = await newRequest.delete(`committee/deleteCommitteeMember/${id}`, configHeader);
            if (response.status === 200) {
                // Successful response
                window.location.reload();
            } else {
                // Handle other response statuses as needed
                console.error("Error deleting achievement. Status:", response.status);
            }
        } catch (error) {
            console.error("Error deleting achievement. Status:", error);
            // Handle the error and display a user-friendly error message
            window.alert("Error deleting achievement. Please try again later.");
        }
    };

    return executives.length > 0 && (
        <div className="flex justify-center items-center h-screen m-12">
            <Carousel className="rounded-xl">
                {executives.map((executive, index) => (
                    <div className="relative h-full w-full" key={index}>
                        <img
                            src={executive.photoUrl}
                            // src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
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
                                    {executive.name}
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="white"
                                    className="mb-12 opacity-80"
                                >
                                    {executive.position}
                                </Typography>
                                {admin && (<>{visibleModal && (
                                    <PopUp
                                        message={
                                            "Are you sure you want to delete the post? You cannot undo this action!"
                                        }
                                        redButtonText={"Delete"}
                                        redButtonFunction={handleDelete(executive._id)}
                                        normalButtonText={"Cancel"}
                                        normalButtonFunction={() => setVisibleModal(false)}
                                        setModalVisibility={setVisibleModal}
                                    />
                                )}
                                    <div className="m-2 rounded-sm"
                                    >
                                        <div className="max-w-screen-xl flex justify-start gap-4 md:gap-8 mx-auto py-1">
                                            <div>
                                                <div className="z-10 p-2"
                                                    onClick={() => {
                                                        navigate(`/admin/executives/${executive._id}/edit`);
                                                    }}>
                                                    <button
                                                        type="submit"
                                                        className="lg:px-6 md:px-4 px-4 relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-5 font-medium text-md md:text-lg text-[#373234] transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 flex items-center"
                                                    >
                                                        <div className="inline-block mr-2">
                                                            <BiSolidEdit />
                                                        </div>
                                                        Edit
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <div
                                                    className="z-10 p-2"
                                                    onClick={() => {
                                                        openModal();
                                                    }}
                                                >
                                                    <button
                                                        type="submit"
                                                        className="lg:px-6 md:px-4 px-4 relative -top-1 -left-1 bg-[#F4F2F0] py-1 px-5 font-medium text-md md:text-lg text-red-700 transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-[#02E1DC] border-[#02E1DC] before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 flex items-center"
                                                    >
                                                        <div className="inline-block mr-2">
                                                            <MdOutlineDelete />
                                                        </div>
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div></>)}
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default ExecutivesCarousel    
