import { useState } from 'react';



const FAQAccordion = () => {

    const faqs = [
        {
          question: 'How do I create an account on your job finder website?',
          answer:
            'Creating an account is easy! Simply click on the account link create an account by clicking "Sign Up" button at the top right corner of the page and follow the instructions to register with your email address.',
        },
        {
          question: 'Can I search for jobs without creating an account?',
          answer:
            'Yes, you can browse and search for jobs without creating an account. However, you will need to create an account to apply for jobs and save your job searches.',
        },
        {
          question: 'How do I apply for a job?',
          answer:
            'Once you find a job you are interested in, simply click on the "Apply Now" button and follow the application instructions provided by the employer.',
        },
        {
          question: 'Are the job listings on your website updated regularly?',
          answer:
            'Yes, we strive to keep our job listings up to date. We regularly monitor and update our database to ensure that you have access to the latest job opportunities.',
        },
        {
          question: 'Can I receive job alerts for new job postings?',
          answer:
            'Absolutely! You can subscribe to job alerts by providing your email address and specifying your job preferences. We will then send you notifications whenever new job postings match your criteria.',
        },
        {
          question: 'How can I contact employers or recruiters?',
          answer:
            'You can usually find contact information for employers or recruiters within the job listing. If not, you can reach out to them through our messaging system or by using the contact information provided on their company website.',
        },
        // Add more FAQ objects as needed
      ];
      
      
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <div className="w-full bg-zinc-800 space-y-3 p-7 rounded-lg pt-5 mx-auto">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-gray-300 py-4"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between  items-center w-full text-left"
          >
            <p className="text plus  font-semibold">{faq.question}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform transform ${
                activeIndex === index ? 'rotate-180' : 'rotate-0'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  activeIndex === index
                    ? 'M19 9l-7 7-7-7'
                    : 'M5 15l7-7 7 7'
                }
              />
            </svg>
          </button>
          {activeIndex === index && (
            <p className="mt-4 text-zinc-500 plus text-sm">{faq.answer}</p>
          )}
        </div>
      ))}
    
   
    </div>
  );
};

export default FAQAccordion;
