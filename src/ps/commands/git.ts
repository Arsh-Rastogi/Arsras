import type { PSCommand } from '@/types/chat';

export const command: PSCommand = {
	name: 'git',
	help: 'Links the GitHub repository',
	syntax: 'CMD',
	async run({ broadcast }) {
		broadcast('https://github.com/Arsh-Rastogi/Arsras');
	},
};
