import React from 'react'
import Image from '../assets/IUTCS_logo_transparent_light.png'
import { TypeAnimation } from 'react-type-animation'

const AboutUsBanner = ({admin}) => {
    const textColor = admin? "[#02e1dc]" : "[#FCCD0D]"
    return (
        <>
            <div className='min-h-[45vh] items-center lg: min-h-[30vh]  flex:items-center pt-6'>
                <div className='container mx-auto'>
                    <div className='flex w-screen max-w-[90vw] flex-col items-center gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                        {/*text goes here*/}
                        <div className='flex-1 text-center text-white lg:text-left'>
                            <h1 className={`text-[55px] text-${textColor} mt-6 font-bold leading-[1] min-h-[80px] lg: text-[48px]`}>
                                IUT <span >Computer Society</span>
                            </h1>
                            <div className='my-6 text-[48px] lg:text-[36px] md:leading-[0.5] leading-[1]'>
                                <span className='mr-4 text-white'>Join us and</span>
                                <TypeAnimation sequence={[
                                    'Innovate',
                                    2000,
                                    'Unite',
                                    2000,
                                    'Thrive',
                                    2000,
                                    'Collaborate',
                                    2000,
                                    'Succeed',
                                    2000,
                                ]}
                                    speed={70}
                                    className={`text-${textColor}`}
                                    wrapper='span'
                                    repeat={Infinity}
                                />
                            </div>

                        </div>
                        {/*image goes here*/}
                        <div className='hidden lg:flex flex-1 max-w-[420px] lg: max-w-[420px] mx-auto'>
                            <img src={Image} alt='IUTCS' />
                        </div>

                    </div>
                    <div className='my-8 md:mx-0 mx-8'>
                        <h1 className={`text-[28px] font-bold my-6 lg: text-3xl text-${textColor}`}>
                            A Little <span>About Us</span>
                        </h1>
                        <p className='text-[18px] lg:text-[18px] text-[#f4f2f0]'>
                            IUTCS, a platform for young computer engineers to exercise their intellectuality. IUTCS was founded in 2008 through the hands of some enthusiastic computer engineers. Since then, it has grown from a handful of members who also participate with us in activities such as workshops, programming classes, seminars, contests, application development classes, co-curricular aid and projects etc.
                        </p></div>
                </div>
            </div>
        </>
    )
}

export default AboutUsBanner
