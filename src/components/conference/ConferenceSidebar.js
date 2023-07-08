import {useEffect, useState} from "react";

const navItems = [
    { id: "organizer", label: "Organizer" },
    { id: "speakers", label: "Speakers " },
    { id: "schedule", label: "Schedule" },
    { id: "sponsors", label: "Sponsors" },
];
const ConferenceSidebar = (prop) => {
    let {setSelectedTab, selectedTab, conference} = prop
    const [navItem, setNavItem] = useState(navItems);
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setScreenSize(window.innerWidth));
    }, []);


    return (
        <div>
            {navItems.map((item, key) => (
                <button
                    className={'group w-[365px] mb-8 hover:bg-primaryYellow p-2 flex justify-start gap-x-[45px] items-center rounded-lg border hover:border-primaryYellow hover:shadow-[0px 10px 20px 0px rgba(161, 161, 161, 0.25)] ' + ( selectedTab === item.id ? 'bg-primaryYellow border-primaryYellow shadow-[0px 10px 20px 0px rgba(161, 161, 161, 0.25)' : 'bg-white border-lightGray' )}
                    onClick={() =>
                        screenSize <= 768 && selectedTab === item.id
                            ? setSelectedTab("")
                            : setSelectedTab(item.id)
                    }
                >
                    <div className={'flex justify-center-items-center rounded-lg bg-white p-4'}>
                        <img src="/images/icons/bi-directional-arrow.svg" alt={item.name+' icon'}/>
                    </div>
                    <span className={'text-xl font-bold ' + ( selectedTab === item.id ? 'text-white' : 'text-darkBlue')}>{item.label}</span>
                </button>
            ))}
        </div>
    )
}
export default ConferenceSidebar;