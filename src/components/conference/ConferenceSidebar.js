import {useEffect, useState} from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import Speakers from "@/components/conference/Speakers";
import Organizers from "@/components/conference/Organizers";
import Schedule from "@/components/conference/Schedule";
import Sponsors from "@/components/conference/Sponsors";

const ConferenceSidebar = (prop) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsBrowser(true);
        }
    }, []);

    let {setSelectedTab, selectedTab, conference} = prop

    const navItems = [
        { id: "organizer", label: "Organizer" },
        { id: "speakers", label: "Speakers " },
        { id: "schedule", label: "Schedule" },
        { id: "sponsors", label: "Sponsors" },
    ];

    const [navItem, setNavItem] = useState(navItems);
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    const handleDrop = (droppedItem) => {
        if (!droppedItem.destination) return;
        let updatedList = [...navItem];
        const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
        updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
        setNavItem(updatedList);
    };

    useEffect(() => {
        window.addEventListener("resize", () => setScreenSize(window.innerWidth));
    }, []);


    return (
        <div>
            <DragDropContext onDragEnd={handleDrop}>
                <div>
                    {isBrowser ? (
                        <Droppable droppableId="droppable">
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {navItem.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <div
                                                        onClick={() =>
                                                        screenSize <= 768 && selectedTab === item.id
                                                            ? setSelectedTab("")
                                                            : setSelectedTab(item.id)
                                                    }>

                                                        <div
                                                            className={
                                                                'group w-[327px] lg:w-[365px] mb-8 hover:bg-primaryYellow p-2 flex justify-start gap-x-[45px] items-center rounded-lg border hover:border-primaryYellow hover:shadow-btnShadow '
                                                                + ( selectedTab === item.id
                                                                    ? 'bg-primaryYellow border-primaryYellow shadow-btnShadow'
                                                                    : 'bg-white border-lightGray'
                                                                )
                                                            }
                                                        >
                                                            <div className={'flex justify-center-items-center rounded-lg bg-white p-4'}>
                                                                <img src="/images/icons/bi-directional-arrow.svg" alt={item.name+' icon'}/>
                                                            </div>
                                                            <span className={'text-xl font-bold ' + ( selectedTab === item.id ? 'text-white' : 'text-darkBlue')}>{item.label}</span>
                                                        </div>
                                                        {item.id === selectedTab ? (
                                                            <div className="w-[327px] bg-primaryWhite px-5 py-5 rounded-lg space-y-3 hidden mediumDevice:block smallDevice:px-3 smallDevice:py-3">
                                                                {selectedTab === "organizer" && <Organizers organizer={conference.organizers} />}
                                                                {selectedTab === "speakers" && <Speakers speakers={conference.speakers} />}
                                                                {selectedTab === "schedule" && <Schedule schedules={conference.schedules} />}
                                                                {selectedTab === "sponsors" && <Sponsors sponsors={conference.sponsors} />}
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                        ) : null
                    }
                </div>
            </DragDropContext>
        </div>
    )
}
export default ConferenceSidebar;