import kfs, { Store } from '../kfs'

interface VisitStatus {
  total: number
  year: number
  month: number
  day: number
  thisYear: number
  thisMonth: number
  thisDay: number
}
/**
 * Counts the number of validation app visits by +1
 * and returns the current date visits count status.
 */
export async function validationVisitUp(): Promise<VisitStatus> {
  const now = new Date()
  const year = now.getUTCFullYear()
  const month = now.getUTCMonth()
  const day = now.getUTCDate()

  const visitsKey = 'validation/visits'
  const visits: Store['validation']['visits'] = await kfs('validation/visits')

  const newVisits: NonNullable<typeof visits> = !visits
    ? {
        count: 1,
        year: {
          [year]: {
            count: 1,
            month: {
              [month]: {
                count: 1,
                day: {
                  [day]: 1
                }
              }
            }
          }
        }
      }
    : {
        count: visits.count + 1,
        year: {
          ...visits.year,
          [year]: !visits.year[year]
            ? {
                count: 1,
                month: {
                  [month]: {
                    count: 1,
                    day: {
                      [day]: 1
                    }
                  }
                }
              }
            : {
                count: visits.year[year].count + 1,
                month: {
                  ...visits.year[year].month,
                  [month]: !visits.year[year].month[month]
                    ? {
                        count: 1,
                        day: {
                          [day]: 1
                        }
                      }
                    : {
                        count: visits.year[year].month[month].count + 1,
                        day: {
                          ...visits.year[year].month[month].day,
                          [day]: !visits.year[year].month[month].day[day] ? 1 : visits.year[year].month[month].day[day] + 1
                        }
                      }
                }
              }
        }
      }

  await kfs('validation/visits', newVisits)

  return {
    total: newVisits.count,
    year,
    month,
    day,
    thisYear: newVisits.year[year].count,
    thisMonth: newVisits.year[year].month[month].count,
    thisDay: newVisits.year[year].month[month].day[day]
  }
}
