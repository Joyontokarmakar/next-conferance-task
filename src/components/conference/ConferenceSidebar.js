import {useEffect, useState} from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

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