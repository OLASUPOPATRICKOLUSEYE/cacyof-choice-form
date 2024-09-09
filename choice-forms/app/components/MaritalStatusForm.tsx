// MaritalStatusForm.tsx

import React from 'react';
import { MaritalStatus } from '../types/types';

interface MaritalStatusFormProps {
  data: MaritalStatus;
  setData: (data: MaritalStatus) => void;
  prevStep: () => void;
}

const MaritalStatusForm: React.FC<MaritalStatusFormProps> = ({ data, setData, prevStep }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white w-full max-w-6xl mx-auto rounded-md text-black p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-6">Marital Status</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <label htmlFor="relationshipStatus" className="block font-semibold mb-1">Are you engaged in a relationship?</label>
            <select
              id="relationshipStatus"
              value={data.relationshipStatus}
              onChange={(e) => setData({ ...data, relationshipStatus: e.target.value as 'yes' | 'no' })}
              className="border p-2 rounded w-full"
              required
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          {data.relationshipStatus === 'yes' && (
            <>
              <div>
                <label htmlFor="partnerName" className="block font-semibold mb-1">Name of Partner</label>
                <input
                  type="text"
                  id="partnerName"
                  value={data.partnerName}
                  onChange={(e) => setData({ ...data, partnerName: e.target.value })}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="partnerAddress" className="block font-semibold mb-1">Partner's Address</label>
                <input
                  type="text"
                  id="partnerAddress"
                  value={data.partnerAddress}
                  onChange={(e) => setData({ ...data, partnerAddress: e.target.value })}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="engagementDate" className="block font-semibold mb-1">Since When?</label>
                <input
                  type="date"
                  id="engagementDate"
                  value={data.engagementDate}
                  onChange={(e) => setData({ ...data, engagementDate: e.target.value })}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>
            </>
          )}
          <div>
            <label htmlFor="plansToEngage" className="block font-semibold mb-1">Do you have plans to engage soon?</label>
            <select
              id="plansToEngage"
              value={data.plansToEngage}
              onChange={(e) => setData({ ...data, plansToEngage: e.target.value as 'yes' | 'no' })}
              className="border p-2 rounded w-full"
              required
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="previousRelationship" className="block font-semibold mb-1">Have you been in a relationship before?</label>
            <select
              id="previousRelationship"
              value={data.previousRelationship}
              onChange={(e) => setData({ ...data, previousRelationship: e.target.value as 'yes' | 'no' })}
              className="border p-2 rounded w-full"
              required
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-span-full flex justify-between mt-4 gap-5">
            <button type="button" onClick={prevStep} className="bg-gray-500 w-full text-white p-2 rounded">
              Previous
            </button>
            <button type="submit" className="bg-blue-900 text-white w-full p-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MaritalStatusForm;
