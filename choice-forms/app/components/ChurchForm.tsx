"use client";
import React, { useState } from "react";

const ChurchForm = () => {
  const [step, setStep] = useState(1); // Track current step
  const [formData, setFormData] = useState({
    surname: "",
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    image: null,
    level: "",
    department: "",
    lifeToChrist: "",
    baptizedInHolySpirit: "",
    baptismDate: "",
    homeChurch: "",
    parentsBornAgain: "",
    parentsSupport: "",
    affordStay: "",
    otherCommitments: "",
    leadershipExperience: "",
    tithes: "",
    cgp: "",
    outstandingCourses: "",
    copeWithDemands: "",
    foreseeAbsence: "",
    politicalOffice: "",
    politicalDetails: "",
    politicalAmbition: "",
    joinFellowshipDate: "",
    attendPrograms: "",
    fellowshipUnits: "",
    readyToServe: "",
    commitmentHindrances: "",
    burdenForCACYOF: "",
    engagedInRelationship: "",
    relationshipSince: "",
    partnerName: "",
    partnerAddress: "",
    planToEngage: "",
    pastRelationships: "",
  });

  // Function to handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle next and previous steps
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Here you can handle the form submission, e.g., send data to an API
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-900 backdrop-invert transparent opacity-100 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-yellow-500">Church Registration Form</h2>

      {/* Mobile View Step Indicator */}
      {window.innerWidth < 768 && (
        <div className="text-center mb-4 text-yellow-500">Step {step} of 4</div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Personal Data Section */}
        {(step === 1 || window.innerWidth >= 768) && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Personal Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-white">Name (Surname):</label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 text-white">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Last Name (Optional):</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Gender:</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Unisex">Unisex</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-white">Date of Birth:</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Image:</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Level:</label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select</option>
                  <option value="ND1">ND1</option>
                  <option value="ND2">ND2</option>
                  <option value="HND1">HND1</option>
                  <option value="HND2">HND2</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-white">Department in School:</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select</option>
                  <option value="ACCOUNTANCY">ACCOUNTANCY</option>
                  <option value="AGRICULTURAL TECHNOLOGY">
                    AGRICULTURAL TECHNOLOGY
                  </option>
                  {/* Add more department options here */}
                </select>
              </div>
              <div>
                <label className="block mb-1 text-white">
                  When do you give your life to Christ?
                </label>
                <input
                  type="date"
                  name="lifeToChrist"
                  value={formData.lifeToChrist}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 text-white">
                  Are you baptized in the Holy Spirit?
                </label>
                <select
                  name="baptizedInHolySpirit"
                  value={formData.baptizedInHolySpirit}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-white">
                  If Yes, Since When? (If No, leave empty)
                </label>
                <input
                  type="date"
                  name="baptismDate"
                  value={formData.baptismDate}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Which church do you attend at home?</label>
                <input
                  type="text"
                  name="homeChurch"
                  value={formData.homeChurch}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Are your parents/guardians born again?</label>
                <select
                  name="parentsBornAgain"
                  value={formData.parentsBornAgain}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-white">
                  Will they support if you are a steward in your fellowship?
                </label>
                <select
                  name="parentsSupport"
                  value={formData.parentsSupport}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-white">
                  Can you afford to stay back during the break?
                </label>
                <select
                  name="affordStay"
                  value={formData.affordStay}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Academic Status Section */}
        {(step === 2 || window.innerWidth >= 768) && (
          <div>
            <h3 className="text-xl font-semibold mb-4 mt-4 text-white">Academic Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-white">Are you involved in other commitments?</label>
                <input
                  type="text"
                  name="otherCommitments"
                  value={formData.otherCommitments}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Do you have leadership experience?</label>
                <input
                  type="text"
                  name="leadershipExperience"
                  value={formData.leadershipExperience}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Do you pay your tithes?</label>
                <select
                  name="tithes"
                  value={formData.tithes}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-white">CGP:</label>
                <input
                  type="text"
                  name="cgp"
                  value={formData.cgp}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Do you have outstanding courses?</label>
                <input
                  type="text"
                  name="outstandingCourses"
                  value={formData.outstandingCourses}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Can you cope with the demands of the fellowship?</label>
                <select
                  name="copeWithDemands"
                  value={formData.copeWithDemands}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-white">Do you foresee any absence from the campus soon?</label>
                <select
                  name="foreseeAbsence"
                  value={formData.foreseeAbsence}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Commitment to Fellowship Section */}
        {(step === 3 || window.innerWidth >= 768) && (
          <div>
            <h3 className="text-xl font-semibold mb-4 mt-4 text-white">Commitment to Fellowship</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-white">When did you join the fellowship?</label>
                <input
                  type="date"
                  name="joinFellowshipDate"
                  value={formData.joinFellowshipDate}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Do you attend fellowship programs?</label>
                <select
                  name="attendPrograms"
                  value={formData.attendPrograms}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-white">Which units do you belong to in the fellowship?</label>
                <input
                  type="text"
                  name="fellowshipUnits"
                  value={formData.fellowshipUnits}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Are you ready to serve in any capacity?</label>
                <select
                  name="readyToServe"
                  value={formData.readyToServe}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-white">What can hinder your commitment?</label>
                <input
                  type="text"
                  name="commitmentHindrances"
                  value={formData.commitmentHindrances}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Do you have any burden for CACYOF?</label>
                <input
                  type="text"
                  name="burdenForCACYOF"
                  value={formData.burdenForCACYOF}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>
        )}

        {/* Marital Status Section */}
        {(step === 4 || window.innerWidth >= 768) && (
          <div>
            <h3 className="text-xl font-semibold mb-4 mt-4 text-white">Marital Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-white">Are you engaged in a relationship?</label>
                <select
                  name="engagedInRelationship"
                  value={formData.engagedInRelationship}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-white">Since when? (If not, leave empty)</label>
                <input
                  type="date"
                  name="relationshipSince"
                  value={formData.relationshipSince}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Name of Partner (If engaged):</label>
                <input
                  type="text"
                  name="partnerName"
                  value={formData.partnerName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Partner's Address (If engaged):</label>
                <input
                  type="text"
                  name="partnerAddress"
                  value={formData.partnerAddress}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 text-white">Do you have plans to engage soon?</label>
                <select
                  name="planToEngage"
                  value={formData.planToEngage}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-white">Have you been in a relationship before?</label>
                <select
                  name="pastRelationships"
                  value={formData.pastRelationships}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Previous
            </button>
          )}
          {step < 4 && (
            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Next
            </button>
          )}
          {step === 4 && (
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ChurchForm;
