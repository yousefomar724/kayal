import React, { useState, createContext, useReducer } from 'react'
import { itemsData } from './itemsData';
export const ItemContext = createContext();
const Catereducer = (state, action) => {
    switch (action.type) {
        case "CATEGORY_SELECTION":
            let categories = itemsData.map((category) => ({
                id: category.id,
                title: category.title,
                image: category.image,
                selected: category.id === action.payload ? true : false,
            })
            );

            return categories;

        default:
            return categories = itemsData.map((category) => ({
                id: category.id,
                title: category.title,
                image: category.image,
                selected: category.id === 1 ? true : false,
            }));
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case "CATEGORY_ITEMS":
            let data = itemsData.map((category) => {
                if (category.id !== action.payload)
                    category.selected = false;
                else
                    category.selected = true;

                return category;
            })

            let items = data.find((category) => category.id === action.payload).items

            return items;

        default:
            return itemsData.find((category) => category.id === action.payload).items;
    }
};

export const ItemProvider = props => {

    const initcategories = itemsData.map((category) => ({
        id: category.id,
        title: category.title,
        image: category.image,
        selected: category.id === 1 ? true : false,
    })
    );

    const [items, dispatch] = useReducer(reducer, itemsData[0].items);
    const [categories, Catedispatch] = useReducer(Catereducer, initcategories);

    return (
        <ItemContext.Provider value={[categories, items, dispatch, Catedispatch]}>
            {props.children}
        </ItemContext.Provider>
    )
}

export default ItemContext
