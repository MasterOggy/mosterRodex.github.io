// import React from 'react'
import React, { Component } from 'react'

export class NewCard extends Component {
    render(){
        let {title, discription,imageUrl} = this.props;
        return (
            <>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={imageUrl ? imageUrl:'https://static.toiimg.com/photo/100616500.cms'} alt="Card  cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </>
    )
}
}
export default NewCard;