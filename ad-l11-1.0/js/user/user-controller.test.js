const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user that is not in the list', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  expect(userController.getUsers()).not.toContain(user);
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test('remove user that is not in the list', () => {
  let user = new User(5678, "Carla", "carla@example.com");
  userController.remove(user); // No debería lanzar errores incluso si el usuario no está en la lista
  expect(userController.getUsers()).not.toContain(user);
});

test('find user by email', () => {
  let user = new User(7890, "Laura", "laura@example.com");
  userController.add(user);
  expect(userController.findByEmail("laura@example.com")).toBe(user);
});

test('find user by email not in list', () => {
  expect(userController.findByEmail("noexists@example.com")).toBeUndefined();
});

test('find user by id', () => {
  let user = new User(5555, "Carlos", "carlos@example.com");
  userController.add(user);
  expect(userController.findById(5555)).toBe(user);
});

test('find user by id not in list', () => {
  expect(userController.findById(9999)).toBeUndefined();
});
