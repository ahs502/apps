import { apiRequest } from '../../../core/api-request'

export default async function visitUp(): Promise<void> {
  try {
    const visitStatus: VisitStatus = await apiRequest('POST', 'validation/visit-up')
    console.log(visitStatus)
  } catch (reason) {
    console.error('Unable to visit up:', reason)
  }
}
