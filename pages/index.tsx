import { Map } from "../shared/components/map/DynamicMap";

export default function Home() {
	return (
		<div>
			<main>
				{/*<section className="px-16 text-xl leading-tight text-justify">*/}
				<section className="grid grid-cols-2 py-16 gap-32 text-xl leading-tight text-justify h-[500px] border-b-2 border-amber-700 border-solid">
					<div className="w-full flex flex-col gap-2">
						<h1>Znajdz swoje miejsce</h1>
						<p>Znajdz swoje miejsce na ziemi bez formalnego wyksztalcenia, Umiejętności, nie papier</p>
					</div>
					<div className="w-full h-full">
						<div className="w-full h-full border-amber-700 border-solid border-2">
							<Map />
						</div>
					</div>
				</section>
				<section></section>
			</main>

			<footer className="py-16">footer</footer>
		</div>
	);
}
