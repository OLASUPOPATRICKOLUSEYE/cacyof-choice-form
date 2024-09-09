// AcademicStatusForm.tsx

import React from 'react';
import { AcademicStatus } from '../types/types';

interface AcademicStatusFormProps {
  data: AcademicStatus;
  setData: (data: AcademicStatus) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const AcademicStatusForm: React.FC<AcademicStatusFormProps> = ({ data, setData, nextStep, prevStep }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white w-full max-w-6xl mx-auto rounded-md text-black p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-6">Academic Status</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <label htmlFor="otherCommitments" className="block font-semibold mb-1">Are you involved in other commitments?</label>
            <select
              id="otherCommitments"
              value={data.otherCommitments}
              onChange={(e) => setData({ ...data, otherCommitments: e.target.value as 'yes' | 'no' })}
              className="border p-2 rounded w-full"
              required
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="leadershipExperience" className="block font-semibold mb-1">Do you have leadership experience?</label>
            <select
              id="leadershipExperience"
              value={data.leadershipExperience}
              onChange={(e) => setData({ ...data, leadershipExperience: e.target.value as 'yes' | 'no' })}
              className="border p-2 rounded w-full"
              required
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="payTithes" className="block font-semibold mb-1">Do you pay your tithes?</label>
            <select
              id="payTithes"
              value={data.payTithes}
              onChange={(e) => setData({ ...data, payTithes: e.target.value as 'yes' | 'no' })}
              className="border p-2 rounded w-full"
              required
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="cgp" className="block font-semibold mb-1">CGP</label>
            <input
              type="text"
              id="cgp"
              value={data.cgp}
              onChange={(e) => setData({ ...data, cgp: e.target.value })}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="outstandingCourses" className="block font-semibold mb-1">Do you have outstanding courses?</label>
            <select
              id="outstandingCourses"
              value={data.outstandingCourses}
              onChange={(e) => setData({ ...data, outstandingCourses: e.target.value as 'yes' | 'no' })}
              className="border p-2 rounded w-full"
              required
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="copeWithFellowship" className="block font-semibold mb-1">Can you cope with the demands of the fellowship?</label>
            <select
              id="copeWithFellowship"
              value={data.copeWithFellowship}
              onChange={(e) => setData({ ...data, copeWithFellowship: e.target.value as 'yes' | 'no' })}
              className="border p-2 rounded w-full"
              required
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="foreseeAbsence" className="block font-semibold mb-1">Do you foresee any absence from the campus soon?</label>
            <select
              id="foreseeAbsence"
              value={data.foreseeAbsence}
              onChange={(e) => setData({ ...data, foreseeAbsence: e.target.value as 'yes' | 'no' })}
              className="border p-2 rounded w-full"
              required
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
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

export default AcademicStatusForm;
