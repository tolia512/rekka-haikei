import { useMemo } from 'react'
import { ScheduleRow } from '../../hooks/useHistoryDb'
import { formatYmdSlash } from '../../util'

type Props = {
	rows: Record<string, ScheduleRow>
}
function NextSchedule({ rows }: Props) {
	const _res = useMemo(() => {
		const res = {}
		const DAY1 = 1000 * 60 * 60 * 24
		const tomorrowTime = Date.now() + DAY1
		const todayStr = formatYmdSlash(Date.now())
		const tomorrowStr = formatYmdSlash(tomorrowTime)
		console.log(rows)
		console.log(rows[todayStr])
		console.log(rows[tomorrowStr])

		Object.entries(rows).forEach(([day, row]) => {
			row.items.filter((v) => v !== 'emp' && v !== 'skip').forEach((item) => {})
		})
	}, [rows])

	return <div></div>
}
export default NextSchedule
