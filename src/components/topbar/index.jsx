import logoFull from "../../assets/logo_full.svg";
import { useState, useRef, useEffect } from "react";

const Topbar = () => {
	const [showAvatarOptions, setShowAvatarOptions] = useState(false);
	const avatarOptionsRef = useRef(null);

	const handleClickOutside = (e) => {
		if (
			avatarOptionsRef.current &&
			!avatarOptionsRef.current.contains(e.target)
		) {
			setShowAvatarOptions(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});

	return (
		<>
			<div className="w-full md:w-11/12 lg:w-4/5 xl:w-9/12 h-14 mx-auto mt-4 px-5">
				<div className="flex justify-between gap-6 items-center h-full px-2">
					<div className="w-40">
						<img src={logoFull} />
					</div>
					<div className="flex justify-center flex-grow">
						<input
							type="text"
							className="h-11 px-4 w-full md:w-4/5 mx-auto border rounded-lg border-slate-200 focus:border-red-400 focus:border-2 outline-none text-sm"
							placeholder="Search Hikes, Game Drives, Holidays, Camping Trips and More..."
						/>
					</div>
					<div className="">
						<div
							className="flex justify-end items-center hover:bg-slate-100 p-2 rounded-lg cursor-pointer relative"
							onClick={() =>
								setShowAvatarOptions(!showAvatarOptions)
							}
							ref={avatarOptionsRef}>
							<div className="h-10 w-10 me-2 border border-red-400 rounded-full overflow-hidden">
								<img
									src="https://i.pravatar.cc/150?img=7"
									alt="avatar"
								/>
							</div>
							<div>
								<p className="m-0 text-sm font-bold leading-tight">
									Steve Karuma <br />
									<span className="text-xs font-medium text-red-400">
										<span>
											<i className="fas fa-coins"></i>
										</span>
										&nbsp; 67 Points
									</span>
								</p>
							</div>
							<div className="ml-4">
								{showAvatarOptions && (
									<span>
										<i className="fas fa-angle-up"></i>
									</span>
								)}
								{!showAvatarOptions && (
									<span>
										<i className="fas fa-angle-down"></i>
									</span>
								)}
							</div>
							{showAvatarOptions && (
								<div className="w-full absolute top-full left-0 mt-2 bg-white rounded-lg border border-slate-100">
									<div>
										<div className="py-2 px-4 text-sm font-medium hover:bg-slate-100">
											<span>My Account</span>
										</div>
										<div className="py-2 px-4 text-sm font-medium hover:bg-slate-100">
											<span>My Tickets</span>
										</div>
										<div className="py-2 px-4 text-sm font-medium hover:bg-slate-100">
											<span>My Trips</span>
										</div>
										<div className="py-2 px-4 text-sm font-medium hover:bg-slate-100">
											<span>Logout</span>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Topbar;
