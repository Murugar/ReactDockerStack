import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Login from './auth/login';

export default class TodoApp extends Component {

	static contextTypes = {
		store: PropTypes.object.isRequired,
	};

	render() {
		return (
			<div>
				<Login />
				<nav>
					<ul>
						<li><Link to="/" activeStyle={{ color: 'blue' }}>Home</Link></li>
						<li><Link to="/numbers" activeStyle={{ color: 'blue' }}>Number Manager</Link></li>
						<li><Link to="/links" activeStyle={{ color: 'blue' }}>Url Shortener</Link></li>
					</ul>
				</nav>
				<section>
					{this.props.children}
				</section>
			</div>
		);
	}
}
