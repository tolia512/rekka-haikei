import { useEffect } from 'react'
import { useMemo, useState } from 'react'
import { FloatingBox } from '../components'
import { isSongFull, Song } from '../types'
import { useSettings } from './useSettings'

function getEx(ex: string | false) {
	if (ex === 'nonnon') {
		return (
			<div style={{ height: '50vh' }}>
				<iframe style={{ width: '100%' }} src="https://nyanpass.com/" />
			</div>
		)
	} else if (ex === 'mia') {
		return (
			<div style={{ height: '50vh' }}>
				<iframe
					style={{ width: '100%', height: '100%' }}
					src="https://click.abyss.fun/"
				/>
			</div>
		)
	} else if (ex === 'sakurasou') {
		return (
			<div style={{ height: '30vh' }}>
				<FloatingBox>
					<a href="http://sakurasou.tv/" target="_blanck">
						<img src="/maid-chan.png"></img>
					</a>
				</FloatingBox>
			</div>
		)
	}
	return null
}
export function useEx(song: Song) {
	const { abyss, setAbyss } = useSettings()
	const [redMode, setRedmode] = useState<string | false>(false) // true (現在の設定保存)
	return useMemo(() => {
		const madness = ['ひぐらし', 'アビス'].some((k) =>
			song.animeTitle?.includes(k)
		)

		if (madness) {
			setAbyss('red')
			setRedmode(abyss)
		} else {
			if (redMode) setAbyss(redMode)
			setRedmode(false)
		}

		return getEx(checkEx(song))
	}, [song])
}
export function checkEx(song: Song): string | false {
	if (!isSongFull(song)) return false

	if (song.animeTitle?.includes('のんのんびより')) {
		return 'nonnon'
	} else if (song.animeTitle?.includes('アビス')) {
		return 'mia'
	} else if (song.animeTitle?.includes('さくら荘')) {
		return 'sakurasou'
	}
	return false
}
