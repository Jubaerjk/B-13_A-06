
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
    return (
        <>
            <div className='bg-[#101727]'>
                <footer className="container mx-auto footer sm:footer-horizontal text-white py-10">
                    <aside className='space-y-2'>
                        <h4 className='text-2xl font-bold text-white'>DigiTools</h4>
                        <p className='text-[#a5a5a5]'>
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Resources</h6>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Tutorials</a>
                        <a className="link link-hover">Documentation</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social</h6>
                        <div className='flex gap-2'>
                            <a className="link link-hover bg-white text-black p-2 rounded-full"><FaFacebook /></a>
                            <a className="link link-hover bg-white text-black p-2 rounded-full"><PiInstagramLogoFill /></a>
                            <a className="link link-hover bg-white text-black p-2 rounded-full"><FaTwitter /></a>
                        </div>
                    </nav>
                </footer>
                <hr className='border-[#706e6e] container mx-auto' />

                <div className='container mx-auto flex justify-between items-center text-center text-xs py-10'>
                    <p className='text-[#a5a5a5]'>
                        © 2024 DigiTools. All rights reserved.
                    </p>
                    <div className='flex gap-4'>
                        <p className='text-[#a5a5a5]'>
                            Privacy Policy
                        </p>
                        <p className='text-[#a5a5a5]'>
                            Terms of Service
                        </p>
                        <p className='text-[#a5a5a5]'>
                            Cookie Policy
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer