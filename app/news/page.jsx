import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
	const response = await fetch(
		`https://www.jamuna.tv/wp-json/wp/v2/posts/?_embed&per_page=100`
	);
	const news = await response.json();
	return news.map((post) => ({
		id: post.id.toString(),
	}));
}
export const metadata = {
	title: "News",
};

const Page = async () => {
	const response = await fetch(
		`https://www.jamuna.tv/wp-json/wp/v2/posts/?_embed&per_page=12`
	);
	const news = await response.json();

	return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="container px-6 py-10 mx-auto">
					<div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
						{news.map((post) => (
							<Link
								href={`news/${post.id}`}
								key={post.id}
								className="relative"
							>
								<article className="relative">
									<div className="relative overflow-hidden object-cover object-center w-full h-64 rounded-lg lg:h-80">
										<Image
											src={
												post._embedded[
													"wp:featuredmedia"
												][0].source_url
											}
											fill={true}
											alt={post.title.rendered}
										/>
									</div>

									<div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
										<img
											className="object-cover object-center w-10 h-10 rounded-full"
											src={
												post._embedded.author[0]
													.avatar_urls[96]
											}
											alt={post._embedded.author[0].name}
										/>

										<div className="mx-4">
											<h1 className="text-sm text-gray-700 dark:text-gray-200">
												{post._embedded.author[0].name}
											</h1>
											<p className="text-sm text-gray-500 dark:text-gray-400">
												Creative Director
											</p>
										</div>
									</div>
								</article>

								<h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white truncate ">
									{post.title.rendered}
								</h1>

								<p className="text-sm text-gray-500 dark:text-gray-400">
									{post.excerpt.rendered
										.replace(/<[^>]*>/g, "")
										.substring(0, 180)}
									..
								</p>
							</Link>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Page;
