import desctopImage from '../../assets/desctop-image.png';
import mobileImage from '../../assets/mobile-image.png';
import Button from "../Button/Button";

const HeroSection = () => {
    return (
        <section className="relative mb-40 max-w-[1280px] mx-auto px-8 md:px-16 xl:px-0 xl:pt-0 pt-16">
            <div className="relative mx-auto lg:pt-32 pb-24 flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-end">
                <div className="max-w-[600px] mb-0 flex flex-col lg:block">
                    <h1 className="
                        text-center
                        lg:text-start 
                        text-blackColor
                        text-5xl
                        leading-13
                        font-bold 
                        mb-3
                        md:text-7xl 
                        md:leading-18 
                        md:mb-5

                        xl:text-8xl 
                        xl:leading-24 
                        xl:mb-7"
                    >
                            FOOD. EARTH.
                            NO MORE
                            PLASTIC.
                    </h1>

                    <Button />
                </div>
                
                <div
                    className="
                    hidden
                    lg:block
                    lg:absolute
                    h-full
                    inset-0
                    bg-no-repeat    
                    md:bg-right-top
                    bg-right
                    lg:mr-20
                    lg:bg-[length:auto_95%]
                    lg:mt-0
                    xl:bg-[length:auto_100%]
                    pointer-events-none
                    -z-10
                    "
                    style={{ backgroundImage: `url(${desctopImage})` }}
                ></div>

                {/* <div
                    className="
                    block
                    absolute
                    lg:hidden
                    h-full
                    inset-0
                    bg-no-repeat    
                    bg-center

                    pointer-events-none
                    -z-10
                    "
                    style={{ backgroundImage: `url(${mobileImage})` }}
                ></div> */}
                <img 
                    src={mobileImage} 
                    alt="mobile" 
                    className="
                        block  
                        lg:hidden 
                        inset-0 
                        bg-no-repeat 
                        bg-center 
                        pointer-events-none 
                        -z-10" 
                />

                
            </div>
        </section>
    )
}

export default HeroSection