import React from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends React.Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			zipCode: ''
		},
		loading: false
	};

	orderHandler(event) {
		event.preventDefault();
		this.setState({ loading: true });
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: 'Tigran A',
				address: {
					street: '123 teststreet',
					zipCode: '41133',
					country: 'USA'
				},
				email: 'test@test.com'
			},
			deliveryMethod: 'fastest'
		};
		axios
			.post('/orders.json', order)
			.then(response => {
				this.setState({ loading: false });
				this.props.history.push('/');
			})
			.catch(error => ({ loading: false }));
	}
	render() {
		let form = (
			<form>
				<Input inputtype="input" type="text" name="name" placeholder="your name" />
				<Input inputtype="input" type="email" name="email" placeholder="your email" />
				<Input inputtype="input" type="text" name="street" placeholder="street" />
				<Input inputtype="input" type="text" name="zip" placeholder="zip" />
				<Button btnType="Success" clicked={this.orderHandler}>
					Order
				</Button>
			</form>
		);
		if (this.state.loading) {
			form = <Spinner />;
		}
		return (
			<div className={classes.ContactData}>
				<h4>Enter your Contact Data</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;
