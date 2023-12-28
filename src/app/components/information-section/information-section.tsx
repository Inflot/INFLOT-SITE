import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SlAnchor } from 'react-icons/sl';
import './information-section.css';

export default function InformationSection() {
  return (
    <section className='bg-[#B6C6D0] py-10'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row  md:justify-between md:items-stretch'>
          <div className='flex flex-col mb-6 p-6 bg-gray-100 m-2 rounded-md shadow-xl wow animate__animated animate__fadeInDown animate__faster'>
            <h2 className='text-xl md:text-2xl font-bold text-gray-700 mb-4 text-center'>
              Our Services
            </h2>
            <ul className='space-y-2 pl-5 text-gray-600'>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' /> International Freight Forwarding
              </li>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' /> Customs Clearance and Brokerage
              </li>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' /> Cargo Insurance Services
              </li>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' /> Warehousing and Distribution
              </li>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' /> Container Loading and Unloading
              </li>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' /> Project Cargo and Heavy Lift
              </li>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' /> Port Operations and Stevedoring
              </li>
            </ul>
          </div>

          <div className='flex flex-col mb-6  p-6 bg-gray-100 m-2 rounded-md shadow-xl wow animate__animated animate__fadeInDown animate__fast'>
            <h2 className='text-xl md:text-2xl font-bold text-gray-700 mb-4 text-center'>
              Custom Solutions
            </h2>
            <ul className='space-y-2 pl-5 text-gray-600'>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' /> Timely and Reliable Worldwide
                Tailored route planning to optimize transit times and costs
              </li>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' />
                Customized packaging and handling for sensitive or
                irregular-sized cargo
              </li>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' />
                Personalized cargo consolidation services to maximize efficiency
              </li>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' />
                Flexible scheduling to accommodate urgent shipping requirements
              </li>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' />
                Bespoke warehousing solutions, including temperature-controlled
                storage
              </li>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' />
                End-to-end project logistics for oversized or complex shipments
              </li>
            </ul>
          </div>

          <div className='flex flex-col mb-6 p-6 bg-gray-100 m-2 rounded-md shadow-xl wow animate__animated animate__fadeInDown'>
            <h2 className='text-xl md:text-2xl font-bold text-gray-700 mb-4 text-center'>
              Key Benefits
            </h2>
            <ul className='space-y-2 pl-5 text-gray-600'>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' /> Timely and Reliable Worldwide
                Shipping
              </li>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' />
                Cost-Efficient Logistics Solutions
              </li>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' />
                State-of-the-Art Tracking and Security
              </li>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' />
                Customized Service Options for All Cargo Types
              </li>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' />
                Expert Handling of Documentation and Compliance
              </li>
              <li className='flex items-center'>
                <SlAnchor className='mr-2' />
                Dedicated Customer Support Team
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
