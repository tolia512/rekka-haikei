import React, { useState } from 'react'

import styled from 'styled-components'
import { Count } from '../../types'
import { useHistoryDb } from './useHistoryDb'

const searchFilter = (search: string, text: string) => {
	if (search === '') return true
	try {
		return new RegExp(search, 'i').exec(text)
	} catch (e) {
		return text.toLowerCase().includes(search.toLowerCase())
	}
}

function Page() {
	const [histories, counts, countsSong] = useHistoryDb('2021gw')
	const [search, setSearch] = useState<string>('')
	const [viewAll, setViewAll] = useState<boolean>(false)
	const [tab, setTab] = useState<number>(0)

	const filteredHistories = histories
		.filter((v) => searchFilter(search, v.title))
		.slice(0, viewAll ? 10000 : 100)

	return (
		<Wrap>
			<div>
				検索(正規表現)
				<input onChange={(e) => setSearch(e.target.value)}></input>
			</div>
			<p>
				<button onClick={() => setTab(0)}>履歴</button>
				<button onClick={() => setTab(1)}>再生回数</button>
				<button onClick={() => setTab(2)}>再生回数(曲名)</button>
			</p>
			{tab === 0 && (
				<div>
					<h3>履歴</h3>
					<table className="hist">
						<thead>
							<tr>
								<th>日時</th>
								<th>タイトル</th>
							</tr>
						</thead>
						<tbody>
							{filteredHistories.map((reco, i) => (
								<tr key={i} data-cate={reco.timeCate}>
									<td>{reco.timeStr}</td>
									<td>{reco.title}</td>
								</tr>
							))}
						</tbody>
					</table>
					{histories.length >= 100 && (
						<p>{histories.length}中100件のみ表示しています</p>
					)}
					<button onClick={() => setViewAll((v) => !v)}>
						{viewAll ? '隠す' : '全表示する'}
					</button>
				</div>
			)}
			{tab === 1 && (
				<CountTable
					title="再生回数"
					counts={counts.filter((v) => searchFilter(search, v.title))}
				/>
			)}
			{tab === 2 && (
				<CountTable
					title="再生回数(曲名)"
					counts={countsSong.filter((v) => searchFilter(search, v.title))}
				/>
			)}
		</Wrap>
	)
}

function CountTable({ counts, title }: { title: string; counts: Count[] }) {
	return (
		<div>
			<h3>{title}</h3>
			<table className="count">
				<thead>
					<tr>
						<th>タイトル</th>
						<th>回数</th>
						<th>日時</th>
					</tr>
				</thead>
				<tbody>
					{counts.slice(0, 100).map((count, i) => (
						<tr key={i}>
							<td>{count.title}</td>
							<td>{count.times.length}</td>
							<td>
								<ul>
									{count.timesStr.map((s) => (
										<li key={s}>{s}</li>
									))}
								</ul>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{counts.length >= 100 && <p>100件までのみ表示しています</p>}
		</div>
	)
}

const Wrap = styled.div`
	width: 100vw;
	display: grid;
	padding: 16px;

	table {
		width: 100%;
	}
	table td {
		border-top: solid 1px;
	}
	table.hist {
		td:first-child {
			width: 144px;
		}
		tr {
			&[data-cate='0'],
			&[data-cate='2'],
			&[data-cate='4'],
			&[data-cate='6'],
			&[data-cate='8'] {
				td:first-child {
					background: #dbf7ff;
				}
			}
		}
	}

	table.count {
		td:nth-child(3) {
			width: 144px;
		}
	}
`

function HistoryContainer() {
	return <Page />
}

export default HistoryContainer
