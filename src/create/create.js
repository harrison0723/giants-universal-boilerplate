import './create.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { create } from './tools/actions'
import TitleForm from './modules/title'

export class Create extends Component {
    render() {
        const { create, auth } = this.props
        const authenticated = auth.isLoaded && !auth.isEmpty

        return (
            <div className="ssr create">
                <h1>Create Page</h1>
                <TitleForm create={create} authenticated={authenticated} />
            </div>
        )
    }
}

const mapState = state => ({
    auth: state.firebase.auth
})

const actions = { create }

export default connect(mapState, actions)(Create)