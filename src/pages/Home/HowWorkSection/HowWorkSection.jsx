import { GiSelfLove } from "react-icons/gi";
import Container from "../../../components/ui/Container";

const HowWorkSection = () => {
    return (
        <>
            <Container>
                <div className="md:flex gap-10 my-20">

                    <div className="md:flex-1">
                        <div className="grid grid-rows-5 grid-flow-col gap-4 h-80 md:h-[520px] overflow-hidden">
                            <div className="  row-span-5 col-span-3">
                                <img src="https://i.ibb.co/PTQBZq8/image-4.jpg" alt="" className=" h-80 md:h-[520px] object-cover w-full" />
                            </div>
                            <div className=" bg-green-400 row-span-2 col-span-2">
                                <img src="https://i.ibb.co/DGgD3XJ/image-5.jpg" className="h-[200px] w-full object-cover overflow-hidden" alt="" />
                            </div>
                            <div className=" bg-white row-span-3 col-span-2">
                                <img src="https://i.ibb.co/ZcdpSCV/image-1.jpg" className="h-full w-full object-cover overflow-hidden mt-[16px] md:mt-0" alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="md:flex-1 mt-24 md:mt-0 h-[520px]">
                        <div className="flex items-center h-full">
                            <div className="font-inter">
                                <p className="text-primary font-satisfy text-lg font-medium flex items-center gap-2">Find True Love Online <GiSelfLove/></p>
                                <h1 className="text-4xl md:text-5xl font-bold mb-5 mt-2">Simplify Matrimony with User Profiles</h1>
                                <p className="leading-7">In the realm of online matrimony, simplicity reigns supreme. Every user embarks on their journey with just three essential words: Create, Connect, Love. To unlock the doors to companionship, users must weave a narrative in a concise six-word title, encapsulating their essence. The process begins with crafting a captivating profile, a digital mirror reflecting aspirations and identity. Users traverse a sea of biodata, seeking compatibility. When preferences align, the bridge to connection emerges. True love beckons when the preferred biodata resonates, paving the way for meaningful interactions. This streamlined approach ensures that the pursuit of companionship is efficient and tailored, making the journey towards matrimony an enriching experience for every seeker.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default HowWorkSection;