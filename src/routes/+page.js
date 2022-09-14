export async function load({

}) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  return {
    age: 34,
    users: users
  }
}