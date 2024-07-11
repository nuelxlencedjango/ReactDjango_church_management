import React from 'react';

const AttendanceTable = () => {
    const members = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        // Add more members as needed
    ];

    const attendanceData = {
        sunday: { 1: true, 2: false }, // Example data, true indicates present, false indicates absent
        tuesday: { 1: true, 2: true },
        cellMeeting: { 1: false, 2: true }
    };

    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200">
            <strong className="text-gray-700 font-medium">Attendance Table</strong>
            <table className="w-full mt-4 border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="py-2 px-4 text-left">Member Name</th>
                        <th className="py-2 px-4 text-center">Sunday</th>
                        <th className="py-2 px-4 text-center">Tuesday</th>
                        <th className="py-2 px-4 text-center">Cell Meeting</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map(member => (
                        <tr key={member.id} className="border-b">
                            <td className="py-2 px-4">{member.name}</td>
                            <td className="py-2 px-4 text-center">
                                <input type="checkbox" checked={attendanceData.sunday[member.id] || false} readOnly />
                            </td>
                            <td className="py-2 px-4 text-center">
                                <input type="checkbox" checked={attendanceData.tuesday[member.id] || false} readOnly />
                            </td>
                            <td className="py-2 px-4 text-center">
                                <input type="checkbox" checked={attendanceData.cellMeeting[member.id] || false} readOnly />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceTable;
