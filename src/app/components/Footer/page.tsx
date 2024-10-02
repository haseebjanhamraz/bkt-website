"use client"
import Link from "next/link"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";


export default function Footer() {
    const socialLinks = [{
        link: "https://www.facebook.com/baachakhantrust/",
        icon: FaFacebookSquare,
    },
    {
        link: "https://www.linkedin.com/company/baachakhantrust/",
        icon: FaLinkedin,
    },
    {
        link: "https://twitter.com/baachakhantrust",
        icon: FaSquareXTwitter,
    },
    {
        link: "https://www.instagram.com/baachakhantrust/",
        icon: FaSquareInstagram,
    },


    ]
    return (
        <div className="w-full justify-around items-center bg-gray-700 mt-10 text-white p-4 rounded-md flex">
            <div>
                <p>Copyright &copy; 2024 Baacha Khan Trust. All rights reserved. {" "}
                    <span>Developed by: {" "}
                        <Link
                            href={"https://kpcybers.com"}
                            className="font-bold text-red-700 hover:text-white"
                        >
                            KP Cybers
                        </Link>
                    </span>
                </p>
            </div>
            <div className="flex gap-2">
                {socialLinks.map((link, index) => (
                    <Link key={index} href={link.link}>
                        <link.icon className="text-2xl hover:text-gray-300 cursor-pointer" />
                    </Link>
                ))}
            </div>
        </div>
    )
}