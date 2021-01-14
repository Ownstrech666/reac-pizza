import React from 'react';
import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from "../componets";
import {useDispatch, useSelector} from "react-redux";

import { setCategory } from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

const itemsCategory = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые'];

const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'}
];

 function Home() {

     const  items  = useSelector(({pizzas}) => pizzas.items);
     const  isLoaded  = useSelector(({pizzas}) => pizzas.isLoaded);
     const dispatch  = useDispatch();

     React.useEffect(() => {
         dispatch(fetchPizzas());
         // eslint-disable-next-line
     },[]);

     //useCallback т.к. нам нужна только 1 ссылка на категории при создании, при обновлении функци пересоздается,
     //и категории рендерятся повторно, что нам не нужно
     const onSelectCategory = React.useCallback(index => {
          dispatch(setCategory(index));
         // eslint-disable-next-line
     },[]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={itemsCategory}/>
                <SortPopup items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded
                        ? items?.map(obj => <PizzaBlock key={obj.id} {...obj} />)
                        : Array(12).fill(<PizzaLoadingBlock/>)
                }
            </div>
        </div>
    );
}

export default Home;