import { Users } from 'lucide-react';
export default function Box2 () {
    return (
        <div className="relative h-40 bg-[#5E35B1] overflow-hidden rounded-md px-4 py-6">
            <div className="flex flex-col">
                <div className="p-2 w-10 rounded-md bg-[#4527A0]"><Users className='w-6 h-6 text-white'/></div>
                <div className='pt-2'><span className='text-3xl font-semibold text-white'>5000</span></div>
                <div className=''><span className='text-base font-semibold text-white opacity-70'>Total users</span></div>
            </div>
            <div className="absolute w-36 h-36 bg-[#522EA8] -top-16 right-0 rounded-full"></div>
            <div className="absolute w-40 h-40 bg-[#4527A0] rounded-full -top-12 -right-20"></div>
        </div>
    );
}
