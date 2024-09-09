// PersonalDataForm.tsx

import React, { useState } from 'react';
import { PersonalData } from '../types/types';

interface PersonalDataFormProps {
  data: PersonalData;
  setData: (data: PersonalData) => void;
  nextStep: () => void;
}

const PersonalDataForm: React.FC<PersonalDataFormProps> = ({ data, setData, nextStep }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        if (data[key] instanceof File) {
          formData.append(key, data[key]);
        } else {
          formData.append(key, data[key]);
        }
      });

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      setSuccess(true);
      setData({} as PersonalData); // Clear form data if necessary
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white w-full max-w-6xl mx-auto rounded-md text-black p-8 shadow-md">
        {success ? (
          <div className="text-center text-green-500 font-semibold">
            <h2 className="text-2xl">Congratulations</h2>
            <p>We shall reach out to you as soon as possible.</p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-6">Personal Data</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" onSubmit={handleSubmit}>
              <label className="flex flex-col">
                Name (Surname)
                <input
                  type="text"
                  placeholder="Enter your Surname"
                  value={data.surname}
                  onChange={(e) => setData({ ...data, surname: e.target.value })}
                  className="border p-2 rounded"
                  required
                />
              </label>
              <label className="flex flex-col">
                First Name
                <input
                  type="text"
                  placeholder="Enter your First Name"
                  value={data.firstName}
                  onChange={(e) => setData({ ...data, firstName: e.target.value })}
                  className="border p-2 rounded"
                  required
                />
              </label>
              <label className="flex flex-col">
                Last Name (Optional)
                <input
                  type="text"
                  placeholder="Enter your Last Name"
                  value={data.lastName || ''}
                  onChange={(e) => setData({ ...data, lastName: e.target.value })}
                  className="border p-2 rounded"
                />
              </label>
              <label className="flex flex-col">
                Gender
                <select
                  value={data.gender}
                  onChange={(e) => setData({ ...data, gender: e.target.value as 'male' | 'female' })}
                  className="border p-2 rounded"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
              <label className="flex flex-col">
                Date of Birth
                <input
                  type="date"
                  value={data.dob}
                  onChange={(e) => setData({ ...data, dob: e.target.value })}
                  className="border p-2 rounded"
                  required
                />
              </label>
              <label className="flex flex-col">
                Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setData({ ...data, image: e.target.files?.[0] })}
                  className="border p-2 rounded"
                />
              </label>
              <label className="flex flex-col">
                Level
                <input
                  type="text"
                  placeholder="Enter your Level"
                  value={data.level}
                  onChange={(e) => setData({ ...data, level: e.target.value })}
                  className="border p-2 rounded"
                  required
                />
              </label>
              <label className="flex flex-col">
                Department in School
                <input
                  type="text"
                  placeholder="Enter your Department in School"
                  value={data.department}
                  onChange={(e) => setData({ ...data, department: e.target.value })}
                  className="border p-2 rounded"
                  required
                />
              </label>
              <label className="flex flex-col">
                When did you give your life to Christ?
                <input
                  type="date"
                  value={data.christDate}
                  onChange={(e) => setData({ ...data, christDate: e.target.value })}
                  className="border p-2 rounded"
                  required
                />
              </label>
              <label className="flex flex-col">
                Are you baptized in the Holy Spirit?
                <select
                  value={data.baptized}
                  onChange={(e) => setData({ ...data, baptized: e.target.value as 'yes' | 'no' })}
                  className="border p-2 rounded"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
              <label className="flex flex-col">
                If Yes, Since When?
                <input
                  type="date"
                  value={data.baptizedDate || ''}
                  onChange={(e) => setData({ ...data, baptizedDate: e.target.value })}
                  className="border p-2 rounded"
                />
              </label>
              <label className="flex flex-col">
                Which church do you attend at home?
                <input
                  type="text"
                  placeholder="Enter your Church at Home"
                  value={data.homeChurch}
                  onChange={(e) => setData({ ...data, homeChurch: e.target.value })}
                  className="border p-2 rounded"
                  required
                />
              </label>
              <label className="flex flex-col">
                Are your parents/guardians born again?
                <select
                  value={data.parentsBornAgain}
                  onChange={(e) => setData({ ...data, parentsBornAgain: e.target.value as 'yes' | 'no' })}
                  className="border p-2 rounded"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
              <label className="flex flex-col">
                Will they support if you are a steward in your fellowship?
                <select
                  value={data.parentsSupport}
                  onChange={(e) => setData({ ...data, parentsSupport: e.target.value as 'yes' | 'no' })}
                  className="border p-2 rounded"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
              <label className="flex flex-col">
                Can you afford to stay back during the break?
                <select
                  value={data.stayBack}
                  onChange={(e) => setData({ ...data, stayBack: e.target.value as 'yes' | 'no' })}
                  className="border p-2 rounded"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
              <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end mt-4">
                <button type="button" onClick={nextStep} className="bg-blue-900 w-full text-white p-2 rounded">
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalDataForm;
