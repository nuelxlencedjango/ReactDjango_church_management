import React, { useState } from 'react';

const WeeklyAttendanceReport = () => {
    const [attendance] = useState({
        sunday: {
            1: 'P',
            2: 'A',
            // Add more attendance records as needed
        },
        tuesday: {
            1: 'A',
            2: 'P',
            // Add more attendance records as needed
        },
        cellMeeting: {
            1: 'P',
            2: 'A',
            // Add more attendance records as needed
        }
    });
    const [reasons] = useState({
        sunday: {
            2: 'Sick',
            // Add more reasons as needed
        },
        tuesday: {
            1: 'Traveling',
            // Add more reasons as needed
        },
        cellMeeting: {
            2: 'Family emergency',
            // Add more reasons as needed
        }
    });

    const members = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        // Add more members as needed
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const attendanceData = {
            attendance,
            reasons
        };
        console.log('Attendance Data:', attendanceData);
        // Handle form submission logic here, e.g., send data to the server
    };

    const renderReportTable = (day, dayLabel, date) => {
        const presentMembers = Object.keys(attendance[day])
            .filter(id => attendance[day][id] === 'P')
            .map(id => members.find(member => member.id === parseInt(id)).name);
        const absentMembers = Object.keys(attendance[day])
            .filter(id => attendance[day][id] === 'A')
            .map(id => ({
                name: members.find(member => member.id === parseInt(id)).name,
                reason: reasons[day][id]
            }));

        return (
            <div className="mt-4">
                <strong className="text-gray-700">{dayLabel} Attendance ({date})</strong>
                <table className="w-full text-gray-700 border border-gray-200 mt-2">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Present ({presentMembers.length})</th>
                            <th className="border px-4 py-2">Absent</th>
                            <th className="border px-4 py-2">Called?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-2 py-2">
                                <ul>
                                    {presentMembers.map(name => (
                                        <li key={name}>{name}</li>
                                    ))}
                                </ul>
                            </td>
                            <td className="border px-4 py-2">
                                <ul>
                                    {absentMembers.map(({ name, reason }) => (
                                        <li key={name}>{name} (Reason: {reason})</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="bg-white px-4 pt-2 pb-4 rounded-sm border border-gray-200">
            <strong className="text-gray-700 font-medium details">Weekly Attendance Report</strong>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="mt-0 space-y-4">
                    {renderReportTable('sunday', 'Sunday Service', 'July 10, 2024')}
                    {renderReportTable('tuesday', 'Tuesday Service', 'July 11, 2024')}
                    {renderReportTable('cellMeeting', 'Cell Meeting', 'July 12, 2024')}
                </div>

                <div className="mt-4 flex justify-end">
                    <button
                        type="submit"
                        className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default WeeklyAttendanceReport;
