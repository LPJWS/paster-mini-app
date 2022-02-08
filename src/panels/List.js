import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';

import { Panel, PanelHeader, Group, Header, View, ScreenSpinner, Div, Cell, Avatar, FormItem, Select, Button } from '@vkontakte/vkui';

const List = props => {
	const [pastes, setPastes] = useState([])
	const [you, setYou] = useState(null);
	const [popout, setPopout] = useState(null);
	const [pages, setPages] = useState(1);
	const [page, setPage] = useState(1);
	const [tag, setTag] = useState('');
	const [tagsList, setTagsList] = useState([]);


	function getPastes() {
		setPopout(<ScreenSpinner/>)

		fetch('https://lpjakewolfskin.ru/api/v1/paste/get/all/?tag=' + tag + '&page=' + page)
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
			setPastes(pastes['response'])
			setPages(pastes['page_cnt'])
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
			var tags_tmp = [{value: '', label: 'Все'}]
			tags_.forEach(element => {
				tags_tmp.push({value: element.id, label: element.name})
			});
			setPopout(null)
			setTagsList(tags_tmp)
		  })
	}

	useEffect(() => {
		getPastes()
		getYou()
		getTags()
	  }, [])

	useEffect(() => {
		getPastes()
	}, [tag, page])

	return (
		<View activePanel={props.id} popout={popout}>
			<Panel id={props.id}>
				<PanelHeader>
					Пасты
				</PanelHeader>
				<Group header={<Header mode="secondary">База паст</Header>}>
					<FormItem top="Категория">
						<Select
							options={tagsList.map((tag, index) => ({
								label: tag.label,
								value: tag.value,
								key: tag.value
							}))}
							defaultValue={''}
							value={tag}
							onChange={(e) => {
								setTag(e.target.value)
								setPage(1)
							}}
						/>
					</FormItem>
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
										before={<Cell disabled>{((page-1) * 20) + index+1}</Cell>}
									>
										{paste.anno}
									</Cell>
								)
							})
						}
					</Div>
					<Div>
						{Array.from({length: pages}, (_, i) => i + 1).map((page_, index) => {
							return (
								<Button
									style={{margin: '.1rem'}}
									disabled={page_ == page}
									onClick={e => {
										setPage(page_)
									}}
								>
									{page_}
								</Button>
							)
						})}
					</Div>
				</Group>
			</Panel>
		</View>
	)
}

List.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default List;
