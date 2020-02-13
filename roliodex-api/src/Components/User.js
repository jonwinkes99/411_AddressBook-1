import React, { Component } from 'react'
class User extends Component {
    state = {
        showDetails: false
    }
    toggleDetails = () => this.setState({ showDetails: !this.state.showDetails})
    render() {
        const {name, picture} = this.props.user
        return (
            <div>
            <img src={picture.large} />
            <p>{name.first}</p>
            <button onClick={this.toggleDetails}>Show Details</button>
            {
                this.state.showDetails ? <p>true</p> : <p>false</p>
            }
            </div>
        )
    }
}
export default User