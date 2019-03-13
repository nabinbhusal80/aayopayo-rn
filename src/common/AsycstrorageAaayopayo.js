import { AsyncStorage } from 'react-native';

export const setAsyncData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    return e;
  }
};

export const getAsyncData = async (key) => {
  try {
    const asyncValue = await AsyncStorage.getItem(key);
    return asyncValue;
  } catch (e) {
    return e;
  }
};

export const updateAsyncData = async (key, value) => {
  await AsyncStorage.mergeItem(key, value);
};

export const multiSetAsync = async (keysValues) => {
  await AsyncStorage.multiSet(keysValues);
};

export const multiGetAsync = async (keys) => {
  const res = AsyncStorage.multiGet(keys);
  return res;
};