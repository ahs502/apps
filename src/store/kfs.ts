import * as path from 'path'
import keyFileStorage from 'key-file-storage'

const storagePath = process.env['STORAGE_PATH'] || path.join(__dirname, '../..', 'data')
console.log('>> Storage path is'.yellow, storagePath.yellow.bold)

const kfs = keyFileStorage(storagePath, false)

export default kfs
