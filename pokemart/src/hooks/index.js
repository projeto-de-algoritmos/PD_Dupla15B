import React, {
  createContext,
  useContext,
  useState,
} from 'react';

import { toast } from 'react-toastify';
import data from '../assets/store_itens';

const GlobalsContext = createContext({});

const GlobalsProvider= ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products] = useState(data);

  const addToCart = (id) => {
    const newItem = cart.find((item) => item.id === id);

    const product = products.find((item) => item.id === id);

    if (!newItem) {
      return setCart(state => [...state, { ...product}]);
    };

    if (newItem.amount + 1 > product.amount) {
      return toast.error('Quantidade solicitada fora de estoque!');
    }

    setCart(state => {
      return state.map((item) => item);
    });
  }

  const removeItemFromCart = (id) => {
    return setCart((state) => state.filter((product) => product.id !== id));
  }


  const maxKnapsack = (items, W) => {
    let cache = [];
    for (let g = 0; g < items.length+1; g++) {
      cache[g] = [];
      for (let h = 0; h < W+1; h++) {
        cache[g][h] = {num:0, itens: []}
      }
    }
    let weights = items.map(item => item.price);
    let values = items.map(item => item.priority);

    for (let i = 0; i < items.length+1; i++) {
      for (let j = 0; j < W+1; j++) {
        if (i === 0 || j === 0) {
          cache[i][j].num = 0;
        }
        else if (weights[i-1] <= j) {
          let included = values[i-1] + cache[i-1][j-weights[i-1]].num;
          let excluded = cache[i-1][j].num;
          cache[i][j].num = Math.max(included, excluded);
          if (cache[i][j].num === included) {
            cache[i][j].itens = [items[i-1],...cache[i-1][j-weights[i-1]].itens];
          } else {
            cache[i][j].itens = [...cache[i-1][j].itens];
            }
          }
          else {
            if (cache[i][j]) {
              cache[i][j].num = cache[i-1][j].num;
              cache[i][j].itens = cache[i-1][j].itens;
            }
          }
      }
   }
   return cache[items.length][W];
}

  const cartOptimize = (wallet) => {
    if (wallet <= 0) return toast.error("Valor da carteira invalido!");
    if (cart.length === 0) return toast.error("O carrinho está vazio!");

    const cartCopy = [...cart];

    const ordenedCart = [];

    cartCopy.forEach((item) => {
      for (let i = 0; i < item.amount; i++) {
        ordenedCart.push(item);
      }
    })

    ordenedCart.sort((a, b) => (a.price > b.price) ? 1 : -1);

    const response = maxKnapsack(ordenedCart, wallet);

    const unique = [...new Set(response.itens)];

    const newCart = unique.map(value => {
      return {
        ...value,
        amount: response.itens.filter(item => item.id === value.id).length
      }
    });

    setCart(newCart);
    toast.success('Carrinho otimizado com sucesso!')
  }

  return (
    <GlobalsContext.Provider
      value={{
        cart,
        products,
        addToCart,
        removeItemFromCart,
        cartOptimize
      }}
    >
      {children}
    </GlobalsContext.Provider>
  );
};

function useGlobals() {
  const context = useContext(GlobalsContext);

  if (!context) {
    throw new Error('useGlobals must be used within a GlobalsProvider');
  }

  return context;
}

export { GlobalsProvider, useGlobals };