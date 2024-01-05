import { useMatch, useResolvedPath } from 'react-router-dom'
import { pathPatternToTo, pathToPathPattern } from './utils'

const useRouteMatch = (pattern: Parameters<typeof useMatch>[0]): ReturnType<typeof useMatch> => {
    return useMatch(pathToPathPattern(useResolvedPath(pathPatternToTo(pattern))))
}

export default useRouteMatch
