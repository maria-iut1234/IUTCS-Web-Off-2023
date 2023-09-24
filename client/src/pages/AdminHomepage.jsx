import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import Image from '../assets/default.png'
import { TypeAnimation } from 'react-type-animation'

const AdminHomepage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen admin-gradient-bg bg-cover bg-fixed bg-center">
        <AdminNavbar />
        <section className='min-h-[45vh] items-center lg: min-h-[30vh]  flex:items-center' id='home'>
          <div className='container mx-auto'>
            <div className='flex w-screen max-w-[150vh] flex-col items-center gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
              {/*text goes here*/}
              <div className='flex-1 text-center text-white lg:text-left'>
                <h1 className='text-[55px] text-[#02e1dc] mt-6 font-bold leading-[1] min-h-[80px] lg: text-[48px]'>
                  IUT <span >Computer Society</span>
                </h1>
                <div className='mb-6 text-[48px] lg:text-[36px] leading-[0.5]'>
                  <span className='mr-4 text-white'>Welcome</span>
                  <TypeAnimation sequence={[
                    'Admin',
                    2000,
                    'Lets Begin',
                    2000,
                  ]}
                    speed={70}
                    className='text-[#02e1dc]'
                    wrapper='span'
                    repeat={Infinity}
                  />
                </div>
                <h1 className='text-[28px] font-bold mb-4  lg: text-[28px] text-[#02e1dc]'>
                  A Little <span>About Us</span>
                </h1>
                <p className='text-[18px] lg:text-[18px]'>
                  IUTCS, a platform for young computer engineers to exercise their intellectuality. IUTCS was founded in 2008 through the hands of some enthusiastic computer engineers. Since then, it has grown from a handful of members who also participate with us in activities such as workshops, programming classes, seminars, contests, application development classes, co-curricular aid and projects etc.
                </p>
              </div>
              <div className='hidden lg:flex flex-1 max-w-[420px] lg:max-w-[420px] mx-auto'>
                <div className='rounded-full overflow-hidden h-[200px] w-[200px]'>
                  <img src={Image} alt='IUTCS' className='h-full w-full object-cover' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
};

export default AdminHomepage;
