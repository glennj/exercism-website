declare type AvailableMatchers =
  | 'toBe'
  | 'toBeTrue'
  | 'toExist'
  | 'toNotExist'
  | 'toEqual'
  | 'toBeGreaterThanOrEqual'
  | 'toBeLessThanOrEqual'

interface MatcherResult {
  testsType: TestsType
  actual: any
  name: string
  slug: string
  pass: boolean
  errorHtml?: string
  note?: string
  expected?: any
}
