/**
 * Storage module - Wrapper for Neutralino.storage API
 */

/**
 * Get data from storage
 * @param {string} key - Storage key
 * @returns {Promise<string|null>} - Stored value or null if not found
 */
async function storageGet(key) {
    try {
        const data = await Neutralino.storage.getData(key);
        return data;
    } catch (e) {
        return null;
    }
}

/**
 * Set data in storage
 * @param {string} key - Storage key
 * @param {string} value - Value to store
 * @returns {Promise<void>}
 */
async function storageSet(key, value) {
    // Ensure value is a string, as Neutralino expects strings
    if (typeof value !== 'string') {
        value = String(value);
    }
    try {
        await Neutralino.storage.setData(key, value);
    } catch (err) {
        console.error(`Error saving key "${key}":`, err);
    }
}