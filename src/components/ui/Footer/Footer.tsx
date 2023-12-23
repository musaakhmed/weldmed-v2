import React from 'react';

const Footer = () => {
	return (
		<>
			<footer className=" bg-primary mx-4 rounded-lg shadow">
				<div className="mx-auto -mt-10 w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
					<span className="text-secondary  text-sm sm:text-center">
						© 2023{' '}
						<a href="/" className="hover:underline">
							Weld Med
						</a>
						. All Rights Reserved.
					</span>
					<ul className="text-secondary mt-3 flex flex-wrap items-center text-sm  font-medium sm:mt-0">
						<li>
							<a
								href="#"
								className="me-4 hover:underline md:me-6"
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#"
								className="me-4 hover:underline md:me-6"
							>
								Privacy Policy
							</a>
						</li>
						<li>
							<a
								href="#"
								className="me-4 hover:underline md:me-6"
							>
								Licensing
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
};

export default Footer;