import React from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import CardGrid from '@vkontakte/vkui/dist/components/CardGrid/CardGrid';
import Card from '@vkontakte/vkui/dist/components/Card/Card';

const About = props => (
	<Panel id={props.id}>
		<PanelHeader
            left = {<PanelHeaderBack onClick={() => window.history.back()}>
            </PanelHeaderBack>}>
			    О приложении
		</PanelHeader>

		<Group style={{ textAlign: 'center' }} description="v. 1.1.3" separator="hide">
			<Div style={{ display: 'flex', justifyContent: 'center' }}>
				<Avatar mode="default" size={104} src="https://sun9-26.userapi.com/-1dDyuNbVzSzS-E0cdh4rZKEHUjU7MVmA8j6aw/MtOsN166n84.jpg" />
			</Div>
			<h2 style={{ marginTop: 0, marginBottom: '4px' }}>GO! - Гид по Сургуту</h2>
		</Group>

		<Separator wide />
        
		<Group separator="hide">
			<CardGrid>
				<Card size='s' style={{ height: 82, backgroundColor: '#000', display: 'flex', justifyContent: 'center' }} onClick={props.go} data-to='credits'>
					<img style={{ height: 82, width: 82 }} src="https://sun9-12.userapi.com/ROG9IYSur1xbUvDcT919Q0gUh0n5w5_a90bFjg/oydD9n7iwPg.jpg" alt="credits" />
				</Card>
				<Card size='s' style={{ height: 82, backgroundColor: '#000', display: 'flex', justifyContent: 'center' }} onClick={props.go} data-to='attention'>
					<img style={{ height: 82, width: 82 }} src="https://sun9-40.userapi.com/L0O5qItpUnMy1Cwd6rNYNoQJ-c_5DCZVMs_B5Q/YXvZOX_R6_o.jpg" alt="attention" />
				</Card>
				<Card size='s' style={{ height: 82, backgroundColor: '#000', display: 'flex', justifyContent: 'center' }} onClick={props.go} data-to='projects'>
					<img style={{ height: 82, width: 82 }} src="https://sun9-54.userapi.com/gar1Q9QxsTnUgQpNZWfTbQtLhQXc08vPenmVrg/55wgZfq-FW8.jpg" alt="projects" />
				</Card>
			</CardGrid>
		</Group>

		<Group>
			<Div style={{ paddingBottom: 0 }}> 
				<Button mode="commerce" size="xl" href="https://vk.cc/atIYtr" target="_blank">Поддержать</Button>
			</Div>
			<Div>
				<Button mode="primary" size="xl" href="https://vk.me/romsurdvorov" target="_blank">Связаться</Button>
			</Div>
		</Group>

	</Panel>
);

export default About;
