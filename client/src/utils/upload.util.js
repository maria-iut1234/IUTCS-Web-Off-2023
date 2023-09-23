import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "1s6VakcQILTtH50MjDAFRZUqDt8");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dlu0wvh6a/iutcs",
      data,
    );

    const { url } = res.data;
    return url;
  } 
  catch (err) {
    console.error(err.data);
  }
};

export default upload;