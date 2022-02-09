import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';

import { Panel, PanelHeader, PanelHeaderBack, Group, Header, View, ScreenSpinner, Div, Card, Cell, Avatar } from '@vkontakte/vkui';
import { Icon16Favorite } from '@vkontakte/icons';

const Marks = props => {
	const [pastes, setPastes] = useState([])
	const [you, setYou] = useState(null);
	const [popout, setPopout] = useState(null);

    var options = {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      };

	function getYou() {
		setPopout(<ScreenSpinner/>)

		fetch('https://lpjakewolfskin.ru/api/v1/member/get_vk/' + props.member)
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
		getYou()
	  }, [])

	return (
		<View activePanel={props.id} popout={popout}>
			<Panel id={props.id}>
				<PanelHeader
					left={<PanelHeaderBack onClick={props.go} data-to="home" data-story="top"/>}
				>
					Оценки
				</PanelHeader>
				<Group header={<Header mode="secondary">Информация</Header>}>
					<Cell
						description={you ? "Всего оценок: " + you.cnt + ', средняя: ' + you.avg : ""}
					>
						{you ? you.name : ""}
					</Cell>
				</Group>
				<Group header={<Header mode="secondary">Пасты</Header>}>
					<Div>
						{   you &&
							you.marks.map( (mark, index) => {
                                let date = new Date(mark.created_at)
								return (
									<Cell
										onClick={props.go}
										data-to="home"
										data-payload={mark.paste.id}
										key={mark.paste.id} 
										style={{marginBottom: ".5rem"}}
										description={date.toLocaleString("ru", options)}
										before={<Cell disabled style={{alignItems: "center", textAlign: "center"}}>{mark.mark} <Icon16Favorite/></Cell>}
									>
										{mark.paste.anno} 
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

Marks.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Marks;
