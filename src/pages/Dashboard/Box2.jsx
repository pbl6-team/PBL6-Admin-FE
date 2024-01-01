import { useEffect, useState } from 'react';
import getTotalWorkspace from '../../api/dashboard/getTotalWorkspace';

import { Presentation } from 'lucide-react';

export default function Box2 () {
    const [totalWorkspace, setTotalWorkspace] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const response = await getTotalWorkspace();
            setTotalWorkspace(response.data);
        }
        fetchData();
    }, []);

    return (
        <div className="relative h-40 bg-[#5E35B1] overflow-hidden rounded-md px-4 py-6">
            <div className="flex flex-col">
                <div className="p-2 w-10 rounded-md bg-[#4527A0]"><Presentation className="h-6 w-6 text-white" /></div>
                <div className='pt-2'><span className='text-3xl font-semibold text-white'>{totalWorkspace}</span></div>
                <div className=''><span className='text-base font-semibold text-white opacity-70'>Total Workspace</span></div>
            </div>
            <div className="absolute w-36 h-36 bg-[#522EA8] -top-16 right-0 rounded-full"></div>
            <div className="absolute w-40 h-40 bg-[#4527A0] rounded-full -top-12 -right-20"></div>
        </div>
    );
}
