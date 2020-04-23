interface SideMenuItemData {
  code: string
  label: string
  subItems?: SideMenuItemData[]
}

const sideMenuItemsData: SideMenuItemData[] = [
  {
    code: 'introduction',
    label: 'Introduction'
  },
  {
    code: 'tutorial',
    label: 'Tutorial',
    subItems: [
      { code: 'basics', label: 'Basics' },
      { code: 'advances', label: 'Advances' }
    ]
  },
  {
    code: 'examples',
    label: 'Examples',
    subItems: [
      { code: 'path', label: 'Path & Point' },
      { code: 'react-form', label: 'React Form' }
    ]
  },
  {
    code: 'api-documentation',
    label: 'API Documentation',
    subItems: [
      {
        code: 'validation',
        label: 'Validation class',
        subItems: [
          { code: 'initialization', label: 'Initialization' },
          { code: 'ok', label: '.ok' },
          { code: 'throw', label: '.throw()' }
        ]
      },
      {
        code: 'validator',
        label: 'validator',
        subItems: [
          { code: 'if', label: '.if()' },
          { code: 'must', label: '.must()' },
          { code: 'check', label: '.check()' }
        ]
      }
    ]
  }
]

export default sideMenuItemsData
