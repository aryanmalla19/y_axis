import React from 'react';
import WorkForm from '../components/WorkForm';
import ThreeButtonSearch from '../components/ui/ThreeButtonSearch';
import FourDivider from '../components/ui/FourDivider';
import TwoContainerWithPicture from '../components/ui/TwoContainerWithPicture';

function Work() {
  const jobData = [
    { name: "Jobs in USA", link: "www.example.com" },
    { name: "Jobs in UK", link: "www.example.com" },
    { name: "Jobs in Canada", link: "www.example.com" },
    { name: "Jobs in Australia", link: "www.example.com" },
    { name: "Jobs in Germany", link: "www.example.com" },
    { name: "Jobs in France", link: "www.example.com" },
  ];
  const buttonData = [
    {
      btnText: "Sign Up Now",
      color: "bg-red-500",
      link: "https://example.com/learn-more"
    },
    {
      btnText: "View Sample Career Strategy Report",
      link: "https://example.com/get-started"
    }
  ];



  const renderCountryDividers = () => (
    <div className="my-6 flex justify-around">
      {Array(4).fill().map((_, index) => (
        <FourDivider key={index} title="By Country" data={jobData} />
      ))}
    </div>
  );

  return (
    <div className="container font-roboto mx-auto">
      {/* Work Form Section */}
      <WorkForm />

      {/* Search Section */}
      <ThreeButtonSearch
        title="Work Opportunity"
        btnText="Find Salary"
        color="bg-gray-200"
        colorText='text-black'
      />

      {/* Country Dividers */}
      {renderCountryDividers()}

      {/* Second Search Section */}
      <ThreeButtonSearch
        title="What Are You Worth"
        desc="Select a preferred profession and discover the average salary range across various countries."
        btnText="Find Salary"
        color="bg-blue-500"
        colorText='text-white'
      />

      {/* Two Container Sections */}
      <TwoContainerWithPicture
        title="Work Abroad"
        colorText="text-white"
        bgColor="bg-blue-500"
        desc="Top countries to work"
        url="https://www.y-axis.ae/assets/cms/2023-08/Work%20Abroad.webp"
        data={jobData}
      />

      <TwoContainerWithPicture
        title="Get Your Career Strategy"
        url="https://www.y-axis.ae/assets/cms/2023-08/Get%20your%20Career%20Strategy.webp"
        bulletPoints={jobData}
        buttonData={buttonData}
        flex='flex-row-reverse'
      />
      <TwoContainerWithPicture title='Build your suitable profile' bulletPoints={jobData} url='https://www.y-axis.ae/assets/cms/2023-08/Build%20your%20suitable%20profile.webp' buttonData={buttonData} />
    </div>
  );
}

export default Work;
