import React from 'react';
//import img1 from '../../../images/Projects/Jantrik Demo image.png';
import img2 from '../../../images/Projects/Fitness store demo image.png';
import img3 from '../../../images/Projects/Catering demo image.png';
import img4 from '../../../images/Projects/Doctors portal.png';
//import img5 from '../../../images/Projects/Convention center demo.png';
import img6 from '../../../images/Projects/car image.jpg';
import { Icon } from '@iconify/react';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section id='projects' className='bg-[#0f172a] pt-[128px]'>
            <div className='pb-[56px] text-center '>
                <h1 className='text-[36px] leading-[1.2] uppercase font-bold text-white mb-[20px]'>My Projects</h1>
                <div className='title-divider bg-primary bg-opacity-20 w-32 h-1.5 mx-auto rounded'>
                    <div className='circle bg-[#00ff89] border rounded-full w-1.5 h-full bg-opacity-100'></div>
                </div>
            </div>
            <div className='w-[95.7%] mx-auto grid grid-cols-3 justify-items-center gap-7'>
                <div className='project-card w-[362px] h-[326px] relative'>
                    <div className='img-area'>
                        <img src={img4} alt="" />
                        <div className='overlay overlayLeft'>
                            <div className='project-icon flex justify-between'>
                                <Link to='//doctors-portal-ab5c7.web.app/' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Live Site
                                        </span>
                                        <Icon icon="bi:eye" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                                <Link to='//github.com/Md-Hazrat-Alii/Doctors-portal-client' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Client Side
                                        </span>
                                        <Icon icon="logos:github" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                                <Link to='//github.com/Md-Hazrat-Alii/Doctors-portal-server' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Server Side
                                        </span>
                                        <Icon icon="akar-icons:github-fill" width="20" height="18" color='#0b1224' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 text-justify'>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium '>Doctors Portal</h5>
                        <p className='text-[#fafafa] text-[16px] leading-[1.6] font-normal'>A (full-stack & responsive) Doctors appointment taking and patient management website.</p>
                    </div>
                </div>

                <div className='project-card w-[362px] h-[326px] relative'>
                    <div className='img-area'>
                        <img src={img2} alt="" />
                        <div className='overlay overlayLeft'>
                            <div className='project-icon flex justify-between'>
                                <Link to='//gym-equipment-store.web.app/' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Live Site
                                        </span>
                                        <Icon icon="bi:eye" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                                <Link to='//github.com/Md-Hazrat-Alii/gym-equipment-client' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Client Side
                                        </span>
                                        <Icon icon="logos:github" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                                <Link to='//github.com/Md-Hazrat-Alii/gym-equipments-server' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Server Side
                                        </span>
                                        <Icon icon="akar-icons:github-fill" width="20" height="18" color='#0b1224' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 text-justify'>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium '>Fitness Store</h5>
                        <p className='text-[#fafafa] text-[16px] leading-[1.6] font-normal'>A (full-stack & responsive) gym equipment stocks management website for store and manage different items of gym equipment.</p>
                    </div>
                </div>
                <div className='project-card w-[362px] h-[326px] relative'>
                    <div className='img-area'>
                        <img src={img6} alt="" />
                        <div className='overlay overlayLeft'>
                            <div className='project-icon flex justify-evenly'>
                                <Link to='//rc-cars-1e083.web.app/' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Live Site
                                        </span>
                                        <Icon icon="bi:eye" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                                <Link to='//github.com/Md-Hazrat-Alii/racing-cars-client' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Client Side
                                        </span>
                                        <Icon icon="logos:github" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                                <Link to='//github.com/Md-Hazrat-Alii/racing-cars-server' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Client Side
                                        </span>
                                        <Icon icon="logos:github" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 text-justify'>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium '>
                            RC Cars Store</h5>
                        <p className='text-[#fafafa] text-[16px] leading-[1.6] font-normal'>A (full-stack & responsive) It is platform for resell cars. You can buy and sell your used cars here.</p>
                    </div>
                </div>



            </div>
        </section>
    );
};

export default Projects;