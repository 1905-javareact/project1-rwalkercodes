import React from 'react'

export class HomeComponent extends React.Component{

    render(){
        console.log(this.props)
        return(
            <div>
                <h2>
                    Welcome to Project 1!
                </h2>
                <h3>
                    Use the Navbar to Navigate between pages
                </h3>
                
            </div>
        )
    }
}