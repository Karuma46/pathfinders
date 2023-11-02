import Topbar from "./components/topbar";
import diani from "./assets/diani.jpg";
import longonot from "./assets/longonot.jpg";

const CategoryPill = ({ name, icon }) => {
	return (
		<div className="border border-slate-200 py-2 px-3 rounded-lg text-slate-800 hover:bg-[#f47959] hover:text-white hover:border-[#f47959] cursor-pointer">
			<span>
				<i className={`fas fa-${icon}`}></i>
			</span>
			&nbsp;
			<span className="font-medium">{name}</span>
		</div>
	);
};

const EventComponent = () => {
	return (
		<div className="my-4 cursor-pointer hover:text-[#f47959]">
			<div className="w-full aspect-square rounded-lg overflow-hidden">
				<img
					src={longonot}
					alt=""
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="my-2">
				<h2 className="font-medium">Mt. Longonot Hike</h2>
				<p className="text-sm font-medium text-slate-600 mb-2">
					Oct 14 &middot; 7 slots left
				</p>
				<h3 className="text-black font-semibold">KES 2,250</h3>
			</div>
		</div>
	);
};

function App() {
	return (
		<>
			<div className="mx-auto">
				<Topbar />

				<div className="w-full md:w-11/12 xl:w-4/5 mx-auto mt-4 px-5">
					<div className="bg-slate-200 rounded-2xl h-[536px] overflow-hidden flex">
						<img
							src={diani}
							alt="slider"
							className="w-full object-cover"
						/>
					</div>
				</div>

				<div className="w-full md:w-11/12 xl:w-4/5 mx-auto mt-4 px-5">
					<div className="flex flex-wrap gap-4 pt-4">
						<CategoryPill name="Hikes" icon="person-hiking" />
						<CategoryPill name="Game Drives" icon="paw" />
						<CategoryPill name="Holidays" icon="umbrella-beach" />
						<CategoryPill name="Camping" icon="campground" />
						<CategoryPill name="Festivals" icon="guitar" />
					</div>
				</div>

				<div className="w-full md:w-11/12 xl:w-4/5 mx-auto mt-4 px-5">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-5">
						<EventComponent />
						<EventComponent />
						<EventComponent />
						<EventComponent />
						<EventComponent />
						<EventComponent />
						<EventComponent />
						<EventComponent />
						<EventComponent />
						<EventComponent />
					</div>
				</div>

				<div className="w-full h-screen bg-slate-200">
					<div className="w-full md:w-11/12 xl:w-4/5 mx-auto mt-4 px-5"></div>
				</div>
			</div>
		</>
	);
}

export default App;
