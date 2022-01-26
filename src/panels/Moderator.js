import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';

import { Panel, PanelHeader, PanelHeaderBack, Group, Header, View, ScreenSpinner, Div, Card, IconButton, Cell, Avatar, Tabs, TabsItem, FormItem, Checkbox, Button, FixedLayout, Snackbar} from '@vkontakte/vkui';

import { Icon28ViewOutline } from '@vkontakte/icons';
import { Icon28DeleteOutline } from '@vkontakte/icons';
import { Icon16Clear } from '@vkontakte/icons';
import { Icon28CheckCircleOutline } from '@vkontakte/icons';

const Moderator = props => {
	const [pastes, setPastes] = useState([])
	const [ paste, setPaste] = useState(null);
	const [you, setYou] = useState(null);
	const [ snackbar, setSnackbar] = useState(null);
	const [popout, setPopout] = useState(null);
	const [activeTab, setActiveTab] = useState('tags');
	const [tagsList, setTagsList] = useState([]);
	const [selectedTags, setSelectedTags] = React.useState([]);

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

	function getTags() {
		setPopout(<ScreenSpinner/>)

		fetch('https://lpjakewolfskin.ru/api/v1/tag/all/')
		  .then(response => {
				if (!response.ok) {
					throw new Error(response.statusText)
				}
				return response.json()
				}).catch(err=>{
				console.log(err)
			})
		  .then(tags_ => {
			var tags_tmp = []
			tags_.forEach(element => {
				tags_tmp.push({value: element.id, label: element.name})
			});
			setPopout(null)
			setTagsList(tags_tmp)
		  })
	}

	async function getPaste() {
		setPopout(<ScreenSpinner/>)
		fetch('https://lpjakewolfskin.ru/api/v1/paste/get/untaged/?vk_id=' + props.fetchedUser.id)
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
			setSelectedTags([])
			window.scrollTo(0, 0)
		  })
	}

	function deletePaste() {
		fetch('https://lpjakewolfskin.ru/api/v1/paste/delete/', {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: paste.id, vk_id: props.fetchedUser.id })
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
					Паста удалена
				</Snackbar>
			)
			getPaste()
		  })
	}

	function tagPaste() {
		fetch('https://lpjakewolfskin.ru/api/v1/paste/tag/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: paste.id, vk_id: props.fetchedUser.id, tags_new: selectedTags })
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
					Паста размечена
				</Snackbar>
			)
			getPaste()
		  })
	}

	useEffect(() => {
		getYou()
		getTags()
		getPaste()
	  }, [])

	return (
		<View activePanel={props.id} popout={popout}>
			<Panel id={props.id}>
				<PanelHeader>
					Модерация
				</PanelHeader>
				{/* <Tabs>
					<TabsItem
						onClick={() => setActiveTab('tags')}
						selected={activeTab === 'tags'}
					>
						Пасты
					</TabsItem>
					<TabsItem
						onClick={() => setActiveTab('member')}
						selected={activeTab === 'member'}
					>
						Пользователи
					</TabsItem>
              	</Tabs> */}
				{activeTab === 'tags' && <Group header={<Header mode="secondary">Разметка паст</Header>}>
					<Div>
					{paste && 
						<Group>
							<Div style={{color: 'grey', fontSize: 10, textAlign: 'center'}}>
								<p>ID: {paste.id}</p>
								<p>Оценок: {paste.cnt}</p>
								<p>Рейтинг: {paste.rating}</p>
								<p>Прислал: {paste.sender ? paste.sender.name : 'Автопарсинг'}</p>
								<p>Опубликована: {paste.link_self ? paste.link_self : 'Нет'}</p>

							</Div>
							<Div>
								<Card size="l" mode="shadow" style={{marginBottom:'1rem'}}>
									<Div style={{padding: '.5rem', margin: 'auto'}}>
										<p>{paste.text}</p>
										{paste.pic &&
											<img style={{width: "100%", height: "100%"}} src={paste.pic_link} />
										}
									</Div>
								</Card>
								
							</Div>
							<Div style={{margin: 'auto'}}>
								
							</Div>
							<Group header={<Header mode="secondary">Оцените пасту</Header>}>
								<FormItem top="Выберите теги (желательно не больше 2-х)">
								{
									tagsList.map( (tag, index) => {
										return (
											<Checkbox
												key={tag.value}
												id={tag.value}
												checked={selectedTags.includes(tag.value)}
												onChange={e => {
														if (!selectedTags.includes(parseInt(e.target.id))) {
															setSelectedTags([...selectedTags, parseInt(e.target.id)])
														}
														else {
															setSelectedTags(selectedTags.filter((i, _) => i != parseInt(e.target.id)))
														}
												}}
											>
												{tag.label}
											</Checkbox>
										)
									})
								}
								</FormItem>
								<Div style={{display: 'flex'}}>
									<Button stretched size="s" style={{ marginRight: '.1rem' }} mode="negative" onClick={
										() => {deletePaste()}} before={<Icon28DeleteOutline/>}>
										Удалить пасту
									</Button>
									<Button stretched size="s" style={{ marginRight: '.1rem' }} mode="secondary" onClick={
										() => {getPaste()}} before={<Icon28ViewOutline/>}>
										Получить другую пасту
									</Button>
									<Button stretched size="s" mode="positive" onClick={
										() => {tagPaste()}} before={<Icon28CheckCircleOutline/>}>
										Отправить теги
									</Button>
								</Div>
							</Group>
						</Group>
					}
					
					</Div>
				</Group>}
				{snackbar}
			</Panel>
		</View>
	)
}

Moderator.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Moderator;
