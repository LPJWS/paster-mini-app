import React, { useState, useEffect } from 'react';
import PropTypes, { func } from 'prop-types';
import bridge from '@vkontakte/vk-bridge';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, ScreenSpinner, Text, Avatar, Card, Snackbar, FixedLayout, Separator, View } from '@vkontakte/vkui';
import { Icon16ReplyOutline } from '@vkontakte/icons';
import { Icon28Dice5Outline } from '@vkontakte/icons';
import { Icon28ViewOutline } from '@vkontakte/icons';
import { Icon16Mention } from '@vkontakte/icons';
import { Icon24CupOutline } from '@vkontakte/icons';
import { Icon16Favorite } from '@vkontakte/icons';

const Home = ({ id, go, fetchedUser, pastePreloaded }) => {
	const [ paste, setPaste] = useState(null);
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

	async function getPaste() {
		setPopout(<ScreenSpinner/>)
		fetch('https://lpjakewolfskin.ru/api/v1/paste/get/unrelated/?vk_id=' + fetchedUser.id)
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

	function getPasteById(paste_id) {
		setPopout(<ScreenSpinner/>)
		fetch('https://lpjakewolfskin.ru/api/v1/paste/get/' + paste_id + '/')
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

	function reply() {
		bridge.send("VKWebAppShare", {"link": paste.link});
	}

	useEffect(() => {
		if (pastePreloaded) {
			getPasteById(pastePreloaded)
		}
		else {
			getPaste()
		}
	  }, [])

	return (
		<View activePanel={id} popout={popout}>
			<Panel id={id}>
				<PanelHeader>ПАСТЕР</PanelHeader>
				{paste && 
					<Group header={<Header mode="secondary">Данную пасту оценили {paste.cnt} раз, рейтинг - {paste.rating}</Header>}>
						<Div>
							<Card size="l" mode="shadow" style={{marginBottom:'1rem'}}>
								<Div style={{padding: '.5rem'}}><p>{paste.clear_text}</p></Div>
							</Card>
						</Div>
						<Group header={<Header mode="secondary">Оцените пасту</Header>}>
							<Div style={{display: 'flex'}}>
								<Button stretched size="l" style={{ marginRight: 8 }} mode="destructive" onClick={() => {relatePaste(1)}}>
									1 <Icon16Favorite/>
								</Button>
								<Button stretched size="l" style={{ marginRight: 8 }} mode="destructive" onClick={() => {relatePaste(2)}}>
									2 <Icon16Favorite/>
								</Button>
								<Button stretched size="l" style={{ marginRight: 8 }} mode="secondary" onClick={() => {relatePaste(3)}}>
									3 <Icon16Favorite/>
								</Button>
								<Button stretched size="l" style={{ marginRight: 8 }} mode="commerce" onClick={() => {relatePaste(4)}}>
									4 <Icon16Favorite/>
								</Button>
								<Button stretched size="l" style={{ marginRight: 8 }} mode="commerce" onClick={() => {relatePaste(5)}}>
									5 <Icon16Favorite/>
								</Button>
							</Div>
							<Div>
								<Button stretched size="l" style={{ marginRight: 8 }} mode="primary" onClick={() => {reply()}} before={<Icon16ReplyOutline/>}>
									Поделиться
								</Button>
							</Div>
							<Div style={{paddingBottom: '9rem'}}>
								<Button stretched size="l" style={{ marginRight: 8 }} mode="primary" onClick={go} data-to="top" before={<Icon24CupOutline/>}>
									Открыть ТОП
								</Button>
							</Div>
						</Group>
						<FixedLayout filled vertical="bottom">
							<Group header={<Header mode="secondary">Получить пасту</Header>}>
								<Div style={{display: 'flex'}}>
									<Button stretched size="l" style={{ marginRight: 8 }} mode="secondary" onClick={
										() => {getRandPaste()}} before={<Icon28Dice5Outline/>}>
										Случайная паста
									</Button>
									<Button stretched size="l" mode="secondary" onClick={
										() => {getPaste()}} before={<Icon28ViewOutline/>}>
										Неоцененная паста
									</Button>
								</Div>
							</Group>
						</FixedLayout>
					</Group>
				}
				
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
