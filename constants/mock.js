import { PARTICIPANT_HUMAN } from '../services/openai.js';

export const MOCK_TEXT_OK = 'OKK！';

export const MOCK_GROUP_01 = '000001';
export const MOCK_GROUP_02 = '000002';

export const MOCK_USER_01 = '000001';
export const MOCK_USER_02 = '000002';

const mockUsers = {};
mockUsers[MOCK_USER_01] = { displayName: `${PARTICIPANT_HUMAN}` };
mockUsers[MOCK_USER_02] = { displayName: `${PARTICIPANT_HUMAN} 2` };

export { mockUsers };
