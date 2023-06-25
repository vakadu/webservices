import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const themeAtom = atomWithStorage('theme', 'light')

export function useTheme() {
	const [mode, setMode] = useAtom(themeAtom);

	const toggleMode = (theme: 'light' | 'dark') => setMode(theme);

	return {
		mode,
		toggleMode,
	}; 
}

export default useTheme;