import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
	const response = await fetch(
		`https://www.jamuna.tv/wp-json/wp/v2/posts/?_embed&order=desc&per_page=100`
	);
	const posts = await response.json();
	return posts.map((post) => ({
		id: post.id.toString(),
	}));
}

export const metadata = {};

const Page = async ({ params }) => {
	const response = await fetch(
		`https://www.jamuna.tv/wp-json/wp/v2/posts/${params.id}/?_embed`
	);
	const post = await response.json();
	metadata.title = post.title.rendered;

	const cat_id = post._embedded["wp:term"][0][0].id ?? 1;
	const categories = await fetch(
		`https://www.jamuna.tv/wp-json/wp/v2/posts/?_embed&categories=${cat_id}&per_page=5`
	);
	const cats = await categories.json();

	return (
		<>
			<article class="bg-white dark:bg-gray-900">
				<div class="container px-6 py-10 mx-auto">
					<div class="lg:flex lg:-mx-6">
						<div class="lg:w-3/4 lg:px-6">
							<div class="relative object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl overflow-hidden">
								<Image
									src={
										post._embedded["wp:featuredmedia"][0]
											.source_url
									}
									fill={true}
									alt={post.title.rendered}
								/>
							</div>

							<div>
								{/* <p class="mt-6 text-sm text-blue-500 uppercase">
									Want to know
								</p> */}

								<h1 class="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
									{post.title.rendered}
								</h1>

								<div class="flex items-center mt-6">
									<img
										class="object-cover object-center w-10 h-10 rounded-full"
										src={
											post._embedded.author[0]
												.avatar_urls[96]
										}
										alt={post._embedded.author[0].name}
									/>

									<div class="mx-4">
										<h1 class="text-sm text-gray-700 dark:text-gray-200">
											{post._embedded.author[0].name}
										</h1>
										<p class="text-sm text-gray-500 dark:text-gray-400">
											Reporter
										</p>
									</div>
								</div>
								<div
									className="relative py-6"
									id="content"
									dangerouslySetInnerHTML={{
										__html: post.content.rendered,
									}}
								></div>
							</div>
						</div>

						<div class="mt-8 lg:w-1/4 lg:mt-0 lg:px-6 space-y-5 flex flex-col">
							{cats.map((cat) => (
								<>
									{post.id != cat.id ? (
										<Link
											href={`news/${cat.id}`}
											key={cat.id}
											className="relative "
										>
											<div class="relative object-cover object-center w-full h-30 xl:h-40 rounded-xl overflow-hidden">
												<Image
													src={
														cat._embedded[
															"wp:featuredmedia"
														][0].source_url
													}
													fill={true}
													alt={cat.title.rendered}
												/>
											</div>
											<h2 className="mt-3 text-sm font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-lg truncate">
												{cat.title.rendered}
											</h2>
										</Link>
									) : (
										""
									)}
								</>
							))}
						</div>
					</div>
				</div>
			</article>
		</>
	);
};

export default Page;
// https://jsonplaceholder.typicode.com/posts/
