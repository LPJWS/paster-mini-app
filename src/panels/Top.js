import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';

import { Panel, PanelHeader, PanelHeaderBack, Group, Header, View, ScreenSpinner, Div, Card, Cell, Avatar } from '@vkontakte/vkui';

import './Top.css';

const Top = props => {
	const [pastes, setPastes] = useState([])
	const [users, setUsers] = useState([])
	const [you, setYou] = useState(null);
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

	function getYou() {
		setPopout(<ScreenSpinner/>)

		fetch('https://lpjakewolfskin.ru/api/v1/member/get_vk/' + props.fetchedUser.id)
		  .then(response => {
				if (!response.ok) {
					throw new Error(response.statusText)
				}
				return response.json()
				}).catch(err=>{
				console.log(err)
			})
		  .then(you => {
			setPopout(null)
			setYou(you)
		  })
	}

	useEffect(() => {
		getTop()
		getYou()
	  }, [])

	return (
		<View activePanel={props.id} popout={popout}>
			<Panel id={props.id}>
				<PanelHeader
					left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
				>
					ТОП
				</PanelHeader>
				<Group header={<Header mode="secondary">Это ты</Header>}>
					<Cell
						before={props.fetchedUser.photo_200 ? <Avatar src={props.fetchedUser.photo_200}/> : null}
						description={you ? "Всего оценок: " + you.cnt + ', средняя: ' + you.avg : ""}
					>
						{`${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`}
					</Cell>
				</Group>
				<Group header={<Header mode="secondary">ТОП паст</Header>}>
					<Div>
						{
							pastes.map( (paste, index) => {
								return (
									<Cell
										disabled
										key={paste.id} 
										style={{marginBottom: ".5rem"}}
										description={"Всего оценок: " + paste.cnt + ', рейтинг: ' + paste.rating}
										before={<Cell disabled>{index+1}</Cell>}
									>
										{paste.anno} 
									</Cell>
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
									<Cell
										disabled
										key={user.id} 
										style={{marginBottom: ".5rem"}}
										description={"Всего оценок: " + user.cnt + ', средняя: ' + user.avg}
										before={<Cell disabled>{index+1}</Cell>}
									>
										{user.name} 
									</Cell>
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
