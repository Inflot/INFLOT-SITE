import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SlAnchor } from 'react-icons/sl';
import './information-section.css';

export default function InformationSection() {
  return (
    <section className=' hidden bg-[#B6C6D0] py-10'>
      <div className='max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10'>
          <div
            data-aos='fade-down'
            data-aos-duration='1000'
            className='rounded-lg bg-white flex flex-col justify-between leading-normal'
          >
            <h2 className='text-xl md:text-2xl font-bold text-gray-700 my-4 text-center'>
              Our Services
            </h2>
            <Image
              className='rounded-lg object-cover rounded-md stormy-ocean-effect mx-auto w-3/4 sm:w-1/2 md:w-52'
              src='/images/info/service.jpg'
              width={200}
              height={200}
              alt='service'
            />
            <div className='p-4 pt-2'>
              <div className='mb-8'>
                <ul className='space-y-2 pl-5 text-gray-600'>
                  <li className='flex items-center'>
                    <SlAnchor className='mr-2' /> International Freight
                    Forwarding
                  </li>
                  <li className='flex items-center'>
                    <SlAnchor className='mr-2' /> Customs Clearance and
                    Brokerage
                  </li>
                  <li className='flex items-center'>
                    <SlAnchor className='mr-2' /> Cargo Insurance Services
                  </li>
                  <li className='flex items-center'>
                    <SlAnchor className='mr-2' /> Warehousing and Distribution
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            data-aos='fade-down'
            data-aos-delay='500'
            data-aos-duration='1000'
            className='rounded-lg bg-white flex flex-col justify-between leading-normal'
          >
            <h2 className='text-xl md:text-2xl font-bold text-gray-700 my-4 text-center'>
              Custom Solutions
            </h2>
            <Image
              className='rounded-lg object-cover rounded-md stormy-ocean-effect mx-auto w-3/4 sm:w-1/2 md:w-52'
              src='/images/info/solutions.png'
              width={200}
              height={200}
              alt='solutions'
            />
            <div className='p-4 pt-2'>
              <div className='mb-8'>
                <ul className='space-y-2 pl-5 text-gray-600'>
                  <li className='flex items-center'>
                    <SlAnchor className='mr-2' />
                    Timely and Reliable Worldwide Tailored route planning
                  </li>
                  <li className='flex items-center'>
                    <SlAnchor className='mr-2' />
                    Customized packaging and handling
                  </li>
                  <li className='flex items-center'>
                    <SlAnchor className='mr-2' />
                    Personalized cargo consolidation services
                  </li>
                  <li className='flex items-center'>
                    <SlAnchor className='mr-2' />
                    Flexible scheduling
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            data-aos='fade-down'
            data-aos-delay='1000'
            data-aos-duration='1000'
            className='rounded-lg bg-white flex flex-col justify-between leading-normal'
          >
            <h2 className='text-xl md:text-2xl font-bold text-gray-700 my-4 text-center'>
              Our Benefits
            </h2>
            <Image
              className='rounded-lg object-cover rounded-md stormy-ocean-effect mx-auto w-3/4 sm:w-1/2 md:w-52'
              src='/images/info/benefits.png'
              width={200}
              height={200}
              alt='benefits'
            />
            <div className='p-4 pt-2'>
              <div className='mb-8'>
                <ul className='space-y-2 pl-5 text-gray-600'>
                  <li className='flex items-center'>
                    <SlAnchor className='mr-2' /> International Freight
                    Forwarding
                  </li>
                  <li className='flex items-center'>
                    <SlAnchor className='mr-2' /> Customs Clearance and
                    Brokerage
                  </li>
                  <li className='flex items-center'>
                    <SlAnchor className='mr-2' /> Cargo Insurance Services
                  </li>
                  <li className='flex items-center'>
                    <SlAnchor className='mr-2' /> Warehousing and Distribution
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
