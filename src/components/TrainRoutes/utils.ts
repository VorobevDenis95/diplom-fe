interface MinPriceValueObject {
  price?: number,
  top_price: number,
  bottom_price: number
  side_price?: number
}

function getMinPriceClass(obj: MinPriceValueObject) {
  return Math.min(...Object.values(obj))
}

export {getMinPriceClass};