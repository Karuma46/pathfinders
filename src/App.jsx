import Topbar from "./components/topbar";
import diani from "./assets/diani.jpg";

const CategoryPill = () => {
	return (
		<div className="border border-slate-500 p-2 rounded-lg hover:bg-[#f47959] hover:text-white hover:border-[#f47959] cursor-pointer">
			<span>
				<i className="fas fa-person-hiking"></i>
			</span>
			&nbsp;
			<span className="font-medium">Hikes</span>
		</div>
	);
};

function App() {
	return (
		<>
			<div className="mx-auto">
				<Topbar />

				<div className="w-full md:w-11/12 lg:w-4/5 xl:w-9/12 mx-auto mt-4 px-5">
					<div className="bg-slate-200 rounded-2xl h-[536px] overflow-hidden flex">
						<img
							src={diani}
							alt="slider"
							className="w-full object-cover"
						/>
					</div>
				</div>

				<div className="w-full md:w-11/12 lg:w-4/5 xl:w-9/12 mx-auto mt-4 px-5">
					<div className="flex gap-4">
						<CategoryPill />
						<CategoryPill />
						<CategoryPill />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
