const content: Content = [
  section('introduction', 'Introduction', require('../content/introduction.md').default),
  section(
    'tutorial',
    'Tutorial',
    require('../content/tutorial.md').default,
    section('basics', 'Basics', require('../content/tutorial/basics.md').default),
    section('advances', 'Advances', require('../content/tutorial/advances.md').default)
  )
]

console.log(content)

export default content

export interface Section {
  code: string
  label: string
  markdown: string
  content?: Content
}
export type Content = Section[]

function section(code: string, label: string, markdown: string, ...content: Content): Section {
  if (!code || !label) throw new Error('Invalid side menu item data.')
  const section: Section = {
    code,
    label,
    markdown
  }
  if (content.length) {
    section.content = content
  }
  return section
}
