import { Toaster } from 'react-hot-toast';
import Layout from './Layouts/Index';
import Form from './components/Form';

function App() {
	return (
		<>
			<Layout>
				<Toaster />
				<section className="flex flex-row  min-h-screen">
					<aside className=" w-2/5 hidden md:flex  px-4 py-2 ">
						<div
							className="
							bg-[#B0B9FF] w-full h-full flex flex-col justify-center items-center  rounded-lg 
							
						">
							<h1 className="text-2xl md:text-4xl text-center text-blue-700 font-bold">
								Bienvendo
							</h1>
							<p className="text-center text-white font-bold mb-4">
								Ingresa tus datos para poder ingresar
							</p>
							<img
								src="/Sat.svg"
								alt="sat logo"
								width={200}
								height={200}
							/>
						</div>
					</aside>
					<aside className="bg-white  w-full md:w-3/5 ">
						<Form />
					</aside>
				</section>
			</Layout>
		</>
	);
}

export default App;
