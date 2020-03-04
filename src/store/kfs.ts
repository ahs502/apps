import * as path from 'path'
import keyFileStorage from 'key-file-storage'

const kfs = keyFileStorage(path.join(__dirname, '../..', 'data'), false)

export default kfs
