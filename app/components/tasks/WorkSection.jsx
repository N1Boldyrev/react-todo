import React, { useEffect } from "react";
import { Checkbox } from "./Checkbox.jsx";
import { InstrumentsButtons } from "./InstrumentsButtons.jsx";
import { InstrumentsInput } from "./InstrumentsInput.jsx";

export function WorkSection(props) {
    useEffect(() => {
        if (props.globalTasks.wasLoadedFromServer == false) props.getTasks(props.globalTasks.listId);
    });

    let instruments;
    let tasks;

    if (props.tasks.length == 0) {
        tasks = <div className="tasksEmpty">Пусто</div>;
    } else {
        tasks = (
            <div className="tasks">
                {props.tasks.map(elem => (
                    <Checkbox
                        innerText={elem.text}
                        className={elem.className}
                        checkboxClass={elem.checkboxClass}
                        setActiveTask={props.setActiveTask}
                        setChecked={props.setChecked}
                        id={elem.id}
                        key={elem.id}
                    />
                ))}
            </div>
        );
    }

    if (props.instruments == "instruments close")
        instruments = (
            <InstrumentsInput
                createNewTask={props.createNewTask}
                setPageState={props.setPageState}
                globalTasks={props.globalTasks}
                setListId={props.setListId}
                setLoadedFalse={props.setLoadedFalse}
            />
        );
    else if (props.instruments == "instruments open")
        instruments = (
            <InstrumentsButtons
                closeInstruments={props.closeInstruments}
                currentTask={props.currentTask}
                currentTaskText={props.currentTaskText}
                deleteTask={props.deleteTask}
                setPageState={props.setPageState}
                setTextChangerValue={props.setTextChangerValue}
            />
        );

    return (
        <div className="workSection">
            {tasks}
            {instruments}
        </div>
    );
}
