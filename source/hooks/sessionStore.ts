export default {
    get<T>(key: string): T {
        return JSON.parse(window.sessionStorage.getItem(key)) as T;
    },
    set(key: string, value: any): void {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    },
    remove(key: string): void {
        window.sessionStorage.removeItem(key);
    },
    key(idx: number): string {
        return window.sessionStorage.key(idx);
    },
    length(): number {
        return window.sessionStorage.length;
    },
};
