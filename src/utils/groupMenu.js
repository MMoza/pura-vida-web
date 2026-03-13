export function groupMenuByCategory(menu) {

  return menu.reduce((acc, item) => {

    if (!acc[item.categoria]) {
      acc[item.categoria] = []
    }

    acc[item.categoria].push(item)

    return acc

  }, {})

}