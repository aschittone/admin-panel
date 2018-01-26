import React from 'react';
import Formsy from 'formsy-react';
import RaisedButton from 'material-ui/RaisedButton';
import { FormsyText } from 'formsy-material-ui/lib';
import User from '../adapters/user'
import { Card, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import LockIcon from 'material-ui/svg-icons/action/lock-outline';
import Alert from './Alert';

const styles = {
	main: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
		alignItems: 'center',
		justifyContent: 'center',
	},
	card: {
		minWidth: 300,
	},
	avatar: {
		margin: '1em',
		textAlign: 'center ',
	},
	form: {
		padding: '0 1em 1em 1em',
	},
	input: {
		display: 'flex',
	},
	hint: {
		textAlign: 'center',
		marginTop: '1em',
		color: '#000',
	},
};


class AdminLogin extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			canSumit: false,
			errorMsg: ''
		}
		this.enableButton = this.enableButton.bind(this)
		this.disableButton = this.disableButton.bind(this)
		this.submitForm = this.submitForm.bind(this)

	}

	componentWillMount() {
		if (localStorage.getItem('token')) {
			this.props.history.push("/")
		}
	}

	enableButton() {
		this.setState({
			canSubmit: true,
		});
	}

	disableButton() {
		this.setState({
			canSubmit: false,
		});
	}

	submitForm(data, event) {
		this.setState({
			errorMsg: ''
		})
		const userParams = {
			name: data.username,
			password: data.password
		}
		User.login(userParams)
			.then((res) => {
				if (res.msg === "Success") {
					localStorage.setItem("token", res.jwt)
					localStorage.setItem("current_user", res.user.name)
					this.props.history.push('/')
				} else {
					this.setState({
						errorMsg: res.msg
					})
				}
			})
	}

	render() {

		return (
			<div>
				{this.state.errorMsg === 'Username or Password Incorrect' ? <Alert msg={this.state.errorMsg} /> : null}
				<div style={{ ...styles.main }}>
					<Card style={styles.card}>
						<div style={styles.avatar}>
							<Avatar backgroundColor='#000' icon={<LockIcon />} size={60} />
						</div>
						<Formsy.Form
							onValid={this.enableButton}
							onInvalid={this.disableButton}
							onValidSubmit={this.submitForm}
							onInvalidSubmit={this.notifyFormError}>
							<div style={styles.form}>
								<p style={styles.hint}>Admin Panel Login</p>
								<div style={styles.input} >
									<FormsyText
										name="username"
										required
										hintText="Username"
										floatingLabelText="Username"
										floatingLabelStyle={{ color: '#000' }}
										floatingLabelFocusStyle={{ color: '#000' }}
										underlineFocusStyle={{ borderColor: '#000' }}

									/>
								</div>
								<div style={styles.input} >
									<FormsyText
										name="password"
										type="password"
										required
										hintText="Password"
										floatingLabelText="Password"
										updateImmediately
										floatingLabelStyle={{ color: '#000' }}
										floatingLabelFocusStyle={{ color: '#000' }}
										underlineFocusStyle={{ borderColor: '#000' }}

									/>
								</div>
							</div>
							<CardActions>
								<RaisedButton
									type="submit"
									label="Login"
									disabled={!this.state.canSubmit}
									fullWidth
								/>
							</CardActions>
						</Formsy.Form>
					</Card>
				</div>
			</div >
		);
	}
}

export default AdminLogin;