export function groupMenuByCategory(menu) {

  return menu.reduce((acc, item) => {

    const category = item.categoria

    if (!acc[category]) {
      acc[category] = []
    }

    acc[category].push(item)

    return acc

  }, {})
}