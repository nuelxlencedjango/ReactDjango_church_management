







{/*import { FcBullish } from 'react-icons/fc';
import { Link, useLocation } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_Bttom_LINKS, DASHBOARD_SIDEBAR_LINKS } from './lib/const/navigation';
import classNames from 'classnames';
import { HiOutlineLogout } from 'react-icons/hi';
import dc_logo from '../../assets/logo/dominion1.jpg';

const linkClasses = `flex items-center gap-2 font-light px-3 py-2 
hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 
rounded-sm text-base`

export default function Sidebar() {
    return (
        <div className='bg-neutral-900 w-60 p-0.5 flex flex-col text-white sidebar-div'>
            <div className="flex items-center gap-3 px-1 py-3">
                <img src={dc_logo} className='w-[45px] h-[45px] object-cover rounded-full bg-blue-600' />
                <span className='text-neutral-100 text-lg'>DC Gbagada</span>
            </div>

            <div className="flex-1 py-1 flex flex-col gap-0.2">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>

            <div className='flex flex-col gap-0.5 pt-1 border-t border-neutral-700'>
                {DASHBOARD_SIDEBAR_Bttom_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}

                
                <div className={classNames('text-red-400 cursor-pointer', linkClasses)}>
                    <span className='text-xl'><HiOutlineLogout /></span>
                    Logout
                </div>


            </div>
        </div>
    );
}

function SidebarLink({ item }) {
    const { pathname } = useLocation();
    return (
        <Link to={item.path} className={classNames(pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClasses)}>
            <span className='text-xl'>{item.icon}</span>
            <span>{item.label}</span>
        </Link>
    );
}*/}

import { FcBullish } from 'react-icons/fc';
import { Link, useLocation } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_Bttom_LINKS, DASHBOARD_SIDEBAR_LINKS } from './lib/const/navigation';
import classNames from 'classnames';
import { HiOutlineLogout } from 'react-icons/hi';
import dc_logo from '../../assets/logo/dominion1.jpg';


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="branding">
                <img src={dc_logo} className='logo' />
                <span className='brand-name'>DC Gbagada</span>
            </div>

            <div className="links">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>

            <div className='bottom-links'>
                {DASHBOARD_SIDEBAR_Bttom_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}

                <div className='logout-link'>
                    <span className='logout-icon'><HiOutlineLogout /></span>
                    Logout
                </div>
            </div>
        </div>
    );
}

function SidebarLink({ item }) {
    const { pathname } = useLocation();
    return (
        <Link to={item.path} className={classNames(pathname === item.path ? 'active' : '', 'link')}>
            <span className='link-icon'>{item.icon}</span>
            <span className='link-text'>{item.label}</span>
        </Link>
    );
}