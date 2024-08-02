import { Products } from '@/app/_components/(public)/products/data/schema';
import { useAlert } from '@/utils/AlertProvider/AlertProvider';
import { useCart } from '@/utils/CartProvider/CartProvider';

function useCarts() {
  const { state, dispatch } = useCart();
  const { setAlert } = useAlert();
  const addProductToCart = (product: Products) => {
    setAlert(`${product.name}`, 'Adicionado ao Carrinho', 'success');
    dispatch({ type: 'ADD_TO_CART', product });
  };

  const RemoveFromCart = (productId: number) => {
    setAlert('Produto', 'Removido Com Sucesso', 'info');
    dispatch({ type: 'REMOVE_FROM_CART', productId });
  };

  const ClearCart = () => {
    setAlert('Carrinho', 'Esvaziado Com Sucesso', 'info');
    dispatch({ type: 'CLEAR_CART' });
  };

  return {
    state,
    dispatch,
    addProductToCart,
    RemoveFromCart,
    ClearCart,
  };
}

export default useCarts;
