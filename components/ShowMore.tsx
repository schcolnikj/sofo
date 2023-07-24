"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext, setFlavor, setCategoria, setLimit } : ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber +1) * 10;
        const newPathname = updateSearchParams("limit", `${newLimit}`)
        
        setLimit(newLimit)
        setFlavor("")
        setCategoria("")
    }

  return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomButton
                title= "Show All"
                btnType="button"
                containerStyles="bg-primary-blue rounded-full text-white"
                handleClick={handleNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore