import React from "react";
import { connect } from "react-redux";
import { filterTask } from "../js/actions";

const FilterTasks = ({ filterTask }) => {


const handleChange = (e) => filterTask(e.target.value);
return (
    <form className="filter">
        <label>No Filter</label>
        <input
        type="radio"
        name="filter-tasks"
        value="no-filter"
        onChange={handleChange}
        />
        <label> Task Done </label>
        <input
        type="radio"
        name="filter-tasks"
        value="done"
        onChange={handleChange}
        />
        <label>Task Not Done</label>
        <input
        type="radio"
        name="filter-tasks"
        value="undone"
        onChange={handleChange}
        />
    </form>
    );
};

export default connect(null, { filterTask })(FilterTasks);
