import { toast } from 'react-toastify'
import { range } from '../util'
import { useSettingsBase } from './useSettings'

type BingoItem = {
	name: string
	match: string
	checked: boolean
	setuped: boolean
}
type Bingo = {
	items: BingoItem[]
}

export const parseBingo = (text: string): Bingo => {
	const lines = (text || '').split('\n')
	const items = range(25)
		.map((i) => lines[i] || '')
		.map((item): BingoItem => {
			const [name, match, cc] = item.split(':')
			return {
				name: name || '',
				match: match || '',
				checked: cc === 'o',
				setuped: !!name,
			}
		})
	return { items }
}

export const encodeBingo = (bingo: Bingo): string => {
	return bingo.items
		.map((v) => `${v.name}:${v.match}:${v.checked ? 'o' : 'x'}`)
		.join('\n')
}

export const isHit = (str: string, bingoItem: BingoItem) => {
	const { name, match, setuped } = bingoItem
	const matcher = match || name
	if (!setuped || !matcher) return false

	return !!new RegExp(matcher).exec(str)
}

export const useBingo = () => {
	const [{ bingo: bingoText }, setSetting] = useSettingsBase()
	const bingo = parseBingo(bingoText)
	const toggleItem = (name: string) => {
		setBingo((bingo) =>
			encodeBingo({
				items: bingo.items.map((v) =>
					v.name === name ? { ...v, checked: !v.checked } : v
				),
			})
		)
	}
	const setBingoText = (bingo: string) => setSetting((v) => ({ ...v, bingo }))
	const setBingo = (fn: (bingo: Bingo) => string) =>
		setSetting((s) => ({ ...s, bingo: fn(parseBingo(s.bingo)) }))
	const checkHit = (str: string) => {
		setBingo((bingo) => {
			const hits: string[] = []
			const items = bingo.items.map((v) => {
				const checked = v.checked || isHit(str, v)
				if (checked && !v.checked) {
					hits.push(v.name)
				}
				return { ...v, checked, memo: str }
			})
			if (hits.length > 0) {
				toast.success(`BINGOヒット: ${hits.join(', ')}`)
			}
			return encodeBingo({ items })
		})
	}

	return {
		bingo,
		toggleItem,
		checkHit,
		bingoText,
		setBingoText,
	} as const
}
