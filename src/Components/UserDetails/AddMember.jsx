import React, { useState } from 'react';

const UserForm = () => {
    const [photo, setPhoto] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setPhoto(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <form className="flex flex-wrap">
            <div className="w-full md:w-1/4">
                {/* User image */}
                <div className="m-4">
                    {preview ? (
                        <img src={preview} alt="User Preview" className="w-full h-48 object-cover object-top rounded-lg" />
                    ) : (
                        <img src="../../assets/images/photo1.jpg" alt="User" className="w-full h-48 object-cover object-top rounded-lg" />
                    )}
                    <input type="file" accept="image/*" onChange={handleImageChange} className="mt-2" />
                </div>
            </div>

            {/* Right side */}
            <div className="w-full md:w-3/4">
                {/* Personal information */}
                <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 mb-4">
                    <strong className="text-gray-700 font-medium details">Personal Information</strong>
                    <div className="mt-1 grid grid-cols-2 gap-x-4">
                        {/* Full Name */}
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" id="fullName" name="fullName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </div>
                        {/* Email */}
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </div>
                        {/* Phone */}
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                            <input type="text" id="phone" name="phone" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </div>
                        {/* Birthday */}
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">Birthday</label>
                            <input type="date" id="birthday" name="birthday" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </div>
                        {/* Gender */}
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                            <select id="gender" name="gender" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="street" className="block text-sm font-medium text-gray-700">Occupation</label>
                            <input type="text" id="street" name="street" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="street" className="block text-sm font-medium text-gray-700">Address</label>
                            <input type="text" id="street" name="street" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">Date Joined</label>
                            <input type="date" id="birthday" name="birthday" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </div>

                    </div>
                </div>

                {/* Submit button */}
                <div className="px-4 py-0 text-right sm:px-6">
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default UserForm;
