


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CellMembers = () => {
    const [members, setMembers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1); // Initialize with 1

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/members/?page=${currentPage}`);
                const data = await response.json();
                setMembers(data.results);
                setTotalPages(Math.ceil(data.count / 10)); // Adjust page size if necessary
            } catch (error) {
                console.error('Error fetching members:', error);
            }
        };

        fetchMembers();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
            <strong className='text-gray-700 font-medium'>Cell Members</strong>

            <div className='mt-3'>
                <table className='w-full text-gray-700 border-x border-gray-200 rounded-sm'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Date Joined</th>
                            <th>Phone No</th>
                            <th>Address</th>
                            <th>Occupation</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member) => (
                            <tr key={member.id}>
                                <td>{member.id}</td>
                                <td>{member.name}</td>
                                <td>{member.gender}</td>
                                <td>{new Date(member.date_joined).toLocaleDateString()}</td>
                                <td>{member.phone_no}</td>
                                <td>{member.address}</td>
                                <td>{member.occupation}</td>
                                <td>
                                    <Link to={`/members/${member.id}`}>View</Link>
                                    <button onClick={() => handleUpdate(member.id)}>Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination">
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>{currentPage}</span> of <span>{totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CellMembers;
