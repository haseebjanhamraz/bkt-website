import Image from "next/image"

export default function Hero() {
    return (
        <div className="flex items-center justify-center p-4 w-full h-screen">

            <div className="flex flex-wrap-reverse lg:flex-nowrap gap-6 justify-between">
                <div className="w-full space-y-5 p-4 rounded-md">
                    <h2 className="text-4xl font-bold">Welcome to Baacha Khan Trust</h2>
                    <p className="text-justify font-medium text-lg text-gray-600">
                        A non-governmental organisation that was established in 2004 with the mission of preserving and promoting the legacy of Khan Abdul Ghaffar Khan, also known as Baacha Khan. As one of the most important and influential figures in the history of the Pashtun people, Baacha Khan dedicated his life to promoting education, nonviolence, and democracy in the region.
                    </p>
                </div>
                <div className="w-full flex items-center justify-center">
                    <Image
                        src="/bkt-logo.png"
                        alt="Logo"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    )
}