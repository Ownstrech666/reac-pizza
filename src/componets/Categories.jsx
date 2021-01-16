import React from 'react';
import PropTypes from "prop-types";
//memo - следим только за пропсами,они обнрвились - рефрешем компонент
//что б не ререндерился компонент, типа оптимизация
//memo - сравнивает пропсы
const Categories = React.memo(function Categories({ activeCategory, items , onClickItem}) {
    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory === null ? 'active':''}
                    onClick={()=> onClickItem(null)}>
                    Все
                </li>
                {
                    items?.map((name,index) =>
                        <li className={activeCategory === index ? 'active':''}
                            onClick={()=>onClickItem(index)}
                            key={`${name}_${index}`} >
                            { name }
                        </li>
                    )
                }
            </ul>
        </div>
    );
});

// //типы передаваемых данных
// Categories.propTypes = {
//     activeCategory: PropTypes.oneOf([PropTypes.number, null]),//обяззательный параметр
//     items: PropTypes.arrayOf(PropTypes.string).isRequired,//обязательный параметр
//     onClickItem: PropTypes.func,
// };
// //в идеале все писать на TypeScript
//
// //если значение вдруг не передано, то по умолчанию будут эти значения
// Categories.defaultProps = {
//     activeCategory: null, items: [],
// }
export default Categories;