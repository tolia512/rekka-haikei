import { useRouter } from 'next/dist/client/router'
import { ParsedUrlQuery } from 'querystring'
import { useEffect } from 'react'
import config from '../config'

export function useQeuryEid() {
	const router = useRouter()
	const { eid } = router.query

	if (typeof eid === 'object') return eid[0]

	return eid || config.eventId
}

const getQuery = (query: ParsedUrlQuery, path: string, queryKey: string) => {
	const q = query[queryKey]
	if (q) {
		if (typeof q === 'object') return q?.[0] || ''
		return q
	}
	const mq = path.match(new RegExp(`[&?]${queryKey}=(.*)(&|$)`))
	return mq ? decodeURIComponent(mq[1]) : undefined
}

export function useQuerySearch() {
	const router = useRouter()
	return getQuery(router.query, router.asPath, 'q')
}
export function useQueryChoise() {
	const router = useRouter()
	return getQuery(router.query, router.asPath, 'tab')
}

export const useQueryInit = (
	detected: (q: string) => void,
	hasTab: (tab: number) => void
) => {
	const q = useQuerySearch()
	const tab = useQueryChoise()
	console.log({ q, tab })

	const router = useRouter()

	useEffect(() => {
		if (!q && !tab === undefined) return

		if (q) {
			detected(decodeURI(q))
		}
		if (tab !== undefined && Number(tab) >= 0) {
			hasTab(Number(tab))
		}

		const trimedQueryPath = router.asPath.split('?')[0]

		// router.push(trimedQueryPath, undefined, { shallow: true })
		router.replace(trimedQueryPath)
	}, [q])
}
