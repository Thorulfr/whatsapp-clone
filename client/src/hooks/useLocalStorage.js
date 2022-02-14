// Imports
import { useEffect, useState } from 'react';

// Prefix our key so it's unique in localStorage
const PREFIX = 'whatsapp-clone-';

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key;
    const [value, setValue] = useState(() => {
        // Get value from localStorage
        const jsonValue = localStorage.getItem(prefixedKey);
        if (jsonValue != null) return JSON.parse(jsonValue);
        if (typeof initialValue === 'function') {
            return initialValue();
        } else {
            return initialValue;
        }
    });
    // Store value in localStorage
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value));
    }, [prefixedKey, value]);
    return [value, setValue];
}
