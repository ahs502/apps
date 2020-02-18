import * as path from 'path'
import keyFileStorage from 'key-file-storage'

const store = keyFileStorage(path.join(__dirname, '..', 'data'), false)

export default store
