import AsyncStorage from '@react-native-community/async-storage';

const storage = {
    save: async (key, jsonData) => {
        try{
            return await AsyncStorage.setItem(key, jsonData)
        }
        catch (e) {
            //TODO Storage error treatment
            console.log('storage.save ERROR:', e);
            return e
        }
    },

    load: async (key) => {
        try{
            return await AsyncStorage.getItem(key)
        }
        catch (e) {
            //TODO Storage error treatment
            console.log('storage.load ERROR:', e);
            return e
        }
    },

    delete: async (key) => {
        try{
            return await AsyncStorage.removeItem(key)
        }
        catch (e) {
            //TODO Storage error treatment
            console.log('storage.delete ERROR:', e);
            return e
        }
    },

    clear: async () => {
        return await AsyncStorage.clear()
    }
};

export default storage
