export const createBlog = async (req, res, next) => {
    try {
        //response data functionalities

        return res.status(200).send("Executed");
    } catch (err) {
      next(err);
    }
  };