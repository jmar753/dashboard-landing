export default function Home(){
    return(
        <div className="text-white neutral-800">
            <h1 className="flex px-8 items-center font-semibold text-3xl h-16 border-b-2 border-neutral-400">Dashboard</h1>
            <div className="grid grid-cols-3 px-8 py-4">
                {/* SBD Display */}
                <div className="space-y-3">
                    <h1>Current Estimated Maxes</h1>
                    <div className="bg-teal-400 p-4 rounded-2xl text-neutral-900 font-semibold">
                        <div className="flex justify-between">
                            <p className="text-xl">Squat</p>
                            <p className="text-xl">315</p>
                        </div>
                    </div>
                    <div className="bg-teal-400 p-4 rounded-2xl text-neutral-900 font-semibold">
                        <div className="flex justify-between">
                            <p className="text-xl">Squat</p>
                            <p className="text-xl">315</p>
                        </div>
                    </div>
                    <div className="bg-teal-400 p-4 rounded-2xl text-neutral-900 font-semibold">
                        <div className="flex justify-between">
                            <p className="text-xl">Squat</p>
                            <p className="text-xl">315</p>
                        </div>
                    </div>
                       
                </div>
                <div className="col-span-2">Wilk Score Progression</div>
            </div>
        </div>
    )
}