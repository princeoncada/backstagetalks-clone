export default function Section({ id, image, children }) {
    return (
        <section id={id} className="flex justify-center items-center h-screen w-screen xl:snap-start max-w-full">
            <div className='flex flex-col justify-center items-center'>
                <img src={`./${image}`} alt="" className='w-96' />
                <div className='flex flex-col justify-center items-center gap-4 font-bold'>
                    {children}
                </div>
            </div>
        </section>
    )
}