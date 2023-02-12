import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata = {
	title: {
		default: "Jamuna Television",
		template: "%s | Jamuna Television",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
				<section className="w-full min-h-screen bg-white dark:bg-gray-900">
					<div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
						<nav className="md:flex md:items-center md:justify-between">
							<div className="flex items-center justify-between">
								<button className="text-gray-500 md:hidden dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none">
									<span x-show="isOpen">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</span>

									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
											/>
										</svg>
									</span>
								</button>

								<Link href="/">
									<Image
										width={280}
										height={80}
										className="w-auto h-6 sm:h-7"
										src="https://www.jamuna.tv/wp-content/themes/jtv-news/img/logo.png"
										alt="Jamuna Television"
									/>
								</Link>
							</div>

							<div className="absolute inset-x-0 z-20 w-full px-6 py-8 mt-8 space-y-6 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 top-16 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:space-y-0 md:-mx-6 md:flex md:items-center">
								<Link
									href="/"
									className="block text-gray-600 transition-colors duration-300 dark:text-white md:px-6 hover:text-blue-500 dark:hover:text-blue-400"
								>
									Home
								</Link>
								<Link
									href="/news"
									className="block text-gray-600 transition-colors duration-300 dark:text-white md:px-6 hover:text-blue-500 dark:hover:text-blue-400"
								>
									News
								</Link>
								<Link
									href="/account"
									className="block text-gray-600 transition-colors duration-300 dark:text-white md:px-6 hover:text-blue-500 dark:hover:text-blue-400"
								>
									Account
								</Link>

								<button className="w-full px-5 py-3 transition-colors duration-300 bg-gray-100 rounded-md dark:bg-gray-800 md:w-auto md:mx-6 hover:bg-gray-200 dark:hover:bg-gray-700">
									<div className="flex items-center justify-center -mx-1">
										<p className="mx-1 text-sm text-gray-600 dark:text-white">
											Coming Soon on
										</p>

										<svg
											className="w-6 h-6 mx-1 fill-gray-600 dark:fill-white"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 384 512"
										>
											<path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
										</svg>
									</div>
								</button>
							</div>
						</nav>

						{children}

						<footer className="flex flex-col items-center mt-12 sm:flex-row sm:justify-between">
							<a
								href="#"
								className="text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
							>
								Privacy Policy
							</a>

							<div className="mt-4 -mx-4 md:mt-0">
								<a
									href="#"
									className="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
								>
									Facebook
								</a>

								<a
									href="#"
									className="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
								>
									Instagram
								</a>

								<a
									href="#"
									className="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
								>
									LinkedIn
								</a>
							</div>
						</footer>
					</div>
				</section>
			</body>
		</html>
	);
}
