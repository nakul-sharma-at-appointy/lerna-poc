import React, { FC } from 'react'
import { Link, Route, HashRouter as Router, Routes, useRouteMatch, Navigate } from '../'

const A: FC = () => <>{console.log('render A')}Component A</>
const B: FC = () => (
    <>
        {console.log('render B')}Component B <Link to="a">A</Link>{' '}
        <Routes>
            <Route title="a" path="a" element={<A />} />
        </Routes>
    </>
)
const C: FC = () => <>{console.log('render C')}Component C</>
const D: FC = () => <>{console.log('render D')}Component D</>
const E: FC = () => <>{console.log('render E')}Component E</>
const F: FC = () => <>{console.log('render F')}Component F</>
const X: FC = () => {
    console.log(useRouteMatch(':id'))
    return (
        <>
            {console.log('render X')}Component X{' '}
            <Routes>
                <Route title="a" path=":id" element={<Y />} />
            </Routes>
        </>
    )
}
const Y: FC = () => <>{console.log('render Y')}Component Y</>

export default { title: 'Router' }

export const Default = () => (
    <>
        <Router preserveQueryParams>
            <ul>
                <li>
                    <Link to={`b/a?date=asdasd`}>A</Link>
                </li>
                <li>
                    <Link to={`b`}>B</Link>
                </li>
                <li>
                    <Link to={`c?time=343`}>C</Link>
                </li>
                <li>
                    <Link to={`d?date=89`}>D</Link>
                </li>
                <li>
                    <Link to={`e`}>E</Link>
                </li>
                <li>
                    <Link to={`f?date=34ss&time=232ss3`}>F</Link>
                </li>
                <li>
                    <Link to={`asdsd`}>F</Link>
                </li>
            </ul>
            <Routes>
                <Route title="b" path="a" element={<A />} />
                <Route title="b" path="b/*" element={<B />} />
                <Route title="c" path="c" element={<C />} />
                <Route title="d" path="d" element={<D />} />
                <Route title="e" path="e" element={<E />} />
                <Route title="f" path="f" element={<F />} />
                <Route title="b" path="x" element={<X />}>
                    <Route title="a" path=":id" element={<Y />} />
                </Route>
                <Navigate to="x/y" />
            </Routes>
        </Router>
        <Link href="https://google.com">Google</Link>
        <Link>Button</Link>
    </>
)
