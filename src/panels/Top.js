import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Group, Header, View, ScreenSpinner, Div, Card } from '@vkontakte/vkui';

import './Top.css';

const Top = props => {
	const [pastes, setPastes] = useState([])
	const [users, setUsers] = useState([])
	const [popout, setPopout] = useState(null);

	function getTop() {
		setPopout(<ScreenSpinner/>)

		fetch('https://lpjakewolfskin.ru/api/v1/paste/get/top/')
		  .then(response => {
				if (!response.ok) {
					throw new Error(response.statusText)
				}
				return response.json()
				}).catch(err=>{
				console.log(err)
			})
		  .then(pastes => {
			setPopout(null)
			setPastes(pastes)
		  })

		fetch('https://lpjakewolfskin.ru/api/v1/member/get/top/')
		.then(response => {
			if (!response.ok) {
				throw new Error(response.statusText)
			}
			return response.json()
			}).catch(err=>{
			console.log(err)
		})
		.then(users => {
		setPopout(null)
		setUsers(users)
		})
	}

	useEffect(() => {
		getTop()
	  }, [])

	return (
		<View activePanel={props.id} popout={popout}>
			<Panel id={props.id}>
				<PanelHeader
					left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
				>
					ТОП
				</PanelHeader>
				<Group header={<Header mode="secondary">ТОП паст</Header>}>
					<Div>
						{
							pastes.map( (paste, index) => {
								return (
									<Card key={paste.id} style={{marginBottom: ".5rem"}}>
										<Div style={{padding: '.5rem'}}>
											{index+1} {paste.anno} {paste.cnt} {paste.rating}
										</Div>
									</Card>
								)
							})
						}
					</Div>
				</Group>
				<Group header={<Header mode="secondary">ТОП пользователей</Header>}>
					<Div>
						{
							users.map( (user, index) => {
								return (
									<Card key={user.id} style={{marginBottom: ".5rem"}}>
										<Div style={{padding: '.5rem'}}>
											{index+1} {user.name} {user.cnt} {user.avg}
										</Div>
									</Card>
								)
							})
						}
					</Div>
				</Group>
			</Panel>
		</View>
	)
}

Top.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Top;
