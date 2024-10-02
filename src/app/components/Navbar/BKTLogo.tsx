import Image from "next/image"
export default function BKTLogo() {
    return (
        <div className="w-10">
            <Image src="/bkt-logo.png" alt="Logo" width={100} height={100} />
        </div>

    )
}
