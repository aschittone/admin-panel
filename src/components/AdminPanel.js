import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import { Grid } from 'semantic-ui-react'
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TimePicker from 'material-ui/TimePicker';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import Product from '../adapters/product'
import Alert from './Alert'



const styles = {
	avatar: {
		margin: '1em',
		textAlign: 'left ',
	},
	input: {
		display: 'flex',
		marginLeft: '3em',
		marginRight: '3em'

	},
	welcome: {
		marginBottom: '2em',
		marginLeft: '2em',
		marginRight: '2em',
		marginTop: '2em',
	}
};

class translate extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: {
				value: ''
			},
			description: {
				value: ''
			},
			priceDetails: {
				value: ''
			},
			startTime: {
				value: ''
			},
			endTime: {
				value: ''
			},
			startDate: {
				value: ''
			},
			endDate: {
				value: ''
			},
			location: {
				value: ''
			},
			category: {
				value: '',
				text: ''
			},
			subCategory: {
				value: '',
				text: ''
			},
			msg: ''
		}
		this.submitForm = this.submitForm.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleCategoryChange = this.handleCategoryChange.bind(this)
		this.handleSubCategoryChange = this.handleSubCategoryChange.bind(this)
	}

	handleChange(event, type) {
		switch (type) {
			case 'name':
				this.setState({
					name: {
						value: event.target.value
					},
					msg: ''
				})
				break;
			case 'description':
				this.setState({
					description: {
						value: event.target.value
					},
					msg: ''
				})
				break;
			case 'priceDetails':
				this.setState({
					priceDetails: {
						value: event.target.value
					},
					msg: ''
				})
				break;
			case 'location':
				this.setState({
					location: {
						value: event.target.value
					},
					msg: ''
				})
				break;
			case 'startDate':
				this.setState({
					startDate: {
						value: event.target.value
					},
					msg: ''
				})
				break;
			case 'endDate':
				this.setState({
					endDate: {
						value: event.target.value
					},
					msg: ''
				})
				break;
			default:
				null
		}
	}

	handleSubCategoryChange(event, index, value) {
		this.setState({
			subCategory: {
				value: value,
				text: event.target.innerText
			},
			msg: ''
		});
	}

	handleCategoryChange(event, index, value) {
		this.setState({
			category: {
				value: value,
				text: event.target.innerText
			},
			msg: ''
		});
	}

	handleStartTimePicker = (event, date) => {
		this.setState({
			startTime: {
				value: date
			},
			msg: ''
		})
	};

	handleEndTimePicker = (event, date) => {
		this.setState({
			endTime: {
				value: date
			},
			msg: ''
		})
	};

	handleStartDatePicker = (event, date) => {
		this.setState({
			startDate: {
				value: date
			},
			msg: ''
		})
	};

	handleEndDatePicker = (event, date) => {
		this.setState({
			endDate: {
				value: date
			},
			msg: ''
		})
	};

	submitForm() {
		Product.create(this.state, localStorage.getItem('token'))
			.then((res) => {
				if (res.result === "Success") {
					this.setState({
						name: {
							value: ''
						},
						description: {
							value: ''
						},
						priceDetails: {
							value: ''
						},
						startTime: {
							value: ''
						},
						endTime: {
							value: ''
						},
						startDate: {
							value: ''
						},
						endDate: {
							value: ''
						},
						location: {
							value: ''
						},
						category: {
							value: '',
							text: ''
						},
						subCategory: {
							value: '',
							text: ''
						},
						msg: res.msg
					})
				} else {
					this.setState({
						msg: res.msg
					})
				}
			})
	}

	render() {
		return (
			<div>
				{this.state.msg !== '' ? <Alert msg={this.state.msg} /> : null}
				<Card style={styles.welcome}>
					<CardHeader
						style={{ textAlign: 'left' }}
						title={`Welcome, ${localStorage.getItem('current_user')}`}
						subtitle="Please fill out the information below in order to add a new product (event OR product- universal form for either, fill out all applicable fields)."
						avatar={<Avatar backgroundColor="#000" icon={<FontIcon className="material-icons">person</FontIcon>}
						/>}
					/>
					<div style={{ paddingLeft: '11%' }}>
						<Grid centered columns={4}>
							<Grid.Row >
								<Grid.Column>
									<div style={styles.input}>
										<TextField hintText={'Name of Product (Required)'}
											value={this.state.name.value}
											onChange={(event) => this.handleChange(event, 'name')}
											errorText={this.state.name.errorText}
											floatingLabelStyle={{ color: '#000' }}
											floatingLabelFocusStyle={{ color: '#000' }}
											underlineFocusStyle={{ borderColor: '#000' }}
											style={{ marginTop: '1.5em' }} />
									</div>
									<div style={styles.input}>
										<TextField hintText={'Price Details (Required)'}
											value={this.state.priceDetails.value}
											onChange={(event) => this.handleChange(event, 'priceDetails')}
											errorText={this.state.priceDetails.errorText}
											floatingLabelStyle={{ color: '#000' }}
											floatingLabelFocusStyle={{ color: '#000' }}
											underlineFocusStyle={{ borderColor: '#000' }}
											style={{ marginTop: '1.5em' }} />
									</div>
								</Grid.Column>
								<Grid.Column>
									<div style={styles.input}>
										<TextField hintText={'Product Description (Required)'}
											value={this.state.description.value}
											onChange={(event) => this.handleChange(event, 'description')}
											errorText={this.state.description.errorText}
											floatingLabelStyle={{ color: '#000' }}
											floatingLabelFocusStyle={{ color: '#000' }}
											underlineFocusStyle={{ borderColor: '#000' }}
											style={{ marginTop: '1.5em' }} />
									</div>
									<div style={styles.input}>
										<TextField hintText={'Location'}
											value={this.state.location.value}
											onChange={(event) => this.handleChange(event, 'location')}
											errorText={this.state.location.errorText}
											floatingLabelStyle={{ color: '#000' }}
											floatingLabelFocusStyle={{ color: '#000' }}
											underlineFocusStyle={{ borderColor: '#000' }}
											style={{ marginTop: '1.5em' }} />
									</div>
								</Grid.Column>
								<Grid.Column>
									<div style={styles.input}>
										<SelectField
											floatingLabelText="Category (Required)"
											value={this.state.category.value}
											onChange={this.handleCategoryChange}
											style={{ textAlign: 'left' }}
										>
											<MenuItem value={1} primaryText="Never" />
											<MenuItem value={2} primaryText="Every Night" />
											<MenuItem value={3} primaryText="Weeknights" />
											<MenuItem value={4} primaryText="Weekends" />
											<MenuItem value={5} primaryText="Weekly" />
										</SelectField>
									</div>
									<div style={styles.input}>
										<SelectField
											value={this.state.subCategory.value}
											floatingLabelText="Sub Category"
											onChange={this.handleSubCategoryChange}
											style={{ textAlign: 'left' }}
										>
											<MenuItem value={1} primaryText="Never" />
											<MenuItem value={2} primaryText="Every Night" />
											<MenuItem value={3} primaryText="Weeknights" />
											<MenuItem value={4} primaryText="Weekends" />
											<MenuItem value={5} primaryText="Weekly" />
										</SelectField>
									</div>
								</Grid.Column>
								<Grid.Column>
									<div style={styles.input}>
										<TimePicker
											value={this.state.startTime.value}
											onChange={this.handleStartTimePicker}
											hintText="Start Time (if Applicable)" style={{ marginTop: '1.5em' }}
										/>
									</div>
									<div style={styles.input}>
										<TimePicker
											value={this.state.endTime.value}
											onChange={this.handleEndTimePicker}
											hintText="End Time (if Applicable)" style={{ marginTop: '1.5em' }}
										/>
									</div>
								</Grid.Column>
								<Grid.Column>
									<div style={styles.input}>
										<DatePicker value={this.state.startDate.value} hintText="Start Date (if applicable)" style={{ marginTop: '1.5em' }} onChange={this.handleStartDatePicker} />
									</div>
									<div style={styles.input}>
										<DatePicker value={this.state.endDate.value} hintText="End Date (if applicable)" style={{ marginTop: '1.5em' }} onChange={this.handleEndTimePicker} />
									</div>
								</Grid.Column>
							</Grid.Row>
						</Grid >
					</div>
					<CardActions style={{ textAlign: 'right' }}>
						<FlatButton label="Add Product" icon={<FontIcon className="material-icons">done</FontIcon>} onClick={this.submitForm} />
					</CardActions>
				</Card >
			</div>
		)
	}
}

export default translate