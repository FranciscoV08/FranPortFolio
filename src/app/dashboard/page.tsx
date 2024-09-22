import Image from "next/image";
// Mis componentes 
import {Card, Button} from '../../components'

export default function NamePage() {
  return (
    <div>
      <div className="flex min-h-screen bg-[#161513]">
        <div className="mx-auto">
          <div className="mx-auto mb-[40px] mt-[98px] h-[213px] w-[213px] overflow-hidden rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
            <Image src="https://i.imgur.com/J2KbbCm.jpeg" width={250} height={120} alt="imgdev" />
          </div>
          <h1 className="max-w-screen-sm text-center text-[55px] font-extrabold text-white">
            Francisco Villavicencio
            <br />
            FullStack <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#072af0]">Developer!</span>
          </h1>
          <p className="mx-auto mt-[40px] mb-[54px] text-[18px] font-light text-[#C5C5C5] text-center max-w-lg">FullStack Developer con experiencia trabajando como Freelance.<span className="text-blue-400"> Stack - MERN</span></p>
          <Button />
          <div>
            <div className="py-5 sm:py-15">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}