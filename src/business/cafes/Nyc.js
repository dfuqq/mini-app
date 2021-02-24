import React, { Fragment } from 'react';
import { YMaps, Map, Placemark, Circle } from 'react-yandex-maps';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Gallery from '@vkontakte/vkui/dist/components/Gallery/Gallery';

import Icon28MoneyCircleOutline from '@vkontakte/icons/dist/28/money_circle_outline';
import Icon28LogoInstagram from '@vkontakte/icons/dist/28/logo_instagram';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28PhoneOutline from '@vkontakte/icons/dist/28/phone_outline';

const Nyc = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => window.history.back()}>
			</PanelHeaderBack>}
			separator={false}
		>
			New York Coffee
		</PanelHeader>

		<Gallery
			slideWidth = "100%"
			style = {{ height: 225 }}
			align = "center"
			bullets="light"
		>
			<img style={{ objectFit: 'contain' }} src="https://sun9-3.userapi.com/QcpKjNghCUWGwwTL8T_311MQzRw25pzNTPB0BQ/KjFpfJ3m7bk.jpg" alt="Cafe's Logo"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-31.userapi.com/wfyAe7NBPg_yJOiPhL5bifp6juyY0uRkTlg8fg/rNRxQkxQxcI.jpg" alt="Cafe's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-49.userapi.com/AlHsmofxzdixzdNBAScYSdoGkbACOB58LWI3zw/lJtr7E4DP7s.jpg" alt="Cafe's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-14.userapi.com/Rg27RFFWZcBLLo2SATTaecTM67TwvpjMJO1VtQ/IqdX4RrEYp8.jpg" alt="Cafe's Interior"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-50.userapi.com/nEJgYGNMDRP-2jLRkzgLMbIZMSGtZLc4CZouIg/_8xx-W56j0g.jpg" alt="Cafe's Staff"/>
			<img style={{ objectFit: 'contain' }} src="https://sun9-30.userapi.com/BnpZW69LDjZ1KGfTN0GkAEI8AqbRwBdxidjkaw/isv_G2DkwjA.jpg" alt="Cafe's Food"/>
		</Gallery>

		<Separator wide style={{paddingTop: '10px'}}/>

		<Group separator='hide' style={{ padding: '0 3vw 20px 3vw'}} header={<Header>Самое атмосферное место</Header>}>
			<Div>
			"New York Coffee" не оставит равнодушным никого. 
			<br />
            Небольшое, но очень уютное заведение, в котором Вы останетесь, как минимум, на вечер. Как максимум — на всю жизнь.
			<br />
            Отличный кофе, бесплатные закуски, настольные игры и игровые приставки. Приятный дизайн и великолепная, не отвлекающая музыка. Приветливый персонал, а самое главное — цены! Всё это надолго запомнится Вам, в результате чего Вы будете возвращаться снова и снова.
			<br /> <br />
            Личная рекомендация РСД.<br />Всё самое важное — ниже.
			</Div>
		</Group>

		<Separator wide />

		<Div style={{paddingBottom: 0}}>
			<Cell size='l' before={<Icon28PlaceOutline height={24} width={24} />} description="08:00 - 00:00">Ленина, 18</Cell>
			<Cell size='l' before={<Icon28MoneyCircleOutline height={24} width={24} />}>90-600₽</Cell>
            <Cell size='l' before={<Icon28PhoneOutline height={24} width={24} />}>78-60-30</Cell>
			<Cell size='l' href="https://instagram.com/ny_coffee_surgut" target="_blank" before={<Icon28LogoInstagram height={24} width={24} />}>@ny_coffee_surgut</Cell>
		</Div>

		<Group style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
			<YMaps>
				<Map defaultState={{ center: [61.247272, 73.405787], zoom: 17 }} width='90vw' height='60vh'>
					<Placemark defaultGeometry={[61.247272, 73.405787]} defaultOptions={{preset: 'islands#circleIcon', iconColor: '#000'}} />
					{props.geo[0] !== undefined &&
						<Fragment>
							<Circle defaultGeometry={[[props.geo[1], props.geo[0]], 200]} options={{draggable: false, fillColor: 'rgba(0, 0, 0, 0.5)', strokeColor: '#000', strokeOpacity: 0.8, strokeWidth: 2 }} /> 
						</Fragment>
					}
				</Map>
			</YMaps>
		</Group>
		
	</Panel>
);

export default Nyc;
