import React,{useState, useContext} from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './index.css';
import {ItemProvider, ItemContext} from './context/ItemContext'
import TopNav from './components/layout/TopNav';
import SideNav from './components/layout/SideNav';
import BottomNav from './components/layout/BottomNav';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './components/home/Home';

function App() {
    
    const [itemsData, setItemsData] = useContext(ItemContext);
    const [search, setSearch] = useState(false)
    const [sideNav, setSideNav] = useState(false)
    
    return (
        <div className="relative max-w-md mx-auto shadow-2xl h-screen transition duration-100 dark:bg-gray-700">
            
            <Router>
            <TopNav type={true} sideNav={sideNav} setSideNav={setSideNav} />

            <SideNav sideNav={sideNav} setSideNav={() => setSideNav()} />
            <TransitionGroup>
                <CSSTransition
                    timeout={300}
                    classNames="alert"
                >
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            {/* <BottomNav />     */}
            </Router>
        </div>
    )
}

export default App
