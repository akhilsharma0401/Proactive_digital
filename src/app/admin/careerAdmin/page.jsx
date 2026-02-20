"use client";
import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Plus, X } from "lucide-react";
import toast from "react-hot-toast";
import { axiosInstance } from "@/lib/axios";
import { FaRegEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { FiPlusCircle, } from "react-icons/fi";
const CareerAdmin = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [viewOpen, setViewOpen] = useState(false);
  const [viewData, setViewData] = useState(null);

  const handleView = (job) => {
    setViewData(job);
    setViewOpen(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/admin")
    }
  }, [])

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "",
    jobDesc: "",
    responsibilities: "",
    qualifications: "",
    status: "PUBLISHED", // default
  });



  const fetchJobs = async () => {
    try {
      setLoading(true);

      const res = await axiosInstance.get("/job?type=admin");

      if (!res?.data?.status) {
        toast.error(res?.data?.message || "Failed to fetch jobs");
        setJobs([]);
        return;
      }

      const rows = Array.isArray(res.data.data)
        ? res.data.data
        : [];

      setJobs(rows);

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchJobs();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleEdit = (job) => {
    setIsEdit(true);
    setEditId(job.id);

    setFormData({
      title: job.title,
      location: job.location,
      type: job.type,
      jobDesc: job.jobDesc,
      responsibilities: job.responsibilities,
      qualifications: job.qualifications,
      status: job.status || "DRAFT",
    });

    setOpen(true);
  };


  const handleSubmitJob = async () => {
    try {
      setLoading(true);

      let res;

      if (isEdit) {
        res = await axiosInstance.patch("/job/update", {
          id: editId,
          status: formData.status,
          ...formData,
        });
      }
      else {
        res = await axiosInstance.post("/job/create", formData);
      }

      if (!res?.data?.status) {
        toast.error(res?.data?.message || "Failed");
        return;
      }

      toast.success(isEdit ? "Job updated successfully" : "Job created successfully");

      setOpen(false);
      setIsEdit(false);
      setEditId(null);

      fetchJobs();

      setFormData({
        title: "",
        location: "",
        type: "",
        jobDesc: "",
        responsibilities: "",
        qualifications: "",
      });

    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (job) => {
    try {
      const updatedStatus =
        job.status === "DRAFT" ? "PUBLISHED" : "DRAFT";

      const res = await axiosInstance.patch("/job/update", {
        id: job.id,
        status: updatedStatus,
      });

      if (!res?.data?.status) {
        toast.error(res?.data?.message || "Failed to update status");
        return;
      }

      toast.success("Status updated");

      // Update UI instantly without refetch
      setJobs((prev) =>
        prev.map((item) =>
          item.id === job.id
            ? { ...item, status: updatedStatus }
            : item
        )
      );

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };


  return (
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          💼 View All Jobs
        </h1>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-md transition" onClick={() => setOpen(true)}>
          <FiPlusCircle size={18} />
          Add New Job
        </button>
      </div>

      {/* Table Wrapper with Scroll */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className=" overflow-x-auto">

          {/* Header Row */}
          <div className="min-w-[1200px] bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
            <div className="grid grid-cols-7 text-sm font-semibold px-6 py-4">
              <div>S.No.</div>
              <div>Title</div>
              <div>Location</div>
              <div>Type</div>
              <div>Job Description</div>
              <div>Status</div>
              <div>Action</div>
            </div>
          </div>


          {/* Empty State */}
          {jobs.length === 0 && (
            <div className="min-w-[1200px] py-16 text-center text-gray-500">
              No jobs found
            </div>
          )}

          {/* Example Row */}

          {jobs.length > 0 &&
            jobs.map((job, index) => (
              <div
                key={job.id}
                className="grid grid-cols-7 min-w-[1200px] px-6 py-4 border-b hover:bg-gray-50 transition items-center"
              >
                <div>{index + 1}</div>

                <div className="font-medium">{job.title}</div>

                <div>{job.location}</div>

                <div>{job.type}</div>

                <div className="truncate max-w-xs">
                  {job.jobDesc}
                </div>

                {/* Status */}
                <div>
                  <button
                    type="button"
                    onClick={() => handleToggleStatus(job)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition ${job.status === "PUBLISHED"
                      ? "bg-green-500 text-white"
                      : "bg-yellow-400 text-white"
                      }`}
                  >
                    {job.status}
                  </button>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <FaRegEdit
                    className="cursor-pointer text-blue-600 hover:text-blue-800"
                    onClick={() => handleEdit(job)}
                  />

                  <FaEye
                    className="cursor-pointer text-green-600 hover:text-green-800"
                    onClick={() => handleView(job)}
                  />
                </div>
              </div>
            ))}



        </div>
      </div>

      {/* {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 relative">

            <button
              onClick={() => {
                setOpen(false);
                setIsEdit(false);
                setEditId(null);
                setFormData({
                  title: "",
                  location: "",
                  type: "",
                  jobDesc: "",
                  responsibilities: "",
                  qualifications: "",
                });
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>


            <h2 className="text-xl font-semibold mb-4">
              Create New Job
            </h2>

            <div className="grid grid-cols-2 gap-4">

              <input
                name="title"
                placeholder="Job Title"
                value={formData.title}
                onChange={handleChange}
                className="border rounded-lg p-2"
              />

              <input
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="border rounded-lg p-2"
              />

              <input
                name="type"
                placeholder="Type (Full-Time)"
                value={formData.type}
                onChange={handleChange}
                className="border rounded-lg p-2 col-span-2"
              />

              <input
                name="jobDesc"
                placeholder="Job Description"
                value={formData.jobDesc}
                onChange={handleChange}
                className="border rounded-lg p-2 col-span-2"
              />

              <textarea
                name="responsibilities"
                placeholder="Responsibilities"
                value={formData.responsibilities}
                onChange={handleChange}
                className="border rounded-lg p-2 col-span-2"
              />


              <textarea
                name="qualifications"
                placeholder="Qualifications"
                value={formData.qualifications}
                onChange={handleChange}
                className="border rounded-lg p-2 col-span-2"
              />

              <span className="text-xs text-gray-500">If line starts with "-" List Show</span>


            </div>
            <div className="flex justify-center w-full">
              <button
                onClick={handleSubmitJob}
                disabled={loading}
                className="mt-6 px-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
              >
                {loading
                  ? isEdit
                    ? "Updating..."
                    : "Creating..."
                  : isEdit
                    ? "Update Job"
                    : "Create Job"}
              </button>
            </div>


          </div>
        </div>
      )} */}

      <Dialog
        header={isEdit ? "Update Job Details" : "Add Contact Details"}
        visible={open}
         draggable={false}
        onHide={() => {
          setOpen(false);
          setIsEdit(false);
          setFormData({
            title: "",
            location: "",
            type: "",
            jobDesc: "",
            responsibilities: "",
            qualifications: "",
            status: "PUBLISHED", // default
          });
        }
        }
        className="p-4 bg-white w-full md:w-200 flex flex-col gap-4  "
        modal
      >
        {/* <div className=" w-full p-0 relative"> */}

        {/* <h2 className="text-xl font-semibold mb-4">
            Create New Job
          </h2> */}

        <div className="grid grid-cols-2 gap-4">

          <input
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />

          <input
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />

          <input
            name="type"
            placeholder="Type (Full-Time)"
            value={formData.type}
            onChange={handleChange}
            className="border rounded-lg p-2 col-span-2"
          />

          <input
            name="jobDesc"
            placeholder="Job Description"
            value={formData.jobDesc}
            onChange={handleChange}
            className="border rounded-lg p-2 col-span-2"
          />

          <textarea
            name="responsibilities"
            placeholder="Responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            className="border rounded-lg p-2 col-span-2"
          />


          <textarea
            name="qualifications"
            placeholder="Qualifications"
            value={formData.qualifications}
            onChange={handleChange}
            className="border rounded-lg p-2 col-span-2"
          />

          <span className="text-xs text-gray-500">If line starts with "-" List Show</span>


        </div>

        <div className="flex justify-center w-full">
          <button
            onClick={handleSubmitJob}
            disabled={loading}
            className="mt-6 px-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            {loading
              ? isEdit
                ? "Updating..."
                : "Creating..."
              : isEdit
                ? "Update Job"
                : "Create Job"}
          </button>
        </div>


        {/* </div>  */}
      </Dialog>


      <Dialog
        header="Job Details"
        visible={viewOpen}
        onHide={() => setViewOpen(false)}
        className="p-4 bg-white w-full md:w-200"
         draggable={false}
        modal
      >
        {viewData && (
          <div className="space-y-4 p-4">
            <div>
              <h4 className=" font-bold text-xl mb-1">Responsibilities :</h4>
              {/* <p className="text-sm text-gray-600 border p-2 border-gray-200">{viewData.responsibilities}</p> */}
              <div className="text-sm text-gray-600 border p-3 border-gray-200 rounded space-y-2">
                {viewData.responsibilities?.split("\n").map((line, index) => {
                  const trimmed = line.trim();

                  if (!trimmed) return null;
                  if (trimmed.startsWith("-")) {
                    return (
                      <li key={index} className="ml-4 list-disc">
                        {trimmed.replace(/^-/, "").trim()}
                      </li>
                    );
                  }


                  return (
                    <p key={index}>
                      {trimmed}
                    </p>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-1">Qualifications :</h4>
              {/* <p className="text-sm text-gray-600 border p-2 border-gray-200">{viewData.qualifications}</p> */}
              <div className="text-sm text-gray-600 border p-3 border-gray-200 rounded space-y-2">
                {viewData.qualifications?.split("\n").map((line, index) => {
                  const trimmed = line.trim();

                  if (!trimmed) return null;
                  if (trimmed.startsWith("-")) {
                    return (
                      <li key={index} className="ml-4 list-disc">
                        {trimmed.replace(/^-/, "").trim()}
                      </li>
                    );
                  }
                  return (
                    <p key={index}>
                      {trimmed}
                    </p>
                  );
                })}
              </div>
            </div>

          </div>
        )}
      </Dialog>

    </div >
  );
};

export default CareerAdmin;
