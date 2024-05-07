import { useState, useEffect } from 'react';
import Section from '../components/Section.jsx';

export default function Home() {
    const [current, setCurrent] = useState({
        section: 0,
        color: 'white'
    });

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    switch (entry.target.id) {
                        case 'section-1':
                            setCurrent({ section: 1, color: '#ff608c' });
                            break;
                        case 'section-2':
                            setCurrent({ section: 2, color: '#fff' });
                            break;
                        case 'section-3':
                            setCurrent({ section: 3, color: '#00c1b5' });
                            break;
                        case 'section-4':
                            setCurrent({ section: 4, color: '#ff651a' });
                            break;
                        case 'section-5':
                            setCurrent({ section: 5, color: '#ffbe00' });
                            break;
                        case 'section-6':
                            setCurrent({ section: 6, color: '#1d3fbb' });
                            break;
                        case 'section-7':
                            setCurrent({ section: 7, color: '#e30512' });
                            break;
                    }
                }
            })
        }, { threshold: 0.5 });

        sections.forEach(section => {
            observer.observe(section);
        });

        window.addEventListener('wheel', (event) => {
            const { deltaY } = event;
            const direction = deltaY > 0 ? 1 : -1; // Determine the scroll direction
            const step = window.innerHeight / 8; // Assume each section is the height of the viewport
            window.scrollBy({
                top: step * direction,
                behavior: 'smooth'
            });
            event.preventDefault(); // Prevent the default scroll behavior to handle it smoothly
        }, { passive: false });

        return () => {
            observer.disconnect();
        }
    },[])

    return (
        <div style={{ backgroundColor: current.color, transition: 'background-color 0.5s ease', fontFamily: 'Roboto' }}>
            <img className="absolute top-4 left-4 md:w-64 w-40" src="./logo.png" alt="" />
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
            <div className='flex flex-col items-center'>
                <p className="flex flex-col px-4 text-center md:text-left items-center md:w-auto md:items-start md:pb-4 text-lg font-bold">
                    Backstage Talks is a&nbsp;magazine of&nbsp;casual, but in&nbsp;depth dialogues on&nbsp;design and business. Our decisions shape and influence this complex world—to have a&nbsp;chance to&nbsp;make the right ones, we need to talk.
                    <br />
                    <span className="text-xs font-normal mt-2">© 2024 <a className="underline" href="http://milk.sk/" target="_blank">Published by Büro Milk</a></span>
                    <br />
                    <div className='flex flex-col md:flex-row w-full justify-between'>
                        <a href="/privacy-policy.php" className='underline'>Privacy Policy</a>
                        <a href="#" className='my-16 md:my-0 text-lg font-bold hover:underline'>info@backstagetalks.com</a>
                    </div>
                </p>
                
            </div>
        </div>
    )
}