import React, { useState } from "react";
import logo from "./Images/logo-header.svg"
import image from "./Images/cute-3d-robot-say-hello-png-removebg-preview.png"
import project1 from "./Images/portfolio-1-img.jpg"
import CV from "./files/Tayyab_Nazir_CV.pdf"

export default function LandingPage()
{
    const [index, setIndex] = useState(1);
    const [clicked, setClick] = useState(false)
    
    function PrevSlide()
    {
        const IsFristSlide = index === 0;
        const newIndex = IsFristSlide ? Slides.length-1 : index - 1;
        setIndex(newIndex);
    }

    function NextSlide()
    {
        const IsLastSlide = index === Slides.length - 1;
        const newIndex = IsLastSlide ? 0 : index + 1;
        setIndex(newIndex);
    }

    const CarouselItem = ({Uname, imagePath}) =>{
        return(
            <div class="relative grid grid-cols-2 grid-rows-3 items-center content-center justify-center text-white rounded-2xl max-w-xl grid-flow-row md:grid-flow-col">
                    <div class="row-span-3">
                    <div class="absolute rounded-3xl p-28 px-28 -rotate-6 text-center bg-[#222831] overflow-x-clip">abc</div>
                        <img src={imagePath} class="-rotate-12 w-56 h-62 border rounded-3xl"></img>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                            <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/>
                        </svg>
                    </div>
                    <div class="font-bold font-[38px]">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!</div>
                    <div class="text-[#64f4ab] font-semibold">{Uname}</div>
                </div>
        );
    }

    const Slides = [
        <CarouselItem Uname={"Jarred Walter"} imagePath={image} />,
        <CarouselItem Uname={"Amman Payne"} imagePath={image} />
    ]

    function menu(e)
    {
        let list = document.querySelector('ul');
        clicked ? (list.classList.add('top-[80px]', list.classList.add('opacity-100'))) : (list.classList.remove('top-[80px]', list.classList.remove('opacity-100')))
    }

    return(
        <>
        <div className="bg-[#25262a] container-xl font-sans">
            <nav class="bg-[#25262a] p-2 md:flex md:items-center md:justify-between p-4">
                <div class="flex justify-between items-center">
                    <span>
                        <img src={logo} class="h-10" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </span>

                    <span class="mx-2 md:hidden block" onClick={()=>{menu(this); setClick(clicked)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" name="menu" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </span>
                </div>

                <ul class="items-center md:flex md:item-center z-[1] md:z-auto md:static absolute text-white bg-[#25262a] w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400] transition-all ease-in-out duration-500"> 
                    <li class="border-b border-[#25262a] mx-4 my-6 md:my-0">
                        <a href="#" class="hover:border-b-2 border-transparent hover:border-white hover:font-bold">Home</a>
                    </li>
                    <li class="border-b border-[#25262a] mx-4 my-6 md:my-0">
                        <a href="#" class="hover:border-b-2 border-transparent hover:border-white hover:font-bold">Portfolio</a>
                    </li>
                    <li class="border-b  border-[#25262a] mx-4 my-6 md:my-0">
                        <a href="#" class="hover:border-b-2 border-transparent hover:border-white hover:font-bold">Contact</a>
                    </li>

                    <div className="flex">
                        <button type="button" class="text-yellow-500 px-4 py-3.5 bg-gray-700 hover:bg-yellow-500 hover:text-gray-700 focus:outline-none font-medium rounded-xl text-sm text-center me-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </button>
                        <button type="button" class="text-[#25262a] px-12 py-4 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-xl text-sm text-center me-2 mb-2">Contact Me</button>
                    </div>
                </ul>
            </nav>
    
            {/* Introduction */}

            <div class="flex text-white pt-16 p-6 font-sans leading-loose item-center flex-col md:flex-row ">
                <div class="w-full md:w-1/2">
                    <p class="text-md text-[#64f4ab] p-4">--Introducing</p>
                    <p class="text-7xl font-bold">Hello<br /> I'm Tayyab Nazir</p>
                    <p class="text-lg leading-loose">Since beginning my journey as a freelance designer nearby 7 years ago, I 've done remote work for agencies, consulted for startup, and collaborated with talented people to create digital products.</p>
                    <button type="button" class="text-[#25262a] text-lm mt-2 px-12 py-4 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-xl text-sm text-center me-2 mb-2 shadow-lg shadow-yellow-500/50">Contact Me</button>
                </div>
                <div>
                    <img src={image} class="object-none items-center"></img>
                </div>
            </div>

            {/* Skills */}

            <div class="flex bg-[#2d2e32] text-white flex-col md:flex-row">

                    <div class="p-10 flex sm:flex-wrap justify-around items-center">
                    {/* Cards */}
                        <div class="grid grid-cols-2 gap-6 static">
                            <div class="bg-[#222831] border-[#64f4ab]  group p-10 rounded-3xl flex flex-col text-center items-center justify-center  hover:bg-[#64f4ab] parentt group">
                                <div class="rounded-full w-20 p-2 border-2 m-5 border-[#64f4ab] child group-hover:bg-gradient-to-t from-[#64f4ab] to-[#327a56]">
                                    <img src={image} width={150} height={150}></img>
                                </div>
                                <p class="font-bold font-7xl m-3">Product Design</p>
                                <p>The technological revolution is changing aspect</p>
                            </div>

                            <div class="bg-[#222831] top-1 p-5 rounded-3xl flex flex-col text-center items-center justify-center hover:bg-[#64f4ab] parent group">
                                <div class="rounded-full w-20 p-2 border-2 m-5 border-[#64f4ab] child  group-hover:bg-gradient-to-t from-[#64f4ab] to-[#327a56]">
                                    <img src={image}></img>
                                </div>
                                <p class="font-bold font-7xl m-3">Logo Design</p>
                                <p>The technological revolution is changing aspect</p>
                            </div>

                            <div class="bg-[#222831] p-5 rounded-3xl flex flex-col text-center items-center justify-center hover:bg-[#64f4ab] parent group">
                                <div class="rounded-full p-2 w-20 m-5 border-2 border-[#64f4ab] child group-hover:bg-gradient-to-t from-[#64f4ab] to-[#327a56]">
                                        <img src={image}></img>
                                </div>
                                <p class="font-bold font-7xl m-3">UI Design</p>
                                <p>The technological revolution is changing aspect</p>
                            </div>
                            
                            <div class="bg-[#222831] top-1 p-5  rounded-3xl flex flex-col text-center items-center justify-center hover:bg-[#64f4ab] parent group">
                                <div class="rounded-full p-2 w-20 m-5 border-2 border-[#64f4ab] child group-hover:bg-gradient-to-t from-[#64f4ab] to-[#327a56]">
                                    <img src={image}></img>
                                </div>
                                <p class="font-bold font-7xl m-3">Icon Design</p>
                                <p>The technological revolution is changing aspect</p>
                            </div>
                        </div>
                    </div>

                    {/* side text */}
                    <div className="md:w-3/4 p-12 mt-10">
                        <p class="text-md text-[#64f4ab] pb-4">--My Skills</p>
                        <p class="text-5xl font-bold">Why Hire Me For Your Next Project?</p>
                        <p class="text-lg leading-loose">The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
                        <a href={CV} download={"TayyabNazir_CV"} target="_blank">
                            <button type="button" class="text-[#25262a] text-lm mt-2 px-16 py-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:outline-none font-medium rounded-xl text-sm text-center me-2 mb-2">Download CV</button>
                        </a>
                    </div>
            </div>

            {/* Projects */}
            <div class="absolute flex items-center justify-center w-28 h-28 bg-gradient-to-b from-[#64f4ab] to-[#327a56] rounded-full -left-4">
                <div class="w-20 h-20 bg-[#2d2e32] rounded-full"></div>
            </div>
            <div class="flex p-12 text-white items-center bg-[#2d2e32] parent group">
                
                <div class="max-w-lg leading-loose items-left">
                    <p class="text-md text-[#64f4ab]">-- Project 1</p>
                    <p class="text-4xl font-bold pb-2">Branding Nice Studio</p>
                    <p class="text-md leading-loose">The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
                    <button type="button" class="flex text-yellow-500 text-lm mt-2 px-12 py-4 text-lg text-left mb-2 hover: translate-x-0.5">
                        <svg class="m-2 w-6 h-3 text-yellow-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        Read More
                    </button>
                </div>
                <div class="p-6">
                    <div class="absolute rounded-xl p-48 px-64 -rotate-6 text-center bg-gray-700 overflow-x-clip opacity-0 md:opacity-100">abc</div>
                    <img src={project1} class="child group transistion ease-in-out -rotate-12 group-hover:rotate-0"></img>
                </div>
            </div>

            <div class="absolute flex items-center justify-center w-28 h-28 bg-gradient-to-b from-yellow-500 to-yellow-300 rounded-full overflow-hidden -right-4">
                <div class="w-20 h-20 bg-[#2d2e32] rounded-full"></div>
            </div>
            <div class="flex p-10 text-white items-center bg-[#2d2e32] parent group">
                <div class="p-4 -translate-x-14">
                    <div class="absolute rounded-3xl p-48 px-64 rotate-6 text-center bg-gray-700 overflow-clip opacity-0 md:opacity-100">abc</div>
                    <img src={project1} class="child group translate-x-6 rotate-12 group-hover:rotate-0"></img>
                </div>
                <div class="max-w-lg leading-loose p-6">
                    <p class="text-md text-[#64f4ab]">-- Project 2</p>
                    <p class="text-4xl font-bold pb-2">Mobile Card App</p>
                    <p class="text-md leading-loose">The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
                    <button type="button" class="flex content-start text-yellow-500 text-lm mt-2 px-12 py-4 text-lg text-left mb-2 left">
                        <svg class="m-2 w-6 h-3 text-yellow-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        Read More
                    </button>
                </div>
            </div>

            <div class="absolute flex items-center justify-center w-28 h-28 bg-gradient-to-b from-[#64f4ab] to-[#327a56] rounded-full -left-4">
                    <div class="w-20 h-20 bg-[#2d2e32] rounded-full"></div>
            </div>
            <div class="flex p-10 bg-[#2d2e32] text-white items-center parent group">
                
                <div class="max-w-lg leading-loose items-left">
                    <p class="text-md text-[#64f4ab]">-- Project 3</p>
                    <p class="text-4xl font-bold pb-2">Restaurant Landing Page</p>
                    <p class="text-md leading-loose">The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
                    <button type="button" class="flex text-yellow-500 text-lm mt-2 px-12 py-4 text-lg text-left mb-2">
                        <svg class="m-2 w-6 h-3 text-yellow-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        Read More
                    </button>
                </div>
                <div class="p-4">
                    <div class="absolute rounded-3xl p-48 px-64 -rotate-6 text-center bg-gray-700 overflow-clip opacity-0 md:opacity-100">abc</div>
                    <img src={project1} class="child group -rotate-12 group-hover:rotate-0"></img>
                </div>
            </div>

            <div class="flex flex-wrap content-center justify-center bg-[#2d2e32] p-5">
                <button type="button" class="text-gray-900 bg-white px-12 py-4 mt-5 rounded-xl shadow-white shadow-md">View All</button>
            </div>

            {/* Stats */}
            <div class="absolute flex items-center justify-center my-20 w-28 h-28 bg-transparent border-yellow-500 border-[12px] rounded-full overflow-hidden right-2"></div>
            <div class="bg-[#2d2e32] sm:py-20">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:max-w-none">
                        <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                            <div class="flex flex-col bg-white/5 p-12 py-20 leading-loose">
                                <dt class="text-xl font-semibold leading-6 text-white">Happy Clients</dt>
                                <dd class="order-first text-7xl font-semibold tracking-tight text-[#64f4ab]">56</dd>
                            </div>
                            <div class="flex flex-col bg-white/5 p-12 py-20">
                                <dt class="text-xl font-semibold leading-6 text-white">Projects Done</dt>
                                <dd class="order-first text-7xl font-semibold tracking-tight text-[#64f4ab]">87</dd>
                            </div>
                            <div class="flex flex-col bg-white/5 p-12 py-20">
                                <dt class="text-xl font-semibold leading-6 text-white">Award Winning</dt>
                                <dd class="order-first text-7xl font-semibold tracking-tight text-[#64f4ab]">16</dd>
                            </div>
                            <div class="flex flex-col bg-white/5 p-12 py-20">
                                <dt class="text-xl font-semibold leading-6 text-white">Years Experience</dt>
                                <dd class="order-first text-7xl font-semibold tracking-tight text-[#64f4ab]">7</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            {/* carousel */}

            <div class="max-w-full bg-[#2d2e32] flex flex-col items-center justify-center">

                <div>
                    {
                        Slides[index]
                    }
                </div>

                <div class="flex">
                    <button onClick={PrevSlide} class="m-1 w-2 rounded-xl border-gray-500 border-4 bg-transparent hover:ring-2 ring-2 ring-yellow-500 hover:ring-yellow-800"></button>
                    <button onClick={NextSlide} class="m-1 w-2 rounded-xl border-gray-500 border-4 bg-transparent hover:ring-2 ring-2 ring-yellow-500 hover:ring-yellow-800"></button>
                </div>
            </div>


            {/* Card */}
            <div class="flex items-center justify-center text-center text-white px-20 bg-[#2d2e32] p-12">
                <div class="max-w-full p-20 bg-[#25262a] rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center">
                    <div class="w-12 h-2 bg-[#64f4ab] mb-5 opacity-30"></div>
                    <a href="#">
                        <h1 class="mb-2 text-5xl font-bold tracking-tight text-white dark:text-white">Lets Work Together</h1>
                    </a>
                    <p class="mb-3 font-normal text-white dark:text-gray-400">The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn</p>
                    <button type="button" class="text-[#25262a] px-12 py-4 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-xl text-sm text-center me-2 mb-2">Contact Me</button>
                </div>
            </div>

            {/* Footer */}
            <div class="grid grid-cols-4 p-12 text-center text-white justify-center items-center">
                <div>
                    <a href="#" class="flex items-center space-x-0 rtl:space-x-reverse">
                        <img src={logo} class="h-10" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>
                </div>
                <div class="col-span-2 text-sm">© 2024 Freelancer - Phlox Elementor WordPress Theme. All rights reserved</div>
                <div>
                    <button type="button" class="text-yellow-500 px-4 py-3.5 bg-gray-700 hover:bg-yellow-500 hover:text-gray-700 focus:outline-none font-medium rounded-xl text-sm text-center me-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M0 0v24h24v-24h-24zm19.642 14.791l-4.179 4.179h-3.104l-2.031 2.03h-2.149v-2.03h-3.821v-11.224l1.075-2.746h14.209v9.791zm-9.672 3.701l2.03-2.03h3.821l2.388-2.388v-7.641h-11.463v10.03h3.224v2.029zm4.418-9.313h1.433v4.175h-1.433v-4.175zm-3.821 0h1.433v4.175h-1.433v-4.175z"/>
                        </svg>
                    </button>

                    <button type="button" class="text-yellow-500 px-4 py-3.5 bg-gray-700 hover:bg-yellow-500 hover:text-gray-700 focus:outline-none font-medium rounded-xl text-sm text-center me-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </button>

                    <button type="button" class="text-yellow-500 px-4 py-3.5 bg-gray-700 hover:bg-yellow-500 hover:text-gray-700 focus:outline-none font-medium rounded-xl text-sm text-center me-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </button>

                    <button type="button" class="text-yellow-500 px-4 py-3.5 bg-gray-700 hover:bg-yellow-500 hover:text-gray-700 focus:outline-none font-medium rounded-xl text-sm text-center me-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}