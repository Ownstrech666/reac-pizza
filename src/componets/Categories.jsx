import React from 'react';

//memo - следим только за пропсами,они обнрвились - рефрешем компонент
//что б не ререндерился компонент, типа оптимизация
//memo - сравнивает пропсы
const Categories = React.memo(function Categories({ items , onClickItem}) {

    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem= index =>{
        if (activeItem !== index) {
            setActiveItem(index);
            onClickItem(index);
        }

    };

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? 'active':''}
                    onClick={()=> onSelectItem(null)}>
                    Все
                </li>
                {
                    items?.map((name,index) =>
                        <li className={activeItem === index ? 'active':''}
                            onClick={()=>onSelectItem(index)}
                            key={`${name}_${index}`} >
                            { name }
                        </li>
                    )
                }
            </ul>
        </div>
    );
});

export default Categories;