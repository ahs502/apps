const content: Content = [section('introduction', 'Introduction', require('../content/introduction.md').default)]

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
