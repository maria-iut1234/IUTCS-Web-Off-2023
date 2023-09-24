import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import AdminNavbar from "../components/AdminNavbar";
import BlogEditButtons from "../components/BlogEditButtons";
import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:7000/iutcs/",
  withCredentials: true,
});


const SingleBlogPage = () => {
  const [blogData, setBlogData] = useState(null);
  const admin = true; //CHECK FOR ADMIN
  const bgClass = admin? "admin-gradient-bg" : "user-gradient-bg"

  const { id: blogId } = useParams();           // Getting the blogId from the route parameter

  useEffect(() => {
    const fetchBlogData = async () => {
      try {

        console.log(blogId)

        // Simulating data fetch from an API
        const response = await newRequest.get(`blog/getBlogById/${blogId}`);
        
        if (response.status !== 200) {
          throw new Error("Blog not found");
        }
        
        const fetchedBlogData = response.data;

        setBlogData(fetchedBlogData);
      } 
      
      catch (error) {
        console.error("Error fetching blog content:", error.response.data);
      }
    };

    fetchBlogData();
  }, [blogId]);

  return (
    <div className={`flex flex-col min-h-screen ${bgClass} bg-cover bg-fixed bg-center`}>
      <AdminNavbar />
      <div className="w-full mx-auto">
        <main className="mt-10">
          <div
            className="mb-4 md:mb-0 w-full mx-auto relative"
            style={{ height: "24em" }}
          >
            <div
              className="absolute left-0 bottom-0 w-full h-full z-10"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, transparent, rgba(0,0,0,.7))",
              }}
            ></div>
            <img
              src={blogData && blogData.image}
              className="absolute left-0 top-0 w-full h-full z-0 object-cover"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <a
                href="#"
                className="px-4 py-1 bg-black text-white inline-flex items-center justify-center mb-2"
              >
                {blogData && blogData.tags && blogData.tags[0]}
              </a>
              <h2 className="text-xl md:text-4xl font-semibold text-white leading-tight">
                {blogData && blogData.title}
              </h2>
              <div className="flex mt-3">
                <div>
                  <p className="font-semibold text-white text-sm">
                    {blogData && blogData.author}
                  </p>
                  <p className="font-semibold text-white text-xs">
                    {blogData && new Date(blogData.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {admin && (<BlogEditButtons blogData={blogData}/>)}
          
          <div className="px-4 mt-4 text-white mx-auto text-lg leading-relaxed pb-6">
            {blogData && blogData.description}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SingleBlogPage;
