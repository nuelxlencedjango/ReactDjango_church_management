import React, { Fragment } from 'react';
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi';
import { Popover, Transition, Menu } from '@headlessui/react';
import ClassNames from 'classnames';
import profileImg from '../../assets/logo/dominion1.jpg';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-white h-16 px-8 flex w-[100%] justify-between items-center border-b border-gray-200 header-profile'>
             <form className="flex items-center w-[100%]" onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }}>
                <div className="relative w-[100%]">
                    <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3 search-icon-bar' />
                    <input
                        type="text"
                        placeholder='Search ....'
                        className='text-sm focus:outline-none active:outline-none h-10 w-[40rem] border border-gray-300 rounded-l-sm pl-11 pr-4 header-input-search'
                    />
                </div>
                <button
                    type="submit"
                    className='h-10 px-3 ml-[5px] bg-green-700 text-white text-sm font-medium rounded-[10px] focus:outline-none hover:bg-blue-600 search-form-btn'
                >
                    Search
                </button>
            </form>

            <div className='flex items-center gap-4 mr-2 header-msg'>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={ClassNames(open && 'bg-gray-100', "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100")}
                            >
                                <HiOutlineChatAlt fontSize={24} />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className='text-gray-700 font-medium'>Messages</strong>
                                        <div className="mt-2 py-1 text-sm">This is the panel</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>

                {/* Bell icon */}
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={ClassNames(open && 'bg-gray-100', "p-.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100")}
                            >
                                <HiOutlineBell fontSize={24} />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className='text-gray-700 font-medium'>Notifications</strong>
                                        <div className="mt-2 py-1 text-sm">This is the panel</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>

                <Menu as="div" className="relative">
                    <div>
                        <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                            <span className='sr-only'>Open Users Menu</span>
                            <div
                                className='h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center'
                                style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}
                            >
                                {/* You can uncomment the following img tag if you prefer using an img tag instead of background-image */}
                                <img src={profileImg} alt="Profile" className="h-full w-full rounded-full object-cover" />
                            </div>
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(active && 'bg-gray-100',
                                            'text-gray-700 focus:bg-gray-200 block cursor-pointer rounded-sm px-4 py-2'
                                        )}
                                        onClick={() => navigate('/profile')}
                                    >
                                        Your Profile
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(active && 'bg-gray-100',
                                            'text-gray-700 focus:bg-gray-200 block cursor-pointer rounded-sm px-4 py-2'
                                        )}
                                        onClick={() => navigate('/settings')}
                                    >
                                        Settings
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(active && 'bg-gray-100',
                                            'text-gray-700 focus:bg-gray-200 block cursor-pointer rounded-sm px-4 py-2'
                                        )}
                                        onClick={() => navigate('/logout')}
                                    >
                                        Logout
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    );
};
export default Header;





