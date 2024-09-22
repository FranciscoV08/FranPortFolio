import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Card = () => {
    return (
        <div className="flex gap-6 justify-center">
            <Link href={'https://github.com/FranciscoV08'}>
                <FaGithub color="white" size={55} />
            </Link>
            <Link href={'https://www.linkedin.com/in/franciscovillavicencio/'}>
                <FaLinkedin color="white" size={55} />
            </Link>
        </div>
    )
}
