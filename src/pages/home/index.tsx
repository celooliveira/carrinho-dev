import {BsCartPlus} from 'react-icons/bs'

export function Home(){
    return(
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>
                
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5'>
                    <section className="w-full">
                        <img 
                        className='w-full rounded-lg max-h-70 mb-2'
                        src="https://images.kabum.com.br/produtos/fotos/373931/notebook-gamer-lenovo-gaming-3-intel-core-i5-11300h-geforce-gtx1650-8gb-ram-ssd-512gb-15-6-full-hd-windows-11-preto-82mg0009br-_1662137578_m.jpg" 
                        alt="Logo do produto" />

                        <p className='font-medium mt-1 mb-2'>Air pods pro</p>
                        <div className='flex gap-3 items-center'>
                            <strong className='text-zinc-700/90'>R$ 10,00</strong>
                            <button className='bg-zinc-900 p-1 rounded'>
                                <BsCartPlus size={20} color="#fff"/>
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}