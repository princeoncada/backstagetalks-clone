import { useState, useEffect } from 'react';
import Sections from '../components/Sections.jsx';
import IssueButton from '../components/IssueButton.jsx';

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
        <div style={{ backgroundColor: current.color, transition: 'background-color 0.5s ease', fontFamily: 'Roboto' }} className='flex flex-col gap-52 pt-48'>
            <img className="absolute lg:fixed top-4 left-4 md:w-64 w-40" src="./logo.png" alt="" />
            <Sections/>
            <div className='flex flex-col items-center md:items-start gap-6 lg:fixed lg:bottom-4 lg:left-4'>
                <div className="flex flex-col px-4 text-center md:text-left md:max-w-72 md:pb-4 text-lg font-bold lg:px-0">
                    Backstage Talks is a&nbsp;magazine of&nbsp;casual, but in&nbsp;depth dialogues on&nbsp;design and business. Our decisions shape and influence this complex world—to have a&nbsp;chance to&nbsp;make the right ones, we need to talk.<span className="text-xs font-normal mt-2">© 2024 <a className="underline" href="http://milk.sk/" target="_blank">Published by Büro Milk</a></span>
                </div>
                <div className='flex flex-col md:flex-row items-center w-full justify-between text-lg font-bold gap-10 mb-10 lg:mb-0 lg:px-0 px-4'>
                    <a href="#" className='underline'>Privacy Policy</a>
                    <a href="#" className='hover:underline lg:fixed lg:right-4 lg:top-4'>info@backstagetalks.com</a>
                </div>
                <div className='hidden lg:flex flex-col fixed bottom-4 right-4 text-lg gap-1'>
                    <IssueButton refId={'1'} sectionState={current.section}>
                        Issue #7
                    </IssueButton>
                    <IssueButton refId={'2'} sectionState={current.section}>
                        Issue #6
                    </IssueButton>
                    <IssueButton refId={'3'} sectionState={current.section}>
                        Issue #5
                    </IssueButton>
                    <IssueButton refId={'4'} sectionState={current.section}>
                        Issue #4
                    </IssueButton>
                    <IssueButton refId={'5'} sectionState={current.section}>
                        Issue #3
                    </IssueButton>
                    <IssueButton refId={'6'} sectionState={current.section}>
                        Issue #2
                    </IssueButton>
                    <IssueButton refId={'7'} sectionState={current.section}>
                        Issue #1
                    </IssueButton>
                </div>
            </div>
        </div>
    )
}