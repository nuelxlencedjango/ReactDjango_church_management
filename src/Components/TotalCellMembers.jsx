import React from 'react';
import { Link } from 'react-router-dom';
import OrderStatus from './OrderStatus';

const recentOrderData = [
    {
        id: '1',
        product_id: '4321',
        custmer_name: 'Shrik Mark',
        order_date: '2022-06-17',
        order_total: '$5950',
        current_order_status: 'PLACED',
        shipping_address: 'cottage 5 main road'
    },
    {
        id: '2',
        product_id: '4331',
        custmer_name: 'Mark Dan',
        order_date: '2022-06-16',
        order_total: '$570',
        current_order_status: 'OUT_FOR_DELIVERY',
        shipping_address: 'cot5 main road'
    },
    {
        id: '3',
        product_id: '4322',
        custmer_name: 'john Doe',
        order_date: '2023-06-17',
        order_total: '$790',
        current_order_status: 'CONFIRMED',
        shipping_address: '35 tiwa road'
    },
    {
        id: '4',
        product_id: '4571',
        custmer_name: 'Smk hahha',
        order_date: '2022-06-17',
        order_total: '$5950',
        current_order_status: 'SHIPPED',
        shipping_address: 'cottage 5 main road'
    },
    {
        id: '5',
        product_id: '4355',
        custmer_name: 'Mary John',
        order_date: '2022-07-19',
        order_total: '$7990',
        current_order_status: 'DELIVERED',
        shipping_address: 'cottage 5 main road'
    },
    {
        id: '6',
        product_id: '4389',
        custmer_name: 'Shrik Mark',
        order_date: '2022-08-17',
        order_total: '$7850',
        current_order_status: 'PLACED',
        shipping_address: 'cottage 5 main road'
    },
    {
        id: '7',
        product_id: '4378',
        custmer_name: 'Shark mike',
        order_date: '2022-06-20',
        order_total: '$3550',
        current_order_status: 'CONFIRMED',
        shipping_address: 'cottage 5 main road'
    },
    {
        id: '8',
        product_id: '4365',
        custmer_name: 'Shrk love',
        order_date: '2022-06-17',
        order_total: '$5950',
        current_order_status: 'SHIPPED',
        shipping_address: 'cottage 5 main road'
    },
    {
        id: '9',
        product_id: '4302',
        custmer_name: 'Shrik Mark',
        order_date: '2022-06-17',
        order_total: '$2450',
        current_order_status: 'DELIVERED',
        shipping_address: 'cottage 5 main road'
    },
    {
        id: '10',
        product_id: '4344',
        custmer_name: 'SMark GANI',
        order_date: '2022-06-22',
        order_total: '$9050',
        current_order_status: 'OUT_FOR_DELIVERY',
        shipping_address: 'cottage 5 main road'
    },
    {
        id: '11',
        product_id: '4399',
        custmer_name: 'Femi fathers',
        order_date: '2022-06-10',
        order_total: '$4500',
        current_order_status: 'SHIPPED',
        shipping_address: 'cottage 5 main road'
    }
];

const CellMembers = () => {
    const handleEdit = (id) => {
        // Logic for editing the record
        console.log(`Edit record with id: ${id}`);
    };

    const handleDelete = (id) => {
        // Logic for deleting the record
        console.log(`Delete record with id: ${id}`);
    };

    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Cell Members</strong>

            <div className="mt-3">
                <table className="w-full text-gray-700 border-x border-gray-200 rounded-sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Date Joined</th>
                            <th>Phone No</th>
                            <th>Address</th>
                            <th>Occupation</th>
                            <th>Order Total</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrderData.map((order) => (
                            <tr key={order.id}>
                                <td>
                                    <Link to={`/product/${order.id}`}>{order.id}</Link>
                                </td>
                                <td>
                                    <Link to={`/product/${order.product_id}`}>{order.product_id}</Link>
                                </td>
                                <td>
                                    <Link to={`/customer/${order.custmer_name}`}>{order.custmer_name}</Link>
                                </td>
                                <td>{new Date(order.order_date).toLocaleDateString()}</td>
                                <td>{order.order_total}</td>
                                <td>{OrderStatus(order.current_order_status)}</td>
                                <td>{order.shipping_address}</td>
                                <td className="flex space-x-2">
                                    <Link to={`/view/${order.id}`} className="py-2 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">View</Link>
                                    <button onClick={() => handleEdit(order.id)} className="py-2 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Edit</button>
                                    <button onClick={() => handleDelete(order.id)} className="py-2 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Delete</button>


                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CellMembers;
