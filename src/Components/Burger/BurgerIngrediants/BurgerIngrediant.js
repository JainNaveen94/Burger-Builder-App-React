import React, {Component} from 'react';
import PropTypes from 'prop-types';

import burgerIngrediantCSS from './BurgerIngrediant.css';

class BurgerIngrediant extends Component {
    render() {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredient = <div className={burgerIngrediantCSS.BreadBottom}></div>;
                break;
            case ( 'bread-top' ):
                ingredient = (
                    <div className={burgerIngrediantCSS.BreadTop}>
                        <div className={burgerIngrediantCSS.Seeds1}></div>
                        <div className={burgerIngrediantCSS.Seeds2}></div>
                    </div>
                );
                break;
            case ( 'meat' ):
                ingredient = <div className={burgerIngrediantCSS.Meat}></div>;
                break;
            case ( 'cheese' ):
                ingredient = <div className={burgerIngrediantCSS.Cheese}></div>;
                break;
            case ( 'bacon' ):
                ingredient = <div className={burgerIngrediantCSS.Bacon}></div>;
                break;
            case ( 'salad' ):
                ingredient = <div className={burgerIngrediantCSS.Salad}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngrediant.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngrediant;