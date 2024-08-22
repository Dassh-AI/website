'use client'

import { useState } from 'react';

export default function Emp() {
  // Sample data with 20 rows
  const data = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Development', location: 'New York', salary: '$120,000', joiningDate: '2020-05-20', status: 'Active' },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', department: 'Product', location: 'San Francisco', salary: '$150,000', joiningDate: '2019-04-15', status: 'Active' },
    { id: 3, name: 'Robert Johnson', position: 'Designer', department: 'Design', location: 'Remote', salary: '$100,000', joiningDate: '2021-08-10', status: 'Active' },
    { id: 4, name: 'Alice Brown', position: 'HR Manager', department: 'Human Resources', location: 'Chicago', salary: '$95,000', joiningDate: '2020-12-01', status: 'Active' },
    { id: 4, name: 'Alice Brown', position: 'HR Manager', department: 'Human Resources', location: 'Chicago', salary: '$95,000', joiningDate: '2020-12-01', status: 'Active' },
    { id: 4, name: 'Alice Brown', position: 'HR Manager', department: 'Human Resources', location: 'Chicago', salary: '$95,000', joiningDate: '2020-12-01', status: 'Active' },
    { id: 4, name: 'Alice Brown', position: 'HR Manager', department: 'Human Resources', location: 'Chicago', salary: '$95,000', joiningDate: '2020-12-01', status: 'Active' },
    { id: 4, name: 'Alice Brown', position: 'HR Manager', department: 'Human Resources', location: 'Chicago', salary: '$95,000', joiningDate: '2020-12-01', status: 'Active' },
    { id: 4, name: 'Alice Brown', position: 'HR Manager', department: 'Human Resources', location: 'Chicago', salary: '$95,000', joiningDate: '2020-12-01', status: 'Active' },
    { id: 4, name: 'Alice Brown', position: 'HR Manager', department: 'Human Resources', location: 'Chicago', salary: '$95,000', joiningDate: '2020-12-01', status: 'Active' },
    { id: 4, name: 'Alice Brown', position: 'HR Manager', department: 'Human Resources', location: 'Chicago', salary: '$95,000', joiningDate: '2020-12-01', status: 'Active' },
    { id: 4, name: 'Alice Brown', position: 'HR Manager', department: 'Human Resources', location: 'Chicago', salary: '$95,000', joiningDate: '2020-12-01', status: 'Active' },
    { id: 4, name: 'Alice Brown', position: 'HR Manager', department: 'Human Resources', location: 'Chicago', salary: '$95,000', joiningDate: '2020-12-01', status: 'Active' },
    { id: 1, name: 'Alice Brown', position: 'HR Manager', department: 'Human Resources', location: 'Chicago', salary: '$95,000', joiningDate: '2020-12-01', status: 'Active' },
    { id: 2, name: 'Alice Brown', position: 'HR Manager', department: 'Human Resources', location: 'Chicago', salary: '$95,000', joiningDate: '2020-12-01', status: 'Active' },
    // Add more data up to 20 rows...
  ];

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const totalresult = Math.ceil(data.length);

  // Get the current page data
  const currentData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  // Handle page change
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="overflow-x-auto">
		<div className='overflow-x-auto'>
			<table className="min-w-full border-collapse">
				<thead>
				<tr>
					<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
					<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
					<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
					<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
					<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
					<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
					<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joining Date</th>
					<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Status</th>
				</tr>
				</thead>
				<tbody>
				{currentData.map((employee, index) => (
					<tr key={index} className="bg-white even:bg-gray-50">
					<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{employee.id}</td>
					<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.name}</td>
					<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.position}</td>
					<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.department}</td>
					<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.location}</td>
					<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.salary}</td>
					<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.joiningDate}</td>
					<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.status}</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
		<hr className='bg-black h-0.5'/>


      {/* Pagination Controls */}
	  <div className='flex justify-between items-center mt-4'>
	  	<span>
    		{totalresult} <span className='text-md text-gray-600'>results</span>
        </span>
		<div className="flex justify-end space-x-3 items-center">
			<button
			onClick={handlePreviousPage}
			disabled={currentPage === 1}
			style={{border:'solid',borderColor:'black'}}
			className={`px-4 py-1 text-black rounded ${
				currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-green'
			}`}
			>
			Previous
			</button>
			<span>
			Page {currentPage} of {totalPages}
			</span>
			<button
			onClick={handleNextPage}
			disabled={currentPage === totalPages}
			style={{border:'solid',borderColor:'black'}}
			className={`px-4 py-1 text-black rounded ${
				currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-green'
			}`}
			>
			Next
			</button>
		</div>
	  </div>
    </div>
  );
}
