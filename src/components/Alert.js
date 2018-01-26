import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class SnackbarExampleSimple extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div>
				<Snackbar
					open={true}
					message={this.props.msg}
					autoHideDuration={4000}
				/>
			</div>
		);
	}
}