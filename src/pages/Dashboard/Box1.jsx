import { Users } from 'lucide-react';
import getTotalUser from '../../api/dashboard/getTotalUser';
import { useEffect, useState } from 'react';
export default function Box () {
    const [totalUser, setTotalUser] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const response = await getTotalUser();
            setTotalUser(response.data);
        }
        fetchData();
    }, []);
    return (
        <div className="relative h-40 bg-[#1E88E5] overflow-hidden rounded-md px-4 py-6">
            <div className="flex flex-col">
                <div className="p-2 w-10 rounded-md bg-[#1565C0]"><Users className='w-6 h-6 text-white'/></div>
                <div className='pt-2'><span className='text-3xl font-semibold text-white'>{totalUser}</span></div>
                <div className=''><span className='text-base font-semibold text-white opacity-70'>Total users</span></div>
            </div>
            <div className="absolute w-36 h-36 bg-[#1A77D2] -top-16 right-0 rounded-full"></div>
            <div className="absolute w-40 h-40 bg-[#1565C0] rounded-full -top-12 -right-20"></div>
        </div>
    );
}
