import { SparklesIcon } from "@heroicons/react/solid";
import Input from "./Input";

export default function Feed() {
  return (
    <div className="xl:ml-[370px] sm:ml-[73px] border-l border-r xl:min-w-[760px] flex-grow max-w-xl">
    
    <div className="flex py-2 px-3 sticky bg-white border-b border-gray-200">

        <h2 className="text-lg font-bold cursor-pointer">Home</h2>

        <div className="hoverEffect flex items-center ml-auto w-9 h-9"> 
        
            <SparklesIcon className="h-5"/>
        </div>

    </div>

    <div>

      <Input/>
    </div>
    
    
    </div>

    
  )
}
