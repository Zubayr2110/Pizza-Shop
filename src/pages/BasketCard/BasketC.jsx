import { useGlobalContext } from "../../context"
import BasketCard from "./BasketCard"

export default function BasketC() {
    const { cart, basket } = useGlobalContext()
  return (
    <div>
        {cart.map(item => <BasketCard key={item.id} {...item}/>)}
        {basket.map(item => <BasketCard key={item.id} {...item}/>)}
    </div>
  )
}
