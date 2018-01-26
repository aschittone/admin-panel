import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class Alert extends React.Component {

	render() {
		return (
			<div>
				<Snackbar
					open={true}
					message={this.props.msg}
					autoHideDuration={5000}
				/>
			</div>
		);
	}
}