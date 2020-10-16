import Img from 'gatsby-image';
import React from 'react';

import MenuItemStyles from '../styles/MenuItemStyles';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';

export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
  return (
    <>
      {order.map((singleOrder, index) => {
        const singlePizza = pizzas.find((pizza) => pizza.id === singleOrder.id);
        return (
          <MenuItemStyles key={`${index}-${singleOrder.id}`}>
            <Img fluid={singlePizza.image.asset.fluid} />
            <h2>{singlePizza.name}</h2>
            <p>
              {formatMoney(
                calculatePizzaPrice(singlePizza.price, singleOrder.size)
              )}{' '}
              <button
                type="button"
                className="remove"
                title={`Remove ${singleOrder.size} ${singlePizza.name} from order!!`}
                onClick={() => removeFromOrder(index)}
              >
                &times;
              </button>
            </p>
          </MenuItemStyles>
        );
      })}
    </>
  );
}
