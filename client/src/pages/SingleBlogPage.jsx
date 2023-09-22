import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import BlogEditButtons from "../components/BlogEditButtons";

const SingleBlogPage = () => {
  const [blogData, setBlogData] = useState(null);
  const admin = true; //CHECK FOR ADMIN

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        // Simulating data fetch from an API
        const fetchedBlogData = {
          blogImage:
            "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
          blogTag: "Nutrition",
          blogTitle:
            "Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.",
          authorName: "Mike Sullivan",
          authorImage: "https://randomuser.me/api/portraits/men/97.jpg",
          creationDate: "14 Aug",
          blogContent:
            "Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was outlived peculiar rendered led six.",
        };

        setBlogData(fetchedBlogData);
      } catch (error) {
        console.error("Error fetching blog content:", error);
      }
    };

    fetchBlogData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen admin-gradient-bg bg-cover bg-fixed bg-center">
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
              src={blogData && blogData.blogImage}
              className="absolute left-0 top-0 w-full h-full z-0 object-cover"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <a
                href="#"
                className="px-4 py-1 bg-black text-white inline-flex items-center justify-center mb-2"
              >
                {blogData && blogData.blogTag}
              </a>
              <h2 className="text-4xl font-semibold text-white leading-tight">
                {blogData && blogData.blogTitle}
              </h2>
              <div className="flex mt-3">
                <img
                  src={blogData && blogData.authorImage}
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-semibold text-white text-sm">
                    {blogData && blogData.authorName}
                  </p>
                  <p className="font-semibold text-white text-xs">
                    {blogData && blogData.creationDate}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {admin && (<BlogEditButtons blogContent={blogData}/>)}

          <div className="px-4 mt-12 text-white mx-auto text-lg leading-relaxed pb-6">
            {blogData && blogData.blogContent}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SingleBlogPage;
