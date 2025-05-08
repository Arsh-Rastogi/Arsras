import { toId } from '@/tools';

export const ranks = ['locked', 'muted', 'regular', 'whitelist', 'voice', 'driver', 'mod', 'bot', 'owner', 'admin'] as const;

export const owner = process.env.PS_OWNER ?? 'Arsh_._.Rastogi';
const _admins = process.env.PS_ADMINS?.split(/ *, */) ?? [];
export const admins = _admins.map(toId);
export const username = process.env.PS_USERNAME ?? 'Arsras';
export const password = process.env.PS_PASSWORD ?? 'arsrasbotarsh';
export const rooms = process.env.PS_ROOMS?.split(',') ?? ['botdevelopment'];
export const prefix = process.env.PREFIX ?? ',';
