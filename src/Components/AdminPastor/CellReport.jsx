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

    const renderReportTable = (day, dayLabel) => {
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
                <strong className="text-gray-700">{dayLabel} Attendance</strong>
                <table className="w-full text-gray-700 border border-gray-200 mt-2">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Present ({presentMembers.length})</th>
                            <th className="border px-4 py-2">Absent</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">
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
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200">
            <strong className="text-gray-700 font-medium">Weekly Attendance Report</strong>

            <div className="mt-6">
                {renderReportTable('sunday', 'Sunday Service')}
                {renderReportTable('tuesday', 'Tuesday')}
                {renderReportTable('cellMeeting', 'Cell Meeting')}
            </div>
        </div>
    );
};

export default WeeklyAttendanceReport;
