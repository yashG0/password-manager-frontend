import React, { useEffect, useState } from 'react'
import { deletePass, getAllPass, updatePass } from '../utils/HandleApi';

const Output = () => {
	// const storedFormData = JSON.parse(localStorage.getItem("formData"));

	const [form, setForm] = useState([]);

	useEffect(() => {
		getAllPass(setForm);
		// console.log("MY FORM DATA",form);
	});

	return (
		<>
			<section class="text-gray-600 body-font min-h-screen">
				<div class="container px-5 py-24 mx-auto">
					<div class="flex flex-col text-center w-full mb-20">
						<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Your saved passwords</h1>
						<p class="lg:w-2/3 mx-auto leading-relaxed text-base">Browse through your saved passwords below. Keep your digital life secure and organized.</p>
					</div>
					<div class="flex flex-wrap -m-2">
						{
							form?.map((data, index) => (

								<div class="p-1 lg:w-1/3 md:w-1/2 w-full" key={index}>
									<div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
										<div alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80">
											<lord-icon
												src="https://cdn.lordicon.com/vvqcrgre.json"
												trigger="hover"
												style={{ width: '50px', height: '50px' }}>
											</lord-icon>
										</div>
										<div class="flex-grow">
											<h2 class="text-gray-900 title-font font-medium">{data.sitename}</h2>
											{/* <h2 class="text-gray-900 title-font font-medium">{data._id}</h2> */}
											<p class="text-gray-500">{data.password}</p>
										</div>
										<div className='h-full flex flex-col justify-between'>

											<div className='hover:cursor-pointer' onClick={() => updatePass(data._id, data)}>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
													<path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
												</svg>
											</div>

											<div className='hover:cursor-pointer' onClick={() => deletePass(data._id)}>
												<lord-icon
													src="https://cdn.lordicon.com/zxvuvcnc.json"
													trigger="hover"
													style={{ width: '17px', height: '17px' }}>
												</lord-icon>
											</div>
										</div>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</section >
		</>
	)
}

export default Output
