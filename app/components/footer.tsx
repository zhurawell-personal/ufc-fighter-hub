export default function Footer() {
	return (
		<footer className="bg-black text-white border-t border-gray-800 py-8">
			<div className="mx-auto max-w-6xl px-[20px] md:px-[30px] lg:px-[40px]">
				<p className="text-center text-sm text-gray-500">
					&copy; {new Date().getFullYear()} UFC Fighter Hub. All rights reserved.
				</p>
			</div>
		</footer>
	);
}