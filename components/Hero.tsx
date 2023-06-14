"use client"
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {

    const handleScroll = () => {

    }

  return (
    <div className= "hero">
        <div className= "flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                CarMates - Find, Book or Rent Your Perfect Car Mate
            </h1>
            <p className ="hero__subtitle">
            CarMates is a trusted companion for car enthusiasts, offering a seamless car finding, booking, and renting experience. With our diverse range of vehicles and personalized service, you'll find the perfect car mate to accompany you on your adventures.
            </p>

            <CustomButton 
                title ="Explore Cars"
                containerStyles ="bg-primary-blue text-white rounded-full mt-10"
                handleClick = {handleScroll}
            />
        </div>
        <div className = "hero__image-container">
            <div className='hero__image'>
                <Image src="/hero.png" alt="hero" fill className="object-contain" />

                <div className ="hero__image-overlay"></div>
            </div>
        </div>
    </div>
  )
}

export default Hero