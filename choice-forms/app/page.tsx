// page.tsx
import Image from "next/image";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import ChurchForm from "./components/ChurchForm";
import MultiStepForm from "./components/MultiStepForm";


export default function Home() {
  return (
    <form className="">
      {/* <ChurchForm /> */}
      <MultiStepForm />
    </form>
  )
}
