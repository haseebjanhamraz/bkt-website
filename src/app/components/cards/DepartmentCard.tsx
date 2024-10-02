import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import Departments from "./Departments";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function App() {
    const departmentsList = Departments()
    return (
        <div>
            <div className="flex justify-center items-center p-10 mb-10">
                <h3 className="text-3xl font-bold">Baacha Khan Trust Departments</h3>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-flow-row gap-4 justify-center">
                {departmentsList.map((department) => (
                    <Card className="max-w-[400px]">
                        <CardHeader className="flex gap-3">
                            <Image
                                alt={department.name}
                                height={40}
                                radius="sm"
                                src={department.image}
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md font-bold">{department.name}</p>
                                <p className="text-small text-default-500">Estd: {department.established} - {department.location}</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>{department.description}</p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <div className="flex justify-between w-full p-2 rounded-md">
                                <Link
                                    isExternal
                                    showAnchorIcon
                                    href={department.website}
                                >
                                    Visit website
                                </Link>


                                <div className="flex gap-2">
                                    {department.social.facebook && (
                                        <Link
                                            isExternal
                                            href={`https://web.facebook.com/${department.social.facebook}`}
                                        >
                                            <FaFacebookF />
                                        </Link>
                                    )}
                                    {department.social.twitter && (
                                        <Link
                                            isExternal
                                            href={`https://x.com/${department.social.twitter}`}
                                        >
                                            <FaSquareXTwitter />
                                        </Link>
                                    )}
                                    {department.social.instagram && (
                                        <Link
                                            isExternal
                                            href={`https://instagram.com/${department.social.instagram}`}
                                        >
                                            <FaInstagram />
                                        </Link>
                                    )}
                                    {department.social.youtube && (
                                        <Link
                                            isExternal
                                            href={`https://youtube.com/${department.social.youtube}`}
                                        >
                                            <FaYoutube />
                                        </Link>
                                    )}
                                </div>
                            </div>

                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}