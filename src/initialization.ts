import { isOk, unwrapOk } from 'option-t/esm/PlainResult/Result';
import { createInMemoryStorage, createLocalStorage, createSessionStorage, DOMStorageLikeDriver } from './driver/mod.js';

export async function createLocalStorageWithFallback(keyPrefix: string): Promise<DOMStorageLikeDriver> {
    const real = await createLocalStorage(keyPrefix);
    if (isOk(real)) {
        const actuial = unwrapOk(real);
        return actuial;
    }

    const fallback = createInMemoryStorage();
    return fallback;
}

export async function createSessionStorageWithFallback(keyPrefix: string): Promise<DOMStorageLikeDriver> {
    const real = await createSessionStorage(keyPrefix);
    if (isOk(real)) {
        const actuial = unwrapOk(real);
        return actuial;
    }

    const fallback = createInMemoryStorage();
    return fallback;
}
