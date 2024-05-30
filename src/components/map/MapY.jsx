

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

export const MapSPB = () => (
	<YMaps>
		<div className='containerMap'>
			<YMaps>
				<Map
					style={{ height: '230px', width: '100%' }}
					defaultState={{ center: [59.907185, 30.323603], zoom: 13 }}
				>
					<Placemark
						geometry={[59.907185, 30.323603]}
						style={{ height: '230px', width: '100%' }}
					/>
				</Map>
			</YMaps>
		</div>
	</YMaps>
)

export const MapMsc = () => (
	<YMaps>
		<div className='containerMap'>
			<YMaps>
				<Map
					style={{ height: '230px', width: '100%' }}
					defaultState={{ center: [55.759861, 37.610557], zoom: 13 }}
				>
					<Placemark
						geometry={[55.759861, 37.610557]}
						style={{ height: '230px', width: '100%' }}
					/>
				</Map>
			</YMaps>
		</div>
	</YMaps>
)




