import React from "react";
import LandingPageCard from "./LandingPageCard";

function ActivitiesSection() {
  return (
    <>
      <div
        className={`py-4 flex-col bg-white bg-cover bg-fixed bg-center justify-center items-center`}
      >
        <h1 className="font-poppins-custom text-black text-7xl transition-colors duration-300 hover:text-red-500 pt-4 m-2 text-center">
          Activites
        </h1>
        <div class="holder mx-auto md:w-10/12 grid sm:grid-cols-2 md:grid-cols-3 py-2">

          <LandingPageCard
            className="px-7"
            coverImgUrl={
              "https://img.freepik.com/free-vector/programming-languages-learning-software-coding-courses-website-development-class-script-writing-it-programmers-cartoon-characters_335657-3454.jpg?w=740&t=st=1695572007~exp=1695572607~hmac=e577448a88bf273f5a55dbd4818a89cac1840e6a9387431e00444dfd3cf97bd9"
            }
            hoverImgUrl={
              "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/367987827_678385974328540_2086429872797664196_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeG41rLWE-E-uiqWLoWm64xc7OLl4zwaJ9bs4uXjPBon1nYE0gR09sqJ_rvaNJ_fclfmVZ2CnqWj0LFCM-9laTnV&_nc_ohc=6UowYzmWYOsAX8gcutC&_nc_ht=scontent-sin6-2.xx&oh=00_AfCDo0MXVpKSytbzVxrYq5rkXswJ2POMLO8_LsdWBclIKg&oe=6515FD70"
            }
            header={"Competitive Programming"}
          />

          <LandingPageCard
            coverImgUrl={
              "https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18107.jpg?w=740&t=st=1695568224~exp=1695568824~hmac=32cdfca3675bb746a879e4814aefe8247837c3d8697d582320a3a9c74714007b"
            }
            hoverImgUrl={
              "https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18107.jpg?w=740&t=st=1695568224~exp=1695568824~hmac=32cdfca3675bb746a879e4814aefe8247837c3d8697d582320a3a9c74714007b"
            }
            header={"Capture The Flag (CTF)"}
          />
          <LandingPageCard
            coverImgUrl={
              "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1695571590~exp=1695572190~hmac=a539959b050342437b9603e343d73286cf23e2b46649268ff92c8616062babc2"
            }
            hoverImgUrl={
              "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/377950433_694666892700448_4051838056346933253_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeEoEMtBq0eJFInT3q2rxsxaTqDgkLvjj_lOoOCQu-OP-VjW4miPxQzYYiVVg9unSioQ36iYjfHzccfkJIDrZz-_&_nc_ohc=pwMtMEDMX8MAX_MmByc&_nc_ht=scontent-sin6-1.xx&oh=00_AfDfR4aKbVRFJMgKOPs1wb4xRnbdqWiPI1Jvul0n_O0Tdg&oe=6515B5CE"
            }
            header={"Hackathon"}
          />
          <LandingPageCard
            coverImgUrl={
              "https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18107.jpg?w=740&t=st=1695568224~exp=1695568824~hmac=32cdfca3675bb746a879e4814aefe8247837c3d8697d582320a3a9c74714007b"
            }
            hoverImgUrl={
              "https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18107.jpg?w=740&t=st=1695568224~exp=1695568824~hmac=32cdfca3675bb746a879e4814aefe8247837c3d8697d582320a3a9c74714007b"
            }
            header={"IT Business Case"}
          />
          <LandingPageCard
            coverImgUrl={
              "https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18107.jpg?w=740&t=st=1695568224~exp=1695568824~hmac=32cdfca3675bb746a879e4814aefe8247837c3d8697d582320a3a9c74714007b"
            }
            hoverImgUrl={
              "https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18107.jpg?w=740&t=st=1695568224~exp=1695568824~hmac=32cdfca3675bb746a879e4814aefe8247837c3d8697d582320a3a9c74714007b"
            }
            header={"Olympiad"}
          />
          <LandingPageCard
            coverImgUrl={
              "https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18107.jpg?w=740&t=st=1695568224~exp=1695568824~hmac=32cdfca3675bb746a879e4814aefe8247837c3d8697d582320a3a9c74714007b"
            }
            hoverImgUrl={
              "https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18107.jpg?w=740&t=st=1695568224~exp=1695568824~hmac=32cdfca3675bb746a879e4814aefe8247837c3d8697d582320a3a9c74714007b"
            }
            header={"E-Sports"}
          />
        </div>
      </div>
    </>
  );
}

export default ActivitiesSection;
