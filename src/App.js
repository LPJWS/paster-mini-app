import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Top from './panels/Top';
import Marks from './panels/Marks';
import Moderator from './panels/Moderator'

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [pastePreloaded, setPastePreloaded] = useState(null);
	const [member, setMember] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	let hash = window.location.hash.replace('#', '')
	if (hash) {
		// fetch('https://lpjakewolfskin.ru/api/v1/paste/get/'+hash)
		// 	.then(response => {
		// 		if (!response.ok) {
		// 			throw new Error(response.statusText)
		// 		}
		// 		return response.json()
		// 		}).catch(err=>{
		// 		console.log(err)
		// 	})
		// 	.then((check_) => {
		// 		setPastePreloaded(hash)
		// 	})
		window.location.hash = ''
		setPastePreloaded(hash)
	}

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
		setPastePreloaded(e.currentTarget.dataset.payload)
		setMember(e.currentTarget.dataset.member)
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					{fetchedUser && <Home id='home' fetchedUser={fetchedUser} go={go} pastePreloaded={pastePreloaded}/>}
					{fetchedUser && <Top id='top' fetchedUser={fetchedUser} go={go}/> }
					{fetchedUser && <Moderator id='moderator' fetchedUser={fetchedUser} go={go}/> }
					<Marks id='marks' go={go} member={member}/>
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
