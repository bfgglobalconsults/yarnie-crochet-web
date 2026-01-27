import { ShoppingCart } from 'lucide-react'

export function OpenCartButton({
  className,
  quantity,
  ...rest
}: {
  className?: string
  quantity?: number
}) {
  return (
    <button
      className="relative text-white hover:text-gold transition-colors"
      aria-label="Shopping Cart"
      {...rest}
    >
      <ShoppingCart className="h-5 w-5" />
      {quantity && quantity > 0 ? (
        <span className="absolute -top-2 -right-2 bg-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
          {quantity}
        </span>
      ) : null}
    </button>
  )
}
