import jobPosting from "../models/devjobs.js";

export const getJobs = async (req, res) => {
  const { size, page } = req.params; // Extract size and page from request parameters

  try {
    console.log("tried someything");
    const data = await jobPosting
      .find()
      .skip(size * (page - 1)) // Skip past documents that aren't on the current page
      .limit(Number(size)); // Limit the results to the size (amount per page)

    return res.status(200).json(data);
  } catch (error) {
    console.error(error); // This will log the error details in your console
    return res
      .status(500)
      .json({ message: "An error occurred while retrieving jobs." });
  }
};

// import jobPosting from "../models/devjobs.js";

// export const getJobs = async (req, res) => {
//   try {
//     console.log("tried");
//     const { page = 1, size = 10 } = req.params;
//     const limit = parseInt(size);
//     const skip = (parseInt(page) - 1) * limit;
//     const jobPostings = await jobPosting.find().skip(skip).limit(limit);
//     res.status(200).json(jobPostings);
//   } catch (error) {
//     res.status(500).json({
//       error: "An error occurred while retrieving the job postings.",
//     });
//   }
// };
