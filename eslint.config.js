import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin'; // 수정: 정확한 경로로 불러오기
import pluginReact from 'eslint-plugin-react';

export default [
	{files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
	{languageOptions: {globals: globals.browser}},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		...pluginReact.configs.recommended, // "recommended" 설정을 기본으로 사용
		settings: {
			react: {
				version: 'detect', // React 버전 자동 감지
			},
		},
		rules: {
			'react/react-in-jsx-scope': 'off', // React 17 이상에서는 필수 아님
		},
	},
];
