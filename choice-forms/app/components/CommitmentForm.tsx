// CommitmentForm.tsx

import React from 'react';
import { CommitmentToFellowship } from '../types/types';

interface CommitmentFormProps {
  data: CommitmentToFellowship;
  setData: (data: CommitmentToFellowship) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const CommitmentForm: React.FC<CommitmentFormProps> = ({ data, setData, nextStep, prevStep }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white w-full max-w-6xl mx-auto rounded-md text-black p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-6">Commitment to Fellowship</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 md:col-span-2">
            <label htmlFor="joinDate" className="block font-semibold mb-2">When did you join the fellowship?</label>
            <input
              type="date"
              id="joinDate"
              value={data.joinDate}
              onChange={(e) => setData({ ...data, joinDate: e.target.value })}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="attendPrograms" className="block font-semibold mb-1">Do you attend fellowship programs?</label>
            <select
              id="attendPrograms"
              value={data.attendPrograms}
              onChange={(e) => setData({ ...data, attendPrograms: e.target.value as 'yes' | 'no' })}
              className="border p-2 rounded w-full"
              required
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="readyToServe" className="block font-semibold mb-1">Are you ready to serve in any capacity?</label>
            <select
              id="readyToServe"
              value={data.readyToServe}
              onChange={(e) => setData({ ...data, readyToServe: e.target.value as 'yes' | 'no' })}
              className="border p-2 rounded w-full"
              required
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="commitmentHindrances" className="block font-semibold mb-1">What can hinder your commitment?</label>
            <input
              type="text"
              id="commitmentHindrances"
              value={data.commitmentHindrances}
              onChange={(e) => setData({ ...data, commitmentHindrances: e.target.value })}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="burdenForCACYOF" className="block font-semibold mb-1">Do you have any burden for CACYOF?</label>
            <input
              type="text"
              id="burdenForCACYOF"
              value={data.burdenForCACYOF}
              onChange={(e) => setData({ ...data, burdenForCACYOF: e.target.value })}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div className="col-span-full flex justify-between mt-4 gap-5">
            <button type="button" onClick={prevStep} className="bg-gray-500 text-white p-2 w-full rounded">
              Previous
            </button>
            <button type="button" onClick={nextStep} className="bg-blue-900 text-white w-full p-2 rounded">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommitmentForm;
