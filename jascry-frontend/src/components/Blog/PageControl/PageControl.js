import React, {useState} from 'react'
import ArrowButton from '../../Jumbotron/ArrowButton/ArrowButton'
import classes from '././PageControl.module.css'

const PageControl = (props) => {
    const [currentPageNumber, setCurrentPageNumber] = useState(props.currentPage);
    const [lastPage, setLastPage] = useState(props.lastPage);
    return (
        <div className={classes.PageControl}>
            <ArrowButton 
                direction={"ArrowLeft"} 
                color={"Navy-blue"}
                //clicked={this.leftArrowClickHandler}
            />
            <p>{currentPageNumber} z {lastPage}</p>
            <ArrowButton 
                direction={"ArrowRight"} 
                color={"Navy-blue"}
                //clicked={this.rightArrowClickHandler}
            />
        </div>
    )
}

export default PageControl
