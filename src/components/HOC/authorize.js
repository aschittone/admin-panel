import React from 'react'

function Authorize(RenderedComponent, props) {

	return class extends React.Component {

		// Authorizes a Auth before the component is rendered
		componentWillMount() {
			if (!localStorage.getItem('token')) {
				this.props.history.push("/login")
			}
		}

		render() {
			return (<RenderedComponent history={this.props.history} />)
		}
	}
}

export default Authorize