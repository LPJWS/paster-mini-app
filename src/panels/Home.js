import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, ScreenSpinner, Text, Avatar, Card, Snackbar, FixedLayout, Separator, View } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => {
	const [ paste, setPaste] = useState([]);
	const [ snackbar, setSnackbar] = useState(null);
	const [ popout, setPopout] = useState(null);
	
	function getRandPaste() {
		setPopout(<ScreenSpinner/>)
		fetch('https://lpjakewolfskin.ru/api/v1/paste/get/rand/')
		  .then(response => {
				if (!response.ok) {
					throw new Error(response.statusText)
				}
				return response.json()
				}).catch(err=>{
				console.log(err)
			})
		  .then(paste => {
			setPopout(null)
			setPaste(paste)
		  })
	}

	function getPaste() {
		setPopout(<ScreenSpinner/>)
		fetch('https://lpjakewolfskin.ru/api/v1/paste/get/unrelated/')
		  .then(response => {
				if (!response.ok) {
					throw new Error(response.statusText)
				}
				return response.json()
				}).catch(err=>{
				console.log(err)
			})
		  .then(paste => {
			setPopout(null)
			setPaste(paste)
		  })
	}

	function relatePaste(mark) {
		fetch('https://lpjakewolfskin.ru/api/v1/paste/relate/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: paste.id, vk_id: fetchedUser.id, mark })
		})
		  .then(response => {
				if (!response.ok) {
					throw new Error(response.statusText)
				}
				return response.json()
				}).catch(err=>{
				console.log(err)
			})
		  .then(() => {
			setSnackbar(
				<Snackbar
					onClose={() => setSnackbar(null)}
				>
					Паста оценена
				</Snackbar>
			)
		  })
	}

	useEffect(() => {
		getPaste()
	  }, [])

	return (
		<View activePanel={id} popout={popout}>
			<Panel id={id}>
				<PanelHeader>ПАСТЕР</PanelHeader>
				{/* {fetchedUser &&
				<Group header={<Header mode="secondary">Это ты</Header>}>
					<Cell
						before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
						description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
					>
						{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
					</Cell>
				</Group>} */}

				<Group header={<Header mode="secondary">Данную пасту оценили {paste.cnt} раз, рейтинг - {paste.rating}</Header>}>
					<Div>
						<Card size="l" mode="shadow" style={{marginBottom:'1rem'}}>
							<Div style={{padding: '.5rem'}}><p>{paste.clear_text}</p></Div>
						</Card>
					</Div>
					<Group header={<Header mode="secondary">Оцените пасту</Header>}>
						<Div style={{display: 'flex', paddingBottom: '9rem'}}>
							<Button stretched size="l" style={{ marginRight: 8 }} mode="destructive" onClick={() => {relatePaste(1)}}>
								1
							</Button>
							<Button stretched size="l" style={{ marginRight: 8 }} mode="destructive" onClick={() => {relatePaste(2)}}>
								2
							</Button>
							<Button stretched size="l" style={{ marginRight: 8 }} mode="secondary" onClick={() => {relatePaste(3)}}>
								3
							</Button>
							<Button stretched size="l" style={{ marginRight: 8 }} mode="commerce" onClick={() => {relatePaste(4)}}>
								4
							</Button>
							<Button stretched size="l" style={{ marginRight: 8 }} mode="commerce" onClick={() => {relatePaste(5)}}>
								5
							</Button>
						</Div>
					</Group>
					<FixedLayout filled vertical="bottom">
						<Group header={<Header mode="secondary">Получить пасту</Header>}>
							<Div style={{display: 'flex'}}>
								<Button stretched size="l" style={{ marginRight: 8 }} mode="secondary" onClick={
									() => {
										getRandPaste()
									}
								}>
									Случайная паста
								</Button>
								<Button stretched size="l" mode="secondary" onClick={
									() => {
										getRandPaste()
									}
								}>
									Неоцененная паста
								</Button>
							</Div>
						</Group>
					</FixedLayout>
				</Group>
				{snackbar}
			</Panel>
		</View>
	)
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
