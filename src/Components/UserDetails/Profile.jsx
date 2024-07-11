


import React from 'react';
import photo1 from '../../assets/images/photo1.jpg'; // Ensure this path is correct

const CellLeaderProfile = () => {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200">
            <strong className="text-gray-700 font-medium">Cell Leader Profile</strong>

            <div className="mt-3 flex flex-col md:flex-row">
                {/* Left side */}
                <div className="w-full md:w-1/3 pr-4">
                    {/* Cell leader image */}
                    <div className="m-4">
                        <img src={photo1} alt="Cell Leader" className="w-full h-48 object-cover object-top rounded-lg" />
                    </div>

                    {/* Basic information */}
                    <div className="mt-4">
                        <strong className="text-gray-700">Basic Information</strong>
                        <div className="mt-2">
                            <div className="flex justify-between">
                                <span className="font-medium">Full Name:</span>
                                <span>John Doe</span>
                            </div>
                            <div className="flex justify-between mt-1">
                                <span className="font-medium">Email:</span>
                                <span>johndoe@example.com</span>
                            </div>
                            <div className="flex justify-between mt-1">
                                <span className="font-medium">Phone:</span>
                                <span>+1234567890</span>
                            </div>
                            <div className="flex justify-between mt-1">
                                <span className="font-medium">Birthday:</span>
                                <span>January 1, 1990</span>
                            </div>
                            <div className="flex justify-between mt-1">
                                <span className="font-medium">Gender:</span>
                                <span>Male</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="w-full md:w-1/2 pl-4">
                    {/* Address */}
                    <div className="mt-4">
                        <strong className="text-gray-700">Address</strong>
                        <div className="mt-2">
                            <div className="flex justify-between">
                                <span className="font-medium">Street:</span>
                                <span>123 Main St</span>
                            </div>
                            <div className="flex justify-between mt-1">
                                <span className="font-medium">City:</span>
                                <span>Anytown</span>
                            </div>
                        </div>
                    </div>

                    {/* Additional details */}
                    <div className="mt-4">
                        <strong className="text-gray-700">Additional Details</strong>
                        <div className="mt-2">
                            <div className="flex justify-between">
                                <span className="font-medium">Occupation:</span>
                                <span>Cell Leader</span>
                            </div>
                            <div className="flex justify-between mt-1">
                                <span className="font-medium">Joined Date:</span>
                                <span>January 1, 2020</span>
                            </div>
                            <div className="flex justify-between mt-1">
                                <span className="font-medium">Active Status:</span>
                                <span>Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CellLeaderProfile;
