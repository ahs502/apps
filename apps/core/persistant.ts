const key = `app-data/${config.app}`

const value = localStorage.getItem(key)
let data: Persistant = value && JSON.parse(value)
data || update({})

function update(newData: Persistant): void {
  localStorage.setItem(key, JSON.stringify(newData))
  data = newData
}

const persistant: Persistant = new Proxy(data, {
  get(target, property: keyof Persistant, receiver) {
    return data[property]
  },
  set(target, property: keyof Persistant, value, receiver): boolean {
    update({
      ...data,
      [property]: value
    })
    return true
  },
  deleteProperty(target, property: keyof Persistant): boolean {
    const { [property]: value, ...newData } = data
    update(newData)
    return true
  }
}) as any

export default persistant
