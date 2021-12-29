import React, { ReactNode } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import { Song } from '../../types'
import { settingState } from '../../atom/SettingAtom'
import { useFavorites } from '../../hooks/useFavorites'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { toggle } from '../../util'
import FadeBgChanger from './FadeBgChanger'
import Player from './Player'
import TimeBar from './TimeBar'
import { BookmarkList } from './BookmarkList'
import SettingBox from './SettingBox'
import RecentHistoryList from './RecentHistoryList'
import SongInfo from './SongInfo'

type Props = {
	song: Song
	extraComp?: ReactNode
	exkey: string | false
}
function Home({ song, extraComp, exkey }: Props) {
	const { showCounts, sideMode, lockBg } = useRecoilValue(settingState)

	const setSetting = useSetRecoilState(settingState)

	const { favorites: books, toggleFavorites } = useFavorites()
	const [themeId, setTheme] = useLocalStorage<number>('theme', 0)
	const [streamUrl, setStreamUrl] = useLocalStorage<string>('stream-url', '')

	const toggleSetting = () => setSetting((v) => toggle(v, 'showSetting'))

	return (
		<Master onClick={toggleSetting} data-ex={exkey}>
			<Mask id="mask" />
			<FadeBgChanger
				sid={song.time}
				urls={song?.imageLinks || []}
				lockCount={lockBg ? 1 : 10}
				px={sideMode ? 'right' : 'center'}
			/>
			<TimeBar startTime={song.time} size={song.trackTimeMillis} />
			<Wrap
				data-theme={themeId}
				className={themeId === 2 ? 'dark-theme' : 'light-theme'}
				style={{ width: sideMode ? '50vw' : '100%' }}
			>
				<SongInfo song={song} showCounts={showCounts}></SongInfo>
				<div data-visible={!!streamUrl}>
					<Player src={streamUrl}></Player>
				</div>
				<SettingBox
					song={song}
					themeId={themeId}
					streamUrl={streamUrl}
					setStreamUrl={setStreamUrl}
					favorited={books[song.icy]}
					toggleFavorited={() => toggleFavorites(song.icy)}
					favCount={Object.keys(books).length}
					setTheme={setTheme}
				/>

				<div>{extraComp || null}</div>
				<RecentHistoryList />
				<BookmarkList books={books} toggleFavorites={toggleFavorites} />
			</Wrap>
		</Master>
	)
}

const randAnimsCss = [...Array(20).keys()]
	.map(
		(i) => `
			span:nth-of-type(${i + 1}),p:nth-of-type(${i + 1}) {
				animation-delay: ${(i * 7) % 10}s;
			}
			`
	)
	.join('\n')

const Wrap = styled.div`
	width: 100vw;
	min-height: 100vh;
	display: grid;
	/* overflow: hidden; */
	grid-template-rows: repeat(6, max-content);
	padding: 16px;
	color: white;

	button {
		border-radius: 4px;
		border: none;
		margin: 4px;
		--checked-bg: #999;
		min-height: 24px;
		min-width: 36px;
		text-align: center;
		&.big {
			min-width: 124px;
		}
		svg {
			font-size: 1rem;
		}
	}
	p {
		color: #ccc;
		font-weight: bold;
		text-shadow: 1px 1px 1px #000, -1px -1px 1px #000, -1px 1px 1px #000,
			1px -1px 1px #000;
		margin: 0;
	}

	.moc {
		visibility: hidden;
	}
	.recenthistory:hover {
		.moc {
			visibility: visible;
		}
	}
	.bookmarks:hover {
		.moc {
			visibility: visible;
		}
	}
	.recenthistory,
	.bookmarks {
		padding: 0.4rem 0.4rem;
		p {
			font-size: 0.8rem;
		}
	}
	a {
		color: #ccc;
		&:blink {
			color: #ccc;
		}
	}
	.titles {
		font-size: 1.1rem;
	}

	&[data-theme='1'] {
		.content,
		.recenthistory,
		.config > div,
		.bookmarks {
			background: rgba(255, 255, 255, 0.5);
		}
	}
	&[data-theme='2'] {
		button {
			--checked-bg: #333;
			background: black;
			color: white;
		}
		.content,
		.recenthistory,
		.config > div,
		.bookmarks {
			background: rgba(0, 0, 0, 0.5);
		}
	}
	&[data-theme='3'] {
		.content,
		.recenthistory,
		.bookmarks {
			visibility: hidden;
		}
	}
	.titles-single {
		display: none;
	}
	&[data-theme='4'] {
		.recenthistory,
		.bookmarks {
			visibility: hidden;
		}
		.content > * {
			visibility: hidden;
		}
		.content > .titles {
			visibility: visible;
		}
	}

	[data-important='true'] {
		animation: flash 1s linear infinite;
	}
	@keyframes flash {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	[data-visible='false'] {
		display: none;
	}
`

const Master = styled.div`
	&[data-ex='lain'],
	&[data-ex='kokaku'] {
		div {
			/* background: linear-gradient(#0000, #1008, #0008, #1000) !important; */
		}
		@keyframes noise {
			0% {
				opacity: 0.5;
				transform: rotate(-1deg);
			}
			50% {
				opacity: 0.75;
			}
			51% {
				opacity: 0;
			}
			52% {
				opacity: 0.75;
			}
			100% {
				opacity: 1;
				transform: rotate(1deg);
			}
		}
		@keyframes noiseBlink {
			0% {
				opacity: 1;
			}
			99% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		span,
		p {
			width: max-content;
			animation-name: noise;
			animation-direction: alternate;
			animation-timing-function: ease-in-out;
			animation-iteration-count: infinite;
			animation-duration: 10s;
		}
		&[data-ex='lain'] {
			* {
				color: red !important;
			}
		}

		&[data-ex='kokaku'] {
			div {
				border-bottom: solid 1px #0385f4;
				background: #ffffff33;
			}
			span,
			p {
				color: #0385f4 !important;
				animation-name: noiseBlink;
				/* background: #1008 !important; */
			}
		}

		${randAnimsCss}
	}
	&[data-ex='spin'] {
		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
		.album img {
			animation: spin 5s linear infinite;
			&:hover {
				animation-name: none;
			}
		}
	}
	&[data-ex='rakupro'] {
		@keyframes bggradient {
			0% {
				background-position: 0% 75%;
			}
			100% {
				background-position: 100% 25%;
			}
		}
		#mask {
			display: block;
			opacity: 0.5;
			background: linear-gradient(45deg, #e700fc, #fffa, #e700fc, #fffa)
				repeat-x;

			background-size: 400% 400%;
			animation: bggradient 5s linear infinite;
		}
	}
`

const Mask = styled.div`
	display: none;
	background: #cccc;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	z-index: -1;
`

export default Home
