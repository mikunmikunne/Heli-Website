
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full pt-16 pb-8 border-t border-slate-200 bg-slate-50">
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
				<div className="col-span-1 md:col-span-1">
					<div className="text-lg font-bold text-emerald-800 mb-6 ">
						Onsite Chair Massage
					</div>
					<p className=" text-sm text-slate-500 mb-8 leading-relaxed">
						Bringing relaxation and restorative wellness directly to the modern workplace across the
						nation.
					</p>
					<div className="flex gap-4">
						<a
							className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-emerald-600 transition-colors"
							href="#"
						>
							<span className="inline-block text-xl">
							<Image 
								src="/svg-pics/share-icon.svg" 
								alt="Share"
								width={24} 
								height={24}
							/>
							</span>
						</a>
					</div>
				</div>
				<div>
					<h4 className="text-gray-700  font-bold mb-6">Services</h4>
					<ul className="space-y-4">
						<li>
							<Link
								className="text-sm text-slate-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block"
								href="/our-services"
							>
								Weekly Wellness
							</Link>
						</li>
						<li>
							<Link
								className=" text-sm text-slate-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block"
								href="/our-services"
							>
								Corporate Events
							</Link>
						</li>
						<li>
							<Link
								className=" text-sm text-slate-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block"
								href="/our-services"
							>
								Employee Appreciation
							</Link>
						</li>
						<li>
							<Link
								className=" text-sm text-slate-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block"
								href="/our-services"
							>
								Trade Shows
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h4 className="text-gray-700 font-bold mb-6">Company</h4>
					<ul className="space-y-4">
						<li>
							<Link
								className=" text-sm text-slate-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block"
								href="/about"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								className=" text-sm text-slate-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block"
								href="/companies"
							>
								For Companies
							</Link>
						</li>
						<li>
							<Link
								className=" text-sm text-slate-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block"
								href="/blog"
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								className=" text-sm text-slate-500 hover:text-emerald-600 hover:translate-x-1 transition-all inline-block"
								href="/contact-us"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h4 className="text-gray-700 font-bold  mb-6">Contact</h4>
					<ul className="space-y-4">
						<li className="text-gray-500 flex items-center gap-2">
							info@onsitechairmassage.com
						</li>
						<li className="text-gray-500 flex items-center gap-2">
							(555) 123-4567
						</li>
						
						
					</ul>
				</div>
			</div>
			<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200/60 text-center">
				<p className=" text-sm text-slate-500">
					&copy; {new Date().getFullYear()} Onsite Chair Massage. All rights reserved.
				</p>
			</div>
		</footer>
	);
}