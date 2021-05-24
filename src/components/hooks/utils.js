// Utilities for react to fix some of the problems during development

// IsBrowser
// Během příkazu `run build` systém nemůže provést generování všech souborů, protože nezná položku `window`,
// Která je dostupná jen v prohlížeč ale ne na serveru. Tahle utilita zkontroluje, zda je prohlížeč k dispozici a až poté spustí kód
export const isBrowser = () => typeof window !== "undefined";

// DEBOUNCE
// Utilita pro navbar a její automatické schovávání a ukazování na základě scrollu
// funkce Debounce dělá to, že spustí určitý kód za každý určitý časový úsek, např. každých 100ms.
export function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};