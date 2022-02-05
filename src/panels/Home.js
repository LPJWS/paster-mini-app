import React, { useState, useEffect } from 'react';
import PropTypes, { func } from 'prop-types';
import bridge from '@vkontakte/vk-bridge';

import { Panel, PanelHeader, Header, Button, Group, Div, ScreenSpinner,
	Card, Snackbar, FixedLayout, View,
	Epic, Tabbar, TabbarItem, IconButton } from '@vkontakte/vkui';
import { Icon16ReplyOutline } from '@vkontakte/icons';
import { Icon28Dice5Outline } from '@vkontakte/icons';
import { Icon28ViewOutline } from '@vkontakte/icons';
import { Icon16Favorite } from '@vkontakte/icons';
import { Icon28HomeOutline } from '@vkontakte/icons';
import { Icon28Flash } from '@vkontakte/icons';
import { Icon16Clear } from '@vkontakte/icons';
import { Icon28KeyOutline } from '@vkontakte/icons';

import Top from './Top';
import Moderator from './Moderator';

const Home = ({ id, go, fetchedUser, pastePreloaded }) => {
	const [ paste, setPaste] = useState(null);
	const [you, setYou] = useState(null);
	const [ snackbar, setSnackbar] = useState(null);
	const [ popout, setPopout] = useState(null);
	const [activeStory, setActiveStory] = React.useState('paste');
	const onStoryChange = (e) => {
		if (e.currentTarget.dataset.payload) {
			getPasteById(e.currentTarget.dataset.payload)
		}
		setActiveStory(e.currentTarget.dataset.story);
	}
	const gopanel = e => {
		setActiveStory(e.currentTarget.dataset.story);
		getPasteById(e.currentTarget.dataset.payload)
	};
	
	function getRandPaste() {
		setPopout(<ScreenSpinner/>)
		fetch('https://lpjakewolfskin.ru/api/v1/paste/get/rand/?vk_id=' + fetchedUser.id)
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

	function getYou() {
		setPopout(<ScreenSpinner/>)

		fetch('https://lpjakewolfskin.ru/api/v1/member/get_vk/' + fetchedUser.id)
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
					after={<IconButton onClick={() => setSnackbar(null)}><Icon16Clear /></IconButton>}
				>
					Паста оценена
				</Snackbar>
			)
		  })
	}

	function reply() {
		bridge.send("VKWebAppShare", {"link": "vk.com/app7983387#" + paste.id});
	}

	useEffect(() => {
		if (pastePreloaded) {
			getPasteById(pastePreloaded)
		}
		else {
			getPaste()
		}
		getYou()
	  }, [])

	return (
		<Epic activeStory={activeStory} tabbar={
			<Tabbar>
			  <TabbarItem
				onClick={onStoryChange}
				selected={activeStory === 'paste'}
				data-story="paste"
				text="Пасты"
			  ><Icon28HomeOutline /></TabbarItem>
			  <TabbarItem
				onClick={onStoryChange}
				selected={activeStory === 'top'}
				data-story="top"
				text="ТОП"
			  ><Icon28Flash/></TabbarItem>
			  {you && you.is_moder &&
			  <TabbarItem
				onClick={onStoryChange}
				selected={activeStory === 'moderator'}
				data-story="moderator"
				text="Модерация"
			  ><Icon28KeyOutline /></TabbarItem>
			  }
			</Tabbar>
		}>
			<View id='paste' activePanel='paste' popout={popout}>
				<Panel id='paste'>
					<PanelHeader>ПАСТЕР</PanelHeader>
					{paste && 
						<Group header={<Header mode="secondary">Данную пасту оценили {paste.cnt} раз, рейтинг - {paste.rating} {paste.sender ? '\n, прислал ' + paste.sender.name : ''}</Header>}>
							<Div>
								{
									paste.tags.length 
									? paste.tags.map((tag, index) => {
										return <Button size='s' mode='commerce' style={{margin: '.1rem'}}>#{tag.name}</Button>
									})
									: <Button size='s' mode='commerce' style={{margin: '.1rem'}}>#Рандом</Button>
								}
							</Div>
							<Div>
								<Card size="l" mode="shadow" style={{marginBottom:'1rem'}}>
									<Div style={{padding: '.5rem', margin: 'auto'}}>
										<p>{paste.clear_text}</p>
										{paste.pic_self ?
											<img style={{width: "100%", height: "100%"}} src={paste.pic_link_self} onClick={async() => {
												let res = await bridge.send("VKWebAppGetAuthToken", {"app_id": 7983387, "scope": "photos"});
												let owner_id = paste.pic_self.split('_')[0].split('photo')[1]
												let photo_id = paste.pic_self.split('_')[1].slice(0, -1)
												let res2 = await bridge.send("VKWebAppCallAPIMethod", {"method": "photos.copy", "request_id": "32test", "params": {"owner_id": owner_id, "photo_id": photo_id, "v":"5.131", "access_token":res.access_token}});
												if (!res2.error_type) {
													setSnackbar(
														<Snackbar
															onClose={() => setSnackbar(null)}
															after={<IconButton onClick={() => setSnackbar(null)}><Icon16Clear /></IconButton>}
														>
															Пикча добавлена в Сохраненные
														</Snackbar>
													)
												}
												else {
													setSnackbar(
														<Snackbar
															onClose={() => setSnackbar(null)}
															after={<IconButton onClick={() => setSnackbar(null)}><Icon16Clear /></IconButton>}
														>
															Произошла ошибка
														</Snackbar>
													)
												}
											}}/>
										:
										(paste.pic && 
											<img style={{width: "100%", height: "100%"}} src={paste.pic_link} onClick={async() => {
												let res = await bridge.send("VKWebAppGetAuthToken", {"app_id": 7983387, "scope": "photos"});
												let owner_id = paste.pic.split('_')[0].split('photo')[1]
												let photo_id = paste.pic.split('_')[1].slice(0, -1)
												let res2 = await bridge.send("VKWebAppCallAPIMethod", {"method": "photos.copy", "request_id": "32test", "params": {"owner_id": owner_id, "photo_id": photo_id, "v":"5.131", "access_token":res.access_token}});
												if (!res2.error_type) {
													setSnackbar(
														<Snackbar
															onClose={() => setSnackbar(null)}
															after={<IconButton onClick={() => setSnackbar(null)}><Icon16Clear /></IconButton>}
														>
															Пикча добавлена в Сохраненные
														</Snackbar>
													)
												}
												else {
													setSnackbar(
														<Snackbar
															onClose={() => setSnackbar(null)}
															after={<IconButton onClick={() => setSnackbar(null)}><Icon16Clear /></IconButton>}
														>
															Произошла ошибка
														</Snackbar>
													)
												}
											}}/>
										)
										}
										{(paste.pic || paste.pic_self) &&
											<Div style={{textAlign: "center", color: "gray"}}>
												Нажми на пикчу, чтобы добавить ее в свои Сохраненки
											</Div>
										}
									</Div>
									
								</Card>
								
							</Div>
							<Div style={{margin: 'auto'}}>
								
							</Div>
							<Group header={<Header mode="secondary">Оцените пасту</Header>}>
								{!paste.related &&
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
								}
								{paste.related &&
									<Div style={{textAlign: "center", color: "gray"}}>Вы уже оценивали данную пасту</Div>
								}
								<Div style={{paddingBottom: '9rem'}}>
									<Button stretched size="l" style={{ marginRight: 8 }} mode="primary" onClick={() => {reply()}} before={<Icon16ReplyOutline/>}>
										Поделиться
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
			
			<Top id='top' activePanel='top' fetchedUser={fetchedUser} go={go} gopanel={gopanel}/>
			<Moderator id='moderator' activePanel='moderator' fetchedUser={fetchedUser} go={go}/>

		</Epic>
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
