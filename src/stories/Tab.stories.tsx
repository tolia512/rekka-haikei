import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ComponentProps } from 'react'
import { Tabs } from '../components/common/Tab'
import { GlobalStyle } from '../config/init'
import { Setting } from '../types'

type Props = ComponentProps<typeof Tabs> & { setting: Setting }

export default {
	title: 'Tabs',
	component: Tabs,
	argTypes: {},
	decorators: [
		(s) => (
			<>
				<GlobalStyle />
				{s()}
			</>
		),
	],
	parameters: {},
	args: {},
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Full = Template.bind({})
Full.args = {
	items: [
		{ label: 'リスト' },
		{ label: '投票' },
		{ label: '結果' },
		{ label: 'ブックマーク' },
	],
}
