import AsyncStorage from '@react-native-async-storage/async-storage';

export const PROFILE_KEY = 'LASTFLOOR_PROFILE_V1';
export const CHAR_KEY = 'LASTFLOOR_CHAR_V1';
export const STATS_KEY = 'LASTFLOOR_STATS_V1';
export const COINS_KEY = 'LASTFLOOR_COINS_V1';
export const LOCATION_KEY = 'LASTFLOOR_LOCATION_V1';
export const LASTRESULT_KEY = 'LASTFLOOR_LASTRESULT_V1';
export const ALL_STORAGE_KEYS = [PROFILE_KEY, CHAR_KEY, STATS_KEY, COINS_KEY, LOCATION_KEY, LASTRESULT_KEY];
export const CONTINUE_COST_BASE = 15;

export const defaultProfile = {
  name: '',
  settings: {
    micEnabled: true,
    soundEnabled: true,
    enableElevatorQuestions: true,
  },
};

export const defaultStats = {
  totalPlayMs: 0,
  bestEscapeMs: 0,
  escapes: 0,
  deaths: 0,
  totalRuns: 0,
  coins: 0,
};

export const _memStore = {};

export const storage = {
  async get(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null && value !== undefined) return value;
      return _memStore[key] ?? null;
    } catch {
      return _memStore[key] ?? null;
    }
  },
  async set(key, value) {
    _memStore[key] = value;
    try {
      await AsyncStorage.setItem(key, value);
    } catch {}
  },
  async remove(key) {
    delete _memStore[key];
    try {
      await AsyncStorage.removeItem(key);
    } catch {}
  },
};

export async function clearAllGameStorage() {
  for (const key of ALL_STORAGE_KEYS) {
    delete _memStore[key];
  }
  try {
    await AsyncStorage.clear();
  } catch {
    try {
      await AsyncStorage.multiRemove(ALL_STORAGE_KEYS);
    } catch {
      for (const key of ALL_STORAGE_KEYS) {
        try {
          await AsyncStorage.removeItem(key);
        } catch {}
      }
    }
  }
}
