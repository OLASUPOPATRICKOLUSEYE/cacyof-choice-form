// Formpage.tsx
"use client"
import React, { useState } from 'react';
import PersonalDataForm from '../components/PersonalDataForm';
import AcademicStatusForm from '../components/AcademicStatusForm';
import CommitmentForm from '../components/CommitmentForm';
import MaritalStatusForm from '../components/MaritalStatusForm';
import { PersonalData, AcademicStatus, CommitmentToFellowship, MaritalStatus } from '../types/types';

const FormPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [personalData, setPersonalData] = useState<PersonalData>({ name: '', gender: '', dob: '', image: '', level: '', department: '', christDate: '', baptized: '', baptizedSince: '', churchAttending: '', parentsBornAgain: '', supportSteward: '', stayBack: '' });
  const [academicStatus, setAcademicStatus] = useState<AcademicStatus>({ otherCommitments: '', leadershipExperience: '', payTithes: '', cgp: '', outstandingCourses: '', copeWithFellowship: '', foreseeAbsence: '' });
  const [commitmentToFellowship, setCommitmentToFellowship] = useState<CommitmentToFellowship>({ joinDate: '', attendPrograms: '', readyToServe: '', commitmentHindrances: '', burdenForCACYOF: '' });
  const [maritalStatus, setMaritalStatus] = useState<MaritalStatus>({ relationshipStatus: '', partnerName: '', partnerAddress: '', engagementDate: '', plansToEngage: '', previousRelationship: '' });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className=" p-8">
      {step === 1 && (
        <PersonalDataForm data={personalData} setData={setPersonalData} nextStep={nextStep} />
      )}
      {step === 2 && (
        <AcademicStatusForm data={academicStatus} setData={setAcademicStatus} nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 3 && (
        <CommitmentForm data={commitmentToFellowship} setData={setCommitmentToFellowship} nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 4 && (
        <MaritalStatusForm data={maritalStatus} setData={setMaritalStatus} prevStep={prevStep} />
      )}
    </div>
  );
};

export default FormPage;
