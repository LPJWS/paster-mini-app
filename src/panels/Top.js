import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';

import { Panel, PanelHeader, Group, Header, View, ScreenSpinner, Div, Cell, Avatar, Tabs, TabsItem } from '@vkontakte/vkui';

import './Top.css';

const Top = props => {
	const [pastes, setPastes] = useState([])
	const [users, setUsers] = useState([])
	const [you, setYou] = useState(null);
	const [popout, setPopout] = useState(null);
	const [activeTab, setActiveTab] = useState('paste');


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
				<PanelHeader>
					ТОП
				</PanelHeader>
				<Tabs>
					<TabsItem
						onClick={() => setActiveTab('paste')}
						selected={activeTab === 'paste'}
					>
						Пасты
					</TabsItem>
					<TabsItem
						onClick={() => setActiveTab('member')}
						selected={activeTab === 'member'}
					>
						Пользователи
					</TabsItem>
              	</Tabs>
				<Group header={<Header mode="secondary">Это ты</Header>}>
					<Cell
						onClick={props.go}
						data-to="marks"
						data-member={you ? you.vk_id : ""}
						before={props.fetchedUser.photo_200 ? <Avatar src={props.fetchedUser.photo_200}/> : null}
						description={you ? "Всего оценок: " + you.cnt + ', средняя: ' + you.avg : ""}
					>
						{`${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`}
					</Cell>
				</Group>
				{activeTab === 'paste' && <Group header={<Header mode="secondary">ТОП паст</Header>}>
					<Div>
						{
							pastes.map( (paste, index) => {
								return (
									<Cell
										onClick={props.gopanel}
										data-story="paste"
										data-payload={paste.id}
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
				</Group>}
				{activeTab === 'member' && <Group header={<Header mode="secondary">ТОП пользователей</Header>}>
					<Div>
						{
							users.map( (user, index) => {
								return (
									<Cell
										onClick={props.go}
										data-to="marks"
										data-member={user.vk_id}
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
				</Group>}
			</Panel>
		</View>
	)
}

Top.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Top;
