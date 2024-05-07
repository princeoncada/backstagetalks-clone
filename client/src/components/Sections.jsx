import Section from './Section.jsx';

export default function Sections() {
    return <>
        <Section id={"section-1"} image={"./backstagetalks_cover_issue_7.png"}>
            <p className="text-lg">Issue #7</p>
            <div className='flex flex-col justify-center items-center'>
                <p><a href="#" className='text-white hover:underline text-sm'>BUY HERE</a> (Europe)</p>
                <p><a href="#" className='text-white hover:underline text-sm'>BUY HERE</a> (UK & Overseas)</p>
            </div>
            <p>or in <a href="#" className='text-white hover:underline text-sm'>selected stores</a></p>
        </Section>
        <Section id={"section-2"} image={"./backstagetalks_cover_issue_6.png"}>
            <p className='text-lg'>Issue #6</p>
            <p><a href="#" style={{ color: "#e568ac" }} className='hover:underline text-sm'>BUY HERE</a></p>
            <p>or in <a href="#" style={{ color: "#e568ac" }} className='hover:underline text-sm'>selected stores</a></p>
        </Section>
        <Section id={"section-3"} image={"./backstagetalks_cover_issue_5.png"}>
            <p className='text-lg'>Issue #5</p>
            <p><a href="#" className='text-white hover:underline text-sm'>BUY HERE</a></p>
            <p>or in <a href="#" className='text-white hover:underline text-sm'>selected stores</a></p>
        </Section>
        <Section id={"section-4"} image={"./backstagetalks_cover_issue_4.png"}>
            <p className='text-lg'>Issue #4 is sold out.</p>
            <p className='px-4 text-center'>If you are lucky, you may get the last pieces in <a href="#" className='text-white hover:underline text-sm'>selected stores</a></p>
        </Section>
        <Section id={"section-5"} image={"./backstagetalks_cover_issue_3.png"}>
            <p className='text-lg'>Issue #3</p>
            <p><a href="#" className='text-white hover:underline text-sm'>BUY HERE</a></p>
            <p>or in <a href="#" className='text-white hover:underline text-sm'>selected stores</a></p>
        </Section>
        <Section id={"section-6"} image={"./backstagetalks_cover2017.png"}>
            <p className='text-lg'>Issue #2</p>
            <p><a href="#" className='text-white hover:underline text-sm'>BUY HERE</a></p>
            <p>or in <a href="#" className='text-white hover:underline text-sm'>selected stores</a></p>
        </Section>
        <Section id={"section-7"} image={"./backstagetalks_cover2016_n.png"}>
            <p className='text-lg'>Issue #1 is sold out.</p>
            <p className='px-4 text-center'>If you are lucky, you may get the last pieces in <a href="#" className='text-white hover:underline text-sm'>selected stores</a></p>
        </Section>
    </>
}