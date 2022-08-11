import { useEffect, useState } from 'react'
import { Song } from '../types'
import { useFavorites } from './useFavorites'

import { useKeyPressChange } from './useKeyPress'
import { useSettings, useSettingsShowEmol } from './useSettings'
const mozList = ['on1', 'on2', 'off']

export const useLightConfig = (song: Song, toggleFavorites: () => void) => {
	const [moz, setMoz] = useState<typeof mozList[number]>('off')

	const s = useSettings()
	const { toggleEmol } = useSettingsShowEmol()

	const cycle = <T,>(arr: T[], cur: T) =>
		arr[(arr.indexOf(cur) + 1) % arr.length]

	useKeyPressChange('m', () => setMoz((v) => cycle(mozList, v)))
	useKeyPressChange('l', toggleEmol)
	useKeyPressChange('a', s.toggleArtwork)
	useKeyPressChange('h', s.toggleHistory)
	useKeyPressChange('t', s.cycleTheme)
	useKeyPressChange('f', toggleFavorites)

	useEffect(() => {
		setMoz('off')
	}, [song.icy])
	return { moz }
}
