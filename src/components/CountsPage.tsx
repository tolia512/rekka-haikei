import React, { useState } from 'react'
import { Count } from '../types'
import { TabPanel, Tabs } from './common/Tab'
import { CountTable } from './HistoryPage/CountTable'
import { WordCountTable } from './HistoryPage/WordCountTable'

type Props = {
	counts: Count[]
	countsSong: Count[]
}
export const CountsPage = ({ counts, countsSong }: Props) => {
	const [tab, setTab] = useState<number>(0)
	return (
		<div>
			<Tabs
				tab={tab}
				items={[{ label: '曲(icy)' }, { label: '曲' }, { label: 'タグ' }]}
				onChange={setTab}
			/>

			<TabPanel value={tab} index={0}>
				<CountTable title="再生回数" counts={counts} />
			</TabPanel>
			<TabPanel value={tab} index={1}>
				<CountTable title="再生回数(曲名)" counts={countsSong} />
			</TabPanel>
			<TabPanel value={tab} index={2}>
				<WordCountTable />
			</TabPanel>
		</div>
	)
}
export default CountsPage
