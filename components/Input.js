import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";


export default function Input() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">



    
        <img src="  https://png.pngitem.com/pimgs/s/49-497492_kawaii-cake-pixel-art-hd-png-download.png " alt="userImage" className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"/>

        
        <div className=" w-full">
            <div className="">

                    <textarea className="w-full border border-gray-300" rows="3" placeholder="What's happening?" ></textarea>        
            </div>
            <div className="">

              <div className="">

                  <PhotographIcon className=" h-10 w-10"/>
                  <EmojiHappyIcon className=" h-10 w-10"/>

              </div>

              <button>Tweet</button>

            </div>
            
        </div>

    </div>
  )
}
