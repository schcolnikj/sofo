import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto 
        flex justify-between items-center 
        sm:px-16 px-6 py-4">
            <Link href='/' className='flex first-letter:justify-center items-center'>
            <Image
            src="/sofo2Inv.svg"
            alt='Sofo Logo'
            width={118}
            height={18}
            className="object-contain"
            />
            </Link>

            <CustomButton
                title ="Iniciar Sesión"
                btnType="button"
                containerStyles='Text-primary-blue
                rounded-full bg-white min-w-[130px]'
            />
        </nav>
    </header>
  )
}

export default NavBar