const logoPicker = technology => {
  switch (technology) {
    case "Node Js":
      return "nodejs.svg"
      break
    case "Express":
      return "express.png"
      break
    case "Mongo Db":
      return "mongo.png"
      break
    default:
      return "express.png"
      break
  }
}

export default logoPicker
