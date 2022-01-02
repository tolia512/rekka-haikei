import { Char } from './index'

type CvoteProfile = {
	id: Eekey
	chars: Char[]
}
export const CVOTE_PROFILES: CvoteProfile[] = [
	{
		id: 'gotoyome',
		chars: [
			{ id: '1', name: '一花', color: '#E4A9B0' },
			{ id: '2', name: '二乃', color: '#DC6A79' },
			{ id: '3', name: '三玖', color: '#CF5A4A' },
			{ id: '4', name: '四葉', color: '#CD5B3D' },
			{ id: '5', name: '五月', color: '#D15D4D' },
		],
	},
	{
		id: 'oreimo',
		chars: [
			{ id: 'ki', name: '桐乃', color: '#D6A883' },
			{ id: 'ku', name: '黒猫', color: '#262433' },
			{ id: 'ay', name: 'あやせ', color: '#424B65' },
			{ id: 'ba', name: 'バジ', color: '#515C6B' },
			{ id: 'ka', name: '加奈子', color: '#A35D4D' },
			{ id: 'ma', name: '真奈美', color: '#5F503C' },
			{ id: 'se', name: '瀬菜', color: '#85555D' },
		],
	},
	{
		id: 'oregairu',
		chars: [
			{ id: 'yk', name: '雪ノ下', color: '#424B65' },
			{ id: 'yi', name: 'ガハマ', color: '#E5AF9D' },
			{ id: 'ir', name: 'いろは', color: '#EAC9A7' },
			{ id: 'ot', name: '他', color: '#ffffff' },
		],
	},
	{
		id: 'saekano',
		chars: [
			{ id: 'mg', name: '加藤恵', color: '#433C43' },
			{ id: 'ut', name: '詩羽', color: '#4F4342' },
			{ id: 'er', name: '英梨々', color: '#EBD4AE' },
			{ id: 'iz', name: '出海', color: '#8F5254' },
			{ id: 'mt', name: '美智留', color: '#5F5580' },
		],
	},
	{
		id: 'monogatari',
		chars: [
			{ id: 'ht', name: 'ひたぎ', color: '#704B6D' },
			{ id: 'my', name: '八九寺', color: '#575452' },
			{ id: 'kn', name: '神原', color: '#56526E' },
			{ id: 'nd', name: '撫子', color: '#51453B' },
			{ id: 'hn', name: '羽川', color: '#4D4855' },
			{ id: 'sn', name: '忍', color: '#EDDB7D' },
			{ id: 'kr', name: '火憐', color: '#393939' },
			{ id: 'tk', name: '月火', color: '#393939' },
			{ id: 'on', name: '斧乃木', color: '#74BCBD' },
			{ id: 'ou', name: '忍野扇', color: '#111111' },
			{ id: 'oi', name: '老倉育', color: '#E0E0E0' },
		],
	},
	{
		id: 'oreshura',
		chars: [
			{ id: 'hr', name: '春咲', color: '#F2AE56' },
			{ id: 'nt', name: '夏川', color: '#5CA8DC' },
			{ id: 'ak', name: '秋篠', color: '#A3C940' },
			{ id: 'fy', name: '冬海', color: '#EC5CA5' },
		],
	},
	{
		id: 'jinsei',
		chars: [
			{ id: 'ri', name: '理系', color: '#887C7B' },
			{ id: 'bu', name: '文系', color: '#F3EBD9' },
			{ id: 'ta', name: '体育', color: '#BF908E' },
			{ id: 'si', name: '新聞', color: '#E3ECEE' },
			{ id: 'bi', name: '美術', color: '#ECD6E0' },
		],
	},
	{
		id: 'steinsgate',
		chars: [
			{ id: 'kr', name: '紅莉栖', color: '#724B2E' },
			{ id: 'my', name: 'まゆり', color: '#1E211A' },
			{ id: 'sz', name: '鈴羽', color: '#968169' },
			{ id: 'fe', name: 'フェ', color: '#BE8274' },
			{ id: 'rk', name: 'ルカ子', color: '#323D3A' },
			{ id: 'me', name: '萌郁', color: '#E7C087' },
		],
	},
	{
		id: 'toaru',
		chars: [
			{ id: 'msk', name: '御坂', color: '#A67965' },
			{ id: 'ind', name: 'イン', color: '#B8B8D3' },
			{ id: 'skh', name: '食蜂', color: '#E6D29A' },
			{ id: 'krk', name: '黒子', color: '#BC827A' },
			{ id: 'uih', name: '初春', color: '#4B484D' },
			{ id: 'stn', name: '佐天', color: '#535659' },
			{ id: 'knz', name: '神裂', color: '#453544' },
			{ id: 'hmg', name: '姫神', color: '#3B3B47' },
			{ id: 'ora', name: 'オリア', color: '#DFBB82' },
			{ id: 'mik', name: '舞夏', color: '#484A65' },
			{ id: 'kme', name: '小萌', color: '#CCA4A8' },
			{ id: 'huk', name: '氷華', color: '#73685D' },
			{ id: 'ror', name: 'ローラ', color: '#E0DAB0' },
			{ id: 'itw', name: '五和', color: '#6C5B67' },
			{ id: 'mtk', name: '光子', color: '#454552' },
			{ id: 'knh', name: '絹保', color: '#A08972' },
			{ id: 'hru', name: '春上', color: '#645158' },
			{ id: 'may', name: '万彬', color: '#56536B' },
			{ id: 'msj', name: '結標', color: '#8E4541' },

			{ id: 'fky', name: '吹寄', color: '#373234' },
			{ id: 'nnt', name: '布束', color: '#302F49' },
			{ id: 'mgn', name: '麦野', color: '#936555' },
			{ id: 'frn', name: 'フレン', color: '#E0D3A9' },
			{ id: 'mai', name: '最愛', color: '#8C6D51' },
			{ id: 'tkt', name: '滝壺', color: '#5E5C5B' },
			{ id: 'snr', name: '心理', color: '#EAD9AC' },
			{ id: 'feb', name: 'フェブ', color: '#E1DBC9' },
			{ id: 'ars', name: 'アリサ', color: '#CFB7C9' },
			{ id: 'dri', name: 'ドリー', color: '#A67A66' },
			{ id: 'oti', name: 'オティ', color: '#E2DBAE' },
			{ id: 'msi', name: '御坂妹', color: '#A67A66' },
			{ id: 'utd', name: '打ち止', color: '#A67A66' },
			{ id: 'bng', name: '番外', color: '#A67A66' },
			{ id: 'oth', name: '他', color: '#fff' },
		],
	},
]

export const eekeys = [
	'nonnon',
	'mia',
	'higurashi',
	'rakupro',

	'sakurasou',
	'masshiro',

	// 'codegeass',
	'kokaku',
	'psychopass',
	'lain',

	'steinsgate',

	'spin',

	'gotoyome',
	'oreimo',
	'oregairu',
	'saekano',
	'monogatari',
	'oreshura',
	'jinsei',
	'toaru',
] as const

export type Eekey = typeof eekeys[number] | false

export const TITLE_EX_PATTERNS: [string | RegExp, Eekey][] = [
	['のんのんびより', 'nonnon'],
	['アビス', 'mia'],
	['さくら荘', 'sakurasou'],
	['ひぐらしの', 'higurashi'],
	['experiments lain', 'lain'],
	// ['コードギアス', 'codegeass'],
	['攻殻機動隊', 'kokaku'],
	['PSYCHO-PASS', 'psychopass'],
	['廻って', 'spin'],
	['Steins;Gate', 'steinsgate'],
	['五等分の花嫁', 'gotoyome'],
	['俺の妹がこんなに', 'oreimo'],
	['やはり俺の青春ラブコメは', 'oregairu'],
	['冴えない彼女の育てかた', 'saekano'],
	[/[化猫傷偽終暦憑]物語/, 'monogatari'],
	['が修羅場すぎ', 'oreshura'],
	[/とある(魔術|科学)の/, 'toaru'],
]
