import React from 'react';
import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from "../componets";
import {useDispatch, useSelector} from "react-redux";

import { setCategory,setSortBy } from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

const itemsCategory = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые'];

const sortItems = [
    {name: 'популярности', type: 'popular', order: 'decs'},
    {name: 'цене', type: 'price',order: 'decs'},
    {name: 'алфавиту', type: 'name',order: 'acs'}
];

 function Home() {

     const  items  = useSelector(({pizzas}) => pizzas.items);
     const  isLoaded  = useSelector(({pizzas}) => pizzas.isLoaded);
     const {category, sortBy}  = useSelector(({filters}) => filters);
     const dispatch  = useDispatch();

     React.useEffect(() => {
         dispatch(fetchPizzas(category, sortBy));
         // eslint-disable-next-line
     },[category, sortBy]);

     //useCallback т.к. нам нужна только 1 ссылка на категории при создании, при обновлении функци пересоздается,
     //и категории рендерятся повторно, что нам не нужно
     const onSelectCategory = React.useCallback(index => {
          dispatch(setCategory(index));
         // eslint-disable-next-line
     },[]);

     const onSelectSortBy= React.useCallback(index => {
         dispatch(setSortBy(index));
         // eslint-disable-next-line
     },[]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory = {category}
                    onClickItem={onSelectCategory}
                    items={itemsCategory}/>
                <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortBy}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded
                        ? items?.map(obj => <PizzaBlock key={obj.id} {...obj} />)
                        : Array(12).fill(0).map((_, index)=><PizzaLoadingBlock  key={index}/>)
                }
            </div>
        </div>
    );
}

export default Home;