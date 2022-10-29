import React, {useContext, useEffect, useRef} from 'react';
import {ItemContext} from '../../context/ItemContext';
import CategoriesList from './category/CategoriesList';
import Item from './Item';
import Search from './Search';
import {gsap} from 'gsap'


function Home() {
  // const [itemsData, setItemsData, categoryItems] = useContext(ItemContext);
  // const [items, dispatch] = useState('');
  const [ categories, items, dispatch ] = useContext(ItemContext)
  const proSection = useRef(null);
  useEffect(() => {
    dispatch({type: 'CATEGORY_ITEMS', payload: 1})
    gsap.fromTo(proSection.current , {y: '50%', opacity: 0.5},{y: '0%', opacity: 1, duration: 1.2, ease: 'easeout'})
  }, [])


  return (

      <main className="container mx-auto bg-white transition duration-200 dark:bg-gray-700 dark:text-white space-y-4 shadow-2xl">
        {/* <Search /> */}
        <CategoriesList />
        
        <div ref={proSection} className="relative space-y-2 flex flex-col justify-center items-center">
          {
            items.map(item => <Item key={item.id} item={item} />)
          }
        </div>
        <div className="h-1"></div>
      </main>

  );
}

export default Home;
