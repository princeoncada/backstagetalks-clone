export default function IssueButton({ refId, sectionState, children }) {
    return (
        <button onClick={(e) => {
            let target = e.target;
            let section = document.querySelector(target.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        }}
            href={`#section-${refId}`} className={`hover:underline ${sectionState == parseInt(refId) ? "font-bold" : ''}`}>{children}</button>
    );
}