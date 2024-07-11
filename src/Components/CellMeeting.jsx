import React, { useState } from 'react';

const CellAttendance = () => {
    const [attendance, setAttendance] = useState({});
    const [reason, setReason] = useState({});

    const members = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        // Add more members as needed
    ];

    const handleAttendanceChange = (memberId, status) => {
        setAttendance({ ...attendance, [memberId]: status });
        if (status !== 'A') {
            setReason({ ...reason, [memberId]: '' });
        }
    };

    const handleReasonChange = (memberId, reasonText) => {
        setReason({ ...reason, [memberId]: reasonText });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Attendance:', attendance);
        console.log('Reasons:', reason);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200">
            <strong className="text-gray-700 font-medium">Cell Attendance</strong>
            
            <table className="min-w-full mt-4 border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-b border-gray-300">Name</th>
                        <th className="px-4 py-2 border-b border-gray-300">Present (P)</th>
                        <th className="px-4 py-2 border-b border-gray-300">Absent (A)</th>
                        <th className="px-4 py-2 border-b border-gray-300">Reason for Absence</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member) => (
                        <tr key={member.id}>
                            <td className="px-4 py-2 border-b border-gray-300">{member.name}</td>
                            <td className="px-4 py-2 border-b border-gray-300 text-center">
                                <input
                                    type="radio"
                                    name={`attendance-${member.id}`}
                                    value="P"
                                    checked={attendance[member.id] === 'P'}
                                    onChange={() => handleAttendanceChange(member.id, 'P')}
                                    className="form-radio"
                                />
                            </td>
                            <td className="px-4 py-2 border-b border-gray-300 text-center">
                                <input
                                    type="radio"
                                    name={`attendance-${member.id}`}
                                    value="A"
                                    checked={attendance[member.id] === 'A'}
                                    onChange={() => handleAttendanceChange(member.id, 'A')}
                                    className="form-radio"
                                />
                            </td>
                            <td className="px-4 py-2 border-b border-gray-300">
                                {attendance[member.id] === 'A' && (
                                    <input
                                        type="text"
                                        name={`reason-${member.id}`}
                                        value={reason[member.id] || ''}
                                        onChange={(e) => handleReasonChange(member.id, e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-4 flex justify-end">
                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default CellAttendance;
