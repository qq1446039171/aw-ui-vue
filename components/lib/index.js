/*
 * @Description:
 * @Version: 2.0
 * @Author: 黄博文
 * @Date: 2022-04-18 16:55:39
 * @LastEditors: 黄博文
 * @LastEditTime: 2022-04-26 14:02:05
 */
// import Demo from './demo'
import Card from './card'
import Button from './button'
import Link from './link'
import Tree from './tree'
import Label from './label'
import Input from './input'
import Table from './table'

const components = {
  // Demo,
  Card,
  Button,
  Link,
  Tree,
  Label,
  Input,
  Table
}
// console.log(components)
const install = function (Vue) {
  if (install.installed) return
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}
// console.log(install)
const API = {
  install
}
export default API

// export { install }
// export { Demo, Card, Button, Link }
