import React from 'react';
import './columnS.scss'
import {AddColumn, Column, ColumnsHeader} from "../index";
import {useSelector} from "react-redux";

const ColumnS = () => {
    const columns = useSelector((state) => state.columnsR.columns)

    return (
        <div className='columnS'>
            <ColumnsHeader/>
            <div className="columnS__wrapper">
                {columns.map(column => {
                    return (
                        <Column
                            key={column.id}
                            column={column}
                        />
                    )
                })}
                <AddColumn/>
            </div>
        </div>
    );
};

export default ColumnS;
