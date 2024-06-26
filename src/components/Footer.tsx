// Footer.tsx

export default function Footer() {
    return (
        <footer className="text-white p-8">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <div className="flex items-center ml-0 lg:ml-8">
                    <h1 className='text-4xl font-bold text-white'>WebStore</h1>
                </div>
                <div className="md:flex space-x-6 lg:space-x-12 mt-4 md:mt-0">
                    <a className="text-gray-400 text-base md:text-lg">Sobre</a>
                    <a className="text-gray-400 text-base md:text-lg">Projeto</a>
                    <a className="text-gray-400 text-base md:text-lg">Comunidade</a>
                    <a className="text-gray-400 text-base md:text-lg">Recursos</a>
                </div>
            </div>
        </footer>
    );
}